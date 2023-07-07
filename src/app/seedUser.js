const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'usercollection';

const client = new MongoClient(url);

async function seedUser() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const users = db.collection('users');

    let user = {
      username: "test",
      password: "test",
      email: "test@my.centennialcollege.ca"
    };

    const result = await users.insertOne(user);
    console.log(`User inserted with the _id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seedUser();
