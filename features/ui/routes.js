const express = require("express");
const router = express.Router();
const ui = require("./controllers");

router.route("/").get(ui.index);
router.route("/*").get(ui.notFound);

module.exports = router;
