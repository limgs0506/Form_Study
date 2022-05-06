const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log(req.query);
	const id = req.query.id;
	const pw = req.query.pw;
	res.render("02result.ejs", { id: id, pw: pw });
});
router.post("/", (req, res) => {
	//posr req.body 사용에 use(express.json()) 필요
	const { id, pw, pwcf, name, birth, adress, gender, bio } = req.body;

	res.json({
		id: id,
		pw: pw,
		pwcf: pwcf,
		name: name,
		birth: birth,
		adress: adress,
		gender: gender,
		bio: bio,
	});
});

module.exports = router;
