const express = require("express");
const cors = require("cors");
const articles = require("./mock.json");

const app = express();
app.use(cors({ allowedHeaders: "*" }));
app.use(express.json());

app.all("/", (req, res) => {
  res.json(articles);
});

app.listen(4000, () => {
  console.log("server is running");
});
