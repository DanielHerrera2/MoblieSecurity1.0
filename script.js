function searchData() {
  // Get the data inputted by the user
  const userInput = document.getElementById('search-bar').value;

  // Display original URL
  document.getElementById('original-url').textContent = userInput;

  // Simple check if URL starts with 'http://' or 'https://'
  if (userInput.startsWith('http://') || userInput.startsWith('https://')) {
      document.getElementById('status-check').textContent = 'Good';
      document.getElementById('status-check').style.color = 'green';
  } else {
      document.getElementById('status-check').textContent = 'Bad';
      document.getElementById('status-check').style.color = 'red';
  }
}