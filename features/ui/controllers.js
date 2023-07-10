module.exports.index = (req, res) => {
  res.send(
    `<h1>Homepage</h1>
    Under construction`
  );
};

module.exports.notFound = (req, res) => {
  const { url } = req;

  res.status(404).send(
    `<h1>Page not found</h1>
    Invalid path <b>${url}</b>
    <br>
    Return to <a href="/">Homepage</a>`
  );
};
