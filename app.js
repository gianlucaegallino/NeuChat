require("dotenv").config();
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/new", newRouter);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
