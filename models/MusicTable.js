const createMusicTable = `
  CREATE TABLE IF NOT EXISTS posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    filePath TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) 
`;

connection.query(createMusicTable, (err, results, fields) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Table Created");
  }
});
module.exports = connection;
