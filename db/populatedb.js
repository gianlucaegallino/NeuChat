#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 16 ),
  text VARCHAR ( 255 ), 
  added VARCHAR ( 100 )
);

INSERT INTO messages (name, text, added) 
VALUES
  ('Bryan', 'Wow, this looks good!', 'testDate'),
  ('James', 'nice', 'testDate'),
  ('tester', 'finished testing!', 'testDate');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();