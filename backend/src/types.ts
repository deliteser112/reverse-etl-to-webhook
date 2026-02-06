export type MappingRule = {
  column: string;
  path: string;
};

export type PreviewRequestBody = {
  connectionString: string;
  table: string;
  limit: number;
  mapping: MappingRule[];
};
