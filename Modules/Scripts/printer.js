document.addEventListener('DOMContentLoaded', function() {

    textTyper('h_title', 'Welcome to my website!');

    function textTyper(id, value) {
        let currIndex = 0;
        const textToDisplay = value;
        const textContainer = document.getElementById(id)

        function typeText() {
            if (currIndex < textToDisplay.length) {
                textContainer.textContent += textToDisplay.charAt(currIndex);
                currIndex++;
                let tempTimeout = Math.floor(Math.random() * 100)
                console.log(tempTimeout);
                setTimeout(typeText, tempTimeout);
            } else {
                currIndex = 0;
            }
        }
        typeText();
    }
});