import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
  if (db) return db;
  // let client = await MongoClient.connect(url,{ useNewUrlParser: true });
  let client = await MongoClient.connect(url,{ useUnifiedTopology: true });
  db = client.db();
  console.info("Got DB,", db);
  return db;
}

// connectDB(); // <=== This is used for testing the connectDB script in the package.json file (doesn't actially do anything.)
