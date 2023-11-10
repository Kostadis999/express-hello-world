const express = require("express");
const app = express();
const { Pool } = require('pg');
const fetch = require('node-fetch');

const port = process.env.PORT || 3001;
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/css/" + "styles.css");
});

app.get("/health", (req, res) => { 
  res.sendStatus(200); 
}); 
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views' ,'/index.html'));
});

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


