require("dotenv").config();
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
