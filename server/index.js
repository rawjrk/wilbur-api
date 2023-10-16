const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./features/api/routes");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
