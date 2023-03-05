const userSchema = {
  id: { type: "INTEGER", primaryKey: true, autoIncrement: true },
  username: { type: "STRING", required: true },
  email: { type: "STRING", required: true },
  password: { type: "STRING", required: true },
};

const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )`;

connection.query(createTableQuery, (err, results, fields) => {
  if (err) throw err;
  console.log("Users table created");
});

// module.exports = connection;

// const createUserTableQuery = `CREATE TABLE IF NOT EXISTS users (
//   id INT(11) NOT NULL AUTO_INCREMENT,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//   PRIMARY KEY (id)
// )`;

// db.query(createUserTableQuery, (err, result) => {
//   if (err) {
//     console.log("Error creating users table:", err);
//   } else {
//     console.log("Users table created successfully");
//   }
// });
