const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const { quote } = require("./lib/quote");

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  const { qt } = req.query;

  let quantity = parseInt(qt, 10);
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
  }

  const quotes = [...Array(quantity)].map(() => quote());
  const response = {
    length: quotes.length,
    quotes,
  };

  res.send(response);
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
