require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const dbConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3hfac5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
    .then((client) => {
      console.log("connected");
      _db = client.db('shop');
      callback(client);
    })
    .catch((err) => console.log);
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found";
};

module.exports = {
  dbConnect,
  getDb,
};
