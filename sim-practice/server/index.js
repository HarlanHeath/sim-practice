const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const ctrl = require("./controller");
require(`dotenv`).config();

const port = 3030;
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get("/api/inventory", ctrl.getInventory);
app.post("/api/product", ctrl.addProduct);

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
