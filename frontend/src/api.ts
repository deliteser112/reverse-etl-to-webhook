import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const testConnection = async (connectionString: string) => {
  return axios.post(`${API_URL}/test-connection`, { connectionString });
};

export const getTables = async (connectionString: string) => {
  return axios.post(`${API_URL}/tables`, { connectionString });
};

export const getColumns = async (connectionString: string, table: string) => {
  return axios.post(`${API_URL}/columns`, { connectionString, table });
};

export const previewRows = async (
  connectionString: string,
  table: string,
  limit: number,
  mapping: { column: string; path: string }[]
) => {
  return axios.post(`${API_URL}/preview`, { connectionString, table, limit, mapping });
};
