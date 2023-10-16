const { quote } = require("../../lib/quote");

const LIMIT = 256;

module.exports.index = (req, res) => {
  const { url } = req;
  const { qt } = req.query;

  let quantity = parseInt(qt, 10);
  if (isNaN(quantity) || quantity < 1) quantity = 1;
  if (quantity > LIMIT) quantity = LIMIT;

  const quotes = [...Array(quantity)].map(() => quote());
  const response = {
    timestamp: new Date(),
    status: 200,
    quotes,
    length: quotes.length,
    path: url,
  };

  res.status(200).send(response);
};

module.exports.notFound = (req, res) => {
  const { url } = req;

  res.status(404).send({
    timestamp: new Date(),
    status: 404,
    error: "Page not found",
    path: url,
  });
};
