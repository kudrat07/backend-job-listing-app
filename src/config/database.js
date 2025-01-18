const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL


const connectDb = async () => {
  mongoose
    .connect(DB_URL, {})
    .then(() => {
      console.log("DB connection successfully");
    })
    .catch((e) => {
      console.log("Issue in DB connection", e);
    });
};
module.exports = connectDb;
