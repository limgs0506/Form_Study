const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("02Form", { title: "form" });
});

module.exports = router;
