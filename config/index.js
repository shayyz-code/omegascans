const dev = process.env.NODE_ENV !== 'production';

const MONGODB_URI =
  'mongodb+srv://index-admin:lRDaJECsZT8oFf4p@omegascans.4yxyn.mongodb.net/omegascansdb?retryWrites=true&w=majority';
const MONGODB_DB = 'omegascansdb';

const ACCESS_KEY_ID = '4U63K5X42RBWFH5UK4TK';
const SECRET_ACCESS_KEY = 'DTid/76ovPzm8uI7Ye/tj/9/z9ShsDu7xHvMKY03VeA';

export const db_config = { MONGODB_URI, MONGODB_DB };

export const server = dev
  ? 'http://localhost:3000'
  : 'https://www.omega-scans.com';
export const spacesEndpoint = 'sgp1.digitaloceanspaces.com';
export const s3_config = {
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
};
