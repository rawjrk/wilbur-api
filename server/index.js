const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 8081;

const apiRoutes = require("./features/api/routes");

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
