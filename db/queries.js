const pool = require("./pool");

async function insertMessage(name, text, added) {
  await pool.query(
    "INSERT INTO messages (name, text, added) VALUES ($1, $2, $3)",
    [name, text, added]
  );
}

async function getMessages() {
  let msgs = pool.query("SELECT * FROM messages");
  return msgs;
}

async function getMessage(id) {
  let msg = pool.query("SELECT * FROM messages where id = $1", [id]);
  return msg;
}

module.exports = {
  insertMessage,
  getMessages,
  getMessage,
};
