const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'Home Page.html'));
});

app.get('/Ourproducts', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Ourproducts.html'));
});

app.get('/26NM', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '26NM.html'));
});

app.get('/36NM', (req, res) => {
  res.sendFile(path.join(__dirname,'public', '36NM.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'about.html'));
});

app.get('/ContactUsss', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'ContactUsss.html'));
});

app.get('/Gallery', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'Gallery.html'));
});

app.get('/News', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'News.html'));
});

app.get('/Sustainability', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'Sustainability.html'));
});
// Add more routes for other pages as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

