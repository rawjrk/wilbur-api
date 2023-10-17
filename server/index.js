const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

const apiRoutes = require("./features/api/routes");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
