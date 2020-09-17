import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const mongoose = require("mongoose");

const uri = "mongodb+srv://xxxx:11123@cluster0.ehwca.mongodb.net/e-com?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  // mongoose.Promise = global.Promise;


async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('e-com');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
