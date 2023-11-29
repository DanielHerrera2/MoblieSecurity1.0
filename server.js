const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the path to your project directory
const projectDirectory = path.join(__dirname, 'public');

// Serving static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // Update path as needed

// Middleware to parse JSON payloads
app.use(express.json());

// Root route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landingPage.html')); // Ensure the path is correct
});

// API endpoint to analyze URL/email
app.post('/analyze', (req, res) => {
  const userInput = req.body.url;
  // Implement your URL analysis logic here
  // For now, let's just send back a dummy response
  res.json({ status: 'URL analysis result goes here' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
