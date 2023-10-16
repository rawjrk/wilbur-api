const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./features/api/routes");

app.get("/", (req, res) => res.redirect("/api"));
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
