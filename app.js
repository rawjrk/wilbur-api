const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./features/api/routes");

app.get("/", (req, res) => {
  res.send(
    `<h1>Homepage</h1>
    Under construction`
  );
});

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  const { url } = req;

  res.status(404).send(
    `<h1>Page not found</h1>
    Invalid path <b>${url}</b>
    <br>
    Return to <a href="/">Homepage</a>`
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
