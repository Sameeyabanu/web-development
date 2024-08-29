// JavaScript to change the button color on click
document.getElementById('colorChangeButton').addEventListener('click', function() {
    // Toggle between two colors on each click
    if (this.style.backgroundColor === 'green') {
        this.style.backgroundColor = '#007bff'; // Original color
    } else {
        this.style.backgroundColor = 'green'; // New color
    }
});
