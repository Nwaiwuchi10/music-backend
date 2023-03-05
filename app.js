const express = require("express");
const colors = require("colors");
const mysql = require("mysql");
const cookie = require("cookie-parser");
const path = require("path");
const pagesRoute = require("./routes/pages");
const authRoute = require("./routes/auth");
// const musicRoute = require("./routes/music");
const app = express();

// / create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chinemerem10",
  database: "blog_test",
});

/// connect
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("MySql database connected .....");
});
app.use(cookie());
app.use("/api/auth", authRoute);
// app.use("/api/music", musicRoute);
app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
);
const PORT = process.env.PORT || 5000;

app.listen(
  // PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
// app.listen("5000", () => {
//   console.log("Server started on port 5000");
// });
