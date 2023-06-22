const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const { quote } = require("./lib/quote");

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  res.send({
    quote: quote(),
  });
});

app.get("*", (req, res) => {
  const { url } = req;

  res.status(404).send({
    timestamp: new Date(),
    status: 404,
    error: "Page not found",
    path: url,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
