import { MongoClient } from 'mongodb';
import { db_config } from '../config';

const { MONGODB_URI, MONGODB_DB } = db_config;

function throwErr(envVar) {
  throw new Error(`${envVar} does not exist.`);
}
// check the mongodb URI
if (!MONGODB_URI) throwErr('MONGODB_URI');
// check the mongodb DB
if (!MONGODB_DB) throwErr('MONGODB_DB');

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // check the cached
  if (cachedClient && cachedDb) {
    // load from cached
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // connect to cluster
  let client = new MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(MONGODB_DB);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
