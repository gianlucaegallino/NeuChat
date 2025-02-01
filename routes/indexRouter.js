const { Router } = require("express");

const indexRouter = Router();

//sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString("en-GB"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString("en-GB"),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Messages", messages: messages })
);

indexRouter.get("/new", (req, res) => res.render("form", {}));

indexRouter.post("/new", (req, res) => {
  let name = req.body.name;
  let text = req.body.text;

  messages.push({ text: text, user:name, added: new Date().toLocaleString("en-GB") });
  res.redirect("/");
});

module.exports = indexRouter;
