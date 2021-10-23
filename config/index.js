const dev = process.env.NODE_ENV !== 'production';

const MONGODB_URI =
  'mongodb+srv://index-admin:lRDaJECsZT8oFf4p@omegascans.4yxyn.mongodb.net/omegascansdb?retryWrites=true&w=majority';
const MONGODB_DB = 'omegascansdb';

export const db_config = { MONGODB_URI, MONGODB_DB };
export const server = dev ? 'http://localhost:3000' : 'https://www.omega-scans.com/';
