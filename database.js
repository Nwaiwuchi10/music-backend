const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "chinemerem10",
  database: "blog_test",
  connectionLimit: 10,
});

pool.query(`SELECT * FROM blog_test.users`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
