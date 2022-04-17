const express = require("express");
const path = require("path");
const app = express();

//router 동작 원리 찾아보기
const indexRouter = require("./route/index");
const formRouter = require("./route/form");
const resultRouter = require("./route/result");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.engine("ejs", require("ejs").renderFile);

app.use("/", formRouter);
app.use("/sss", indexRouter);
app.use("/result", resultRouter);

app.listen(PORT, () => {
	console.log("Server connected at Port", PORT);
});

process.argv.forEach((val, index) => {
	console.log(index + ": " + val);
});
console.log(process.cwd());

module.exports = app;
