// Check memory for a saved theme when the page loads
const currentTheme = localStorage.getItem('theme');
const toggleCheckbox = document.getElementById('theme-toggle-checkbox');

// If the user previously chose golden, apply it
if (currentTheme === 'golden') {
    document.body.classList.add('golden-theme');
    
    // If the toggle switch exists on this specific page, visually flip it to 'On'
    if (toggleCheckbox) {
        toggleCheckbox.checked = true;
    }
}

// Listen for the switch to be flipped
if (toggleCheckbox) {
    toggleCheckbox.addEventListener('change', function(event) {
        if (event.target.checked) {
            // Turn on golden theme
            document.body.classList.add('golden-theme');
            localStorage.setItem('theme', 'golden');
        } else {
            // Revert back to dark theme
            document.body.classList.remove('golden-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
}