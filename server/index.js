const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const {
  retrieveMakeup,
  retrieveHave,
  retrieveWant,
  postmakeupHave,
  postmakeupWant,
  addNewItem,
  changePrice,
  removeMakeupFromWant
} = require(`${__dirname}/controllers/mainController`);

app.get("/api/get", retrieveMakeup);
app.get("/api/have", retrieveHave);
app.get("/api/want", retrieveWant);
app.post("/api/have", postmakeupHave);
app.post("/api/want", postmakeupWant);
app.post("/api/newItem", addNewItem);
app.put("/api/put/:id", changePrice);
app.delete("/api/remove/:id", removeMakeupFromWant);

app.listen(port, () => {
  console.log(`Currently listening on port #${port}`);
});
