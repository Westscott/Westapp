document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');

    document.addEventListener('keydown', (event) => {
        
        if (event.ctrlKey && event.key == " ") {
            inputField.focus();
        }
    })
});