const express = require('express');
const app = express();
app.use(express.json());
const connection = require('./db-config');
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3005;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log(
      'connected to database with threadId :  ' + connection.threadId
    );
  }
});

app.post('/inscription', (request, response) => {
  const { firstname, lastname, email, password } = request.body;
  connection.query(
    `INSERT INTO strafic_users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
    [firstname, lastname, email, password],
    (error, result) => {
      if (error) response.status(500).send("Error saving user's informations");
      else response.status(200).send(result);
    }
  );
});

app.get('/connexion', (request, response) => {
  connection.query(
    `SELECT * FROM strafic_users;`,
    (error, result) => {
      if (error) response.status(200).send('Error connexion');
      else response.status(200).send(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
