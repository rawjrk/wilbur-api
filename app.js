const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./features/api/routes");

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  const { url } = req;

  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
