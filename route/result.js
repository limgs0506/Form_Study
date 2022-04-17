const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log(req.query);
	const id = req.query.id;
	const pw = req.query.pw;
	res.render("02result.ejs", { id: id, pw: pw });
});
router.post("/", (req, res) => {
	console.log("body: ", req.body);
	const id = req.body.id;
	const pw = req.body.pw;
	res.render("02result.ejs", { id: id, pw: pw });
});

module.exports = router;
