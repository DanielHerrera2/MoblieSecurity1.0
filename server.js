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

  // Placeholder for URL analysis logic
  const analysisResult = analyzeURL(userInput);

  // Send back the analysis result
  res.json({ status: analysisResult });
});

// Function to analyze the URL (placeholder implementation)
function analyzeURL(url) {
  // Implement your phishing detection logic here
  // Return a string indicating the result, e.g., 'Safe', 'Phishing', etc.
  // This is a placeholder implementation
  return 'Safe'; // Replace this with real logic
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
