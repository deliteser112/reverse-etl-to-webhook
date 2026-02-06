import { Router } from "express";
import {
  assertSafeIdentifier,
  listColumns,
  listTables,
  selectRows,
  testConnection
} from "./db";
import { applyMapping } from "./transform";
import { PreviewRequestBody } from "./types";

export const apiRouter = Router();

apiRouter.post("/test-connection", async (req, res) => {
  try {
    const { connectionString } = req.body as { connectionString?: string };
    if (!connectionString) return res.status(400).json({ error: "connectionString is required" });

    await testConnection(connectionString);
    return res.json({ ok: true });
  } catch (err: any) {
    const message = err?.message || "Connection failed";
    console.error(message);
    return res.status(400).json({ error: message });
  }
});

apiRouter.post("/tables", async (req, res) => {
  try {
    const { connectionString } = req.body as { connectionString?: string };
    if (!connectionString) return res.status(400).json({ error: "connectionString is required" });

    const tables = await listTables(connectionString);
    if (tables.length === 0) {
      return res.status(404).json({ error: "No tables found in the database" });
    }

    return res.json({ tables });
  } catch (err: any) {
    const message = err?.message || "Failed to fetch tables";
    console.error(message);
    return res.status(400).json({ error: message });
  }
});

apiRouter.post("/columns", async (req, res) => {
  try {
    const { connectionString, table } = req.body as { connectionString?: string; table?: string };
    if (!connectionString) return res.status(400).json({ error: "connectionString is required" });
    if (!table) return res.status(400).json({ error: "table is required" });

    const tables = await listTables(connectionString);
    if (!tables.includes(table)) {
      return res.status(404).json({ error: "Table not found" });
    }

    const columns = await listColumns(connectionString, table);
    if (columns.length === 0) {
      return res.status(404).json({ error: "No columns found for this table" });
    }

    return res.json({ columns });
  } catch (err: any) {
    const message = err?.message || "Failed to fetch columns";
    console.error(message);
    return res.status(400).json({ error: message });
  }
});

apiRouter.post("/preview", async (req, res) => {
  try {
    const body = req.body as Partial<PreviewRequestBody>;

    if (!body.connectionString) return res.status(400).json({ error: "connectionString is required" });
    if (!body.table) return res.status(400).json({ error: "table is required" });
    if (!body.mapping) return res.status(400).json({ error: "mapping is required" });

    const limit = Math.max(1, Math.min(Number(body.limit ?? 5), 100)); // clamp 1..100
    const table = body.table;

    assertSafeIdentifier(table, "table");

    const tables = await listTables(body.connectionString);
    if (!tables.includes(table)) return res.status(400).json({ error: "Unknown table" });

    // Validate mapping rules
    for (const rule of body.mapping) {
      if (!rule.column || !rule.path) {
        return res.status(400).json({ error: "Each mapping item must have column and path" });
      }
      // keep this permissive; frontend can validate more, i think this would be TODO
      if (rule.path.includes("..")) {
        return res.status(400).json({ error: "Invalid path" });
      }
    }

    const rows = await selectRows(body.connectionString, table, limit);
    const preview = rows.map((r) => applyMapping(r, body.mapping!));

    return res.json({ preview });
  } catch (err: any) {
    return res.status(400).json({ error: err?.message ?? "Failed to preview" });
  }
});
