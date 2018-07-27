export const baseURL = process.env.METHOD === 'proxy1'
  ? 'http://localhost:3002'
  : '/api';