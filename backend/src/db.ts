import { Pool } from "pg";

const poolCache = new Map<string, Pool>();

function getPool(connectionString: string): Pool {
  const existing = poolCache.get(connectionString);
  if (existing) return existing;

  const pool = new Pool({
    connectionString,
    max: 5
  });

  poolCache.set(connectionString, pool);
  return pool;
}

export async function testConnection(connectionString: string): Promise<void> {
  const pool = getPool(connectionString);
  await pool.query("SELECT 1;");
}

export async function listTables(connectionString: string): Promise<string[]> {
  const pool = getPool(connectionString);

  const result = await pool.query<{
    table_name: string;
  }>(
    `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
    ORDER BY table_name;
    `
  );

  return result.rows.map((r) => r.table_name);
}

export async function listColumns(
  connectionString: string,
  table: string
): Promise<{ name: string; type: string }[]> {
  const pool = getPool(connectionString);

  const result = await pool.query<{
    column_name: string;
    data_type: string;
  }>(
    `
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = $1
    ORDER BY ordinal_position;
    `,
    [table]
  );

  return result.rows.map((r) => ({ name: r.column_name, type: r.data_type }));
}

/**
 * Minimal identifier safety check.
 * We still recommend validating table names against listTables() results.
 */
export function assertSafeIdentifier(name: string, label: string): void {
  // allow letters, numbers, underscore only (simple & safe)
  const ok = /^[a-zA-Z0-9_]+$/.test(name);
  if (!ok) {
    throw new Error(`Invalid ${label}. Only letters, numbers, underscore allowed.`);
  }
}

export async function selectRows(
  connectionString: string,
  table: string,
  limit: number
): Promise<Record<string, unknown>[]> {
  const pool = getPool(connectionString);

  // table cannot be parameterized, so validate + whitelist in routes
  const sql = `SELECT * FROM ${table} LIMIT $1;`;
  const result = await pool.query(sql, [limit]);
  return result.rows;
}
