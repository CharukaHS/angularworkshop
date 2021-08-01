const express = require("express");
const cors = require("cors");
const articles = require("./mock.json");

const app = express();
app.use(cors({ allowedHeaders: "*" }));
app.use(express.json());

app.all("/", (req, res) => {
  res.json(articles);
});

app.all("/:id", (req, res) => {
  const { id } = req.params;
  res.json(articles[parseInt(id)]);
});

app.listen(4000, () => {
  console.log("server is running");
});
