const mongoose = require("mongoose");

const dbName = process.env.dbName;
const userName = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${userName}:${pw}@cluster0.nwjehbi.mongodb.net/${dbName}?retryWrites=true&w=majority`;
console.log("username :=>", userName);
mongoose
  .connect(uri)
  .then(() =>
    console.log("🛰️🛰️🛰️ Established a connection to the database " + dbName)
  )
  .catch((err) =>
    console.log(
      " ❌❌❌Something went wrong when connecting to the database",
      err
    )
  );
