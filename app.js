const express = require("express");
const app = express();
const { Pool } = require('pg');
const fetch = require('node-fetch');
const ejs = require('ejs');


const port = process.env.PORT || 3001;
const path = require("path");

// Set the views directory to "public/views"
app.set('views', path.join(__dirname, 'public', 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/health", (req, res) => { 
  res.sendStatus(200); 
}); 
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => {
  res.render('index'); // Render the 'index.ejs' file
});

app.get('/services', (req, res) => {
  res.render('services'); // Render the 'index.ejs' file
});

app.get('/', async (req, res) => {
  try {
    
    const client = await pool.connect();
    const Result = await client.query('SELECT * FROM my_activities');
    const data = Result.rows;
    res.render('index', { data });
    client.release();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


