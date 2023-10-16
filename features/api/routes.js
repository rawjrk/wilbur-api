const express = require("express");
const router = express.Router();
const api = require("./controllers");

router.route("/api").get(api.index);
router.route("/*").get(api.notFound);

module.exports = router;
