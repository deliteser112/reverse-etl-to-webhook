import { MappingRule } from "./types";

export function setPath(target: Record<string, any>, path: string, value: any) {
  const keys = path.split(".").filter(Boolean);
  if (keys.length === 0) return;

  let cur: any = target;

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];

    if (i === keys.length - 1) {
      cur[k] = value;
      return;
    }

    // if existing is not an object, overwrite 
    if (cur[k] == null || typeof cur[k] !== "object" || Array.isArray(cur[k])) {
      cur[k] = {};
    }
    cur = cur[k];
  }
}

export function applyMapping(
  row: Record<string, unknown>,
  mapping: MappingRule[]
): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const rule of mapping) {
    const value = row[rule.column];
    setPath(out as any, rule.path, value);
  }

  return out;
}
