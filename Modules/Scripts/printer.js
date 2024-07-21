let homeText = [
    "INFO",
    "Westapp is a site for all the projects made by Matthew Weston. All apps are meant to be an escape from modern bloated software",
    "• No AI",
    "• Lightweight",
    "• Open Source <3 ",
    "• No Internet needed",
    "• Customizable themes",
    "• Cross Platform (Windows, Mac, Linux)",
    "Latest Updates",
    "About / Contact",
    "mattswest01@gmail.com"
]
let homeIds = [
    "h_title1",
    "h_text1",
    "h_li1",
    "h_li2",
    "h_li3",
    "h_li4",
    "h_li5",
    "h_li6",
    "h_title2",
    "h_title3",
    "h_aboutText1"
]

let varArray = [];

document.addEventListener('DOMContentLoaded', function() {
    for (_value in homeIds) {
        varArray.push(document.getElementById(`${homeIds[_value]}`));
    }
    textTyper()
});

function textTyper() {
    let charIndex = 0;
    let arrIndex = 0;
    let textToDisplay = homeText[arrIndex];
    let textContainer = varArray[arrIndex];

    function typeText() {
        if (textContainer == null) {
            console.log("NULL");
            textContainer = varArray[0];
            return;
        }
        if (charIndex == 0) {
            textContainer.style.display = 'block';
        }
        if (charIndex < textToDisplay.length) {
            textContainer.textContent += textToDisplay.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, Math.floor(Math.random() * 100));
        } else {
            arrIndex++;
            charIndex = 0;
            if (arrIndex < varArray.length) {
                textToDisplay = homeText[arrIndex];
                textContainer = varArray[arrIndex];
                typeText();
            }
        }
    }
    typeText();
};