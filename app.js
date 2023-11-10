const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");

app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/css/" + "styles.css");
});

app.get("/health", (req, res) => { 
  res.sendStatus(200); 
}); 
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


