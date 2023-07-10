const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./features/api/routes");
const uiRoutes = require("./features/ui/routes");

app.use("/api", apiRoutes);
app.use("/", uiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
