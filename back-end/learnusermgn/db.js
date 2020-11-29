const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.DB_CONNECT, { useUnifiedTopology: true });
const connection = client.connect();
module.exports = connection;
