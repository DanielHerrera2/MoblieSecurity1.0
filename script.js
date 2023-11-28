function searchData() {
    const userInput = document.getElementById('search-bar').value;
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status-check').textContent = data.status;
    });
  }
  