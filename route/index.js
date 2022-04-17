const express = require("express");
const fs = require("fs");
const router = express.Router();
const ROOT = "D:/Code_Study/HTML/04";

router.get("", (req, res) => {
	res.render("index.ejs", { title: "form" });
});

module.exports = router;
