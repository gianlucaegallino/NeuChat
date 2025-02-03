const db = require("../db/queries");

async function getIndex(req, res) {
  let messages = await db.getMessages();
  res.render("index", { title: "Messages", messages: messages.rows });
}

async function getNew(req, res) {
  res.render("form", {});
}

async function postInfo(req, res) {
  let id = req.body.id;
  let messages = await db.getMessages();
  let message = messages.rows[id-1];

  res.render("info", { message: message });
}

async function postNew(req, res) {
  let name = req.body.name;
  let text = req.body.text;
  let added = new Date().toLocaleString("en-GB").toString();
  await db.insertMessage(name, text, added);
  res.redirect("/");
}

module.exports = {
  getIndex,
  getNew,
  postInfo,
  postNew,
};
