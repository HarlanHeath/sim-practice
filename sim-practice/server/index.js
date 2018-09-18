const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require(`dotenv`).config();

const port = 3030;
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
