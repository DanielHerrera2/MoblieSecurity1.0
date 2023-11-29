function checkURL(url) {
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Update the webpage with the response data
        document.getElementById('original-url').innerText = url; // Display the original URL
        document.getElementById('status-check').innerText = data.status; // Display the analysis result
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally update the webpage to reflect that an error occurred
        document.getElementById('status-check').innerText = 'Error occurred during analysis';
    });
}