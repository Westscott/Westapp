var myVariable = 75;

let homeText = [
    "INFO",
    "Westapp is a site for all the projects made by Matthew Weston. All apps are meant to be an escape from modern bloated software",
    "• No AI",
    "• Lightweight",
    "• Open Source <3 ",
    "• No Internet needed",
    "• Customizable themes",
    "• Cross Platform (Windows, Mac, Linux)",
    
    "LATEST UPDATES",
    "Below are the most recent projects added to my software & games list.",
    
	"Password Generator",
    "•",
    "Source",
    "•",
    "Download",
	
    "Todo List",
    "•",
    "Source",
    "•",
    "Download",

    "HOW TO USE",
    "Every app is equipped with a command line to interact with & control every aspect of the application.",
    "You can activate this or quickly navigate to it by pressing ctrl+space",
    "Here is a list of some default commands that should work in any app.",
    
    "•",
    "help",
    "- list all available commands",
    
    "•",
    "info",
    "- get information on pc & current application",
    
    "DOWNLOADS",
    
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
    "h_featuredSoftwareText1",
    "h_featuredSoftwareText2",
    "h_lali1-0",
    "h_lali1-1",
    "h_lali2-0",
    "h_lali2-1",
	"h_featuredSoftwareText3",
	"h_lali3-0",
    "h_lali3-1",
	"h_lali4-0",
    "h_lali4-1",

    "h_title3",
    "h_howToText1",
    "h_howToText2",
    "h_howToText3",
    "h_htli1-0",
    "h_htli1-1",
    "h_htli1-2",

    "h_htli2-0",
    "h_htli2-1",
    "h_htli2-2",
    
    "h_title4",

    "h_title5",
    "h_aboutText1"
]

let varArray = [];
let bypassPrint = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    //var doc = document.getElementById("contentFrameHome");
    //var iframeElement = doc.contentWindow.document.getElementById('homeFrameSec1');
    //console.log("DOC: ", doc);
    //console.log("ELEMENT: ", iframeElement);

    window.addEventListener('keydown', (event) => {
        if (event.key == "Escape") {
            myVariable = 0;
            bypassPrint = 1;
            textLoader();
        }
    });

    for (_value in homeIds) {
        varArray.push(document.getElementById(`${homeIds[_value]}`));
    }
    //window.parent.postMessage({ myVariable: myVariable }, '*');

    //window.addEventListener('message', function(event) {
    //    console.log("VAR UPDATED: ", event);
    //});
    
    //? how can we skip this if needed
    textTyper();
}); 

function textTyper() {
    let charIndex = 0;
    let arrIndex = 0;
    let textToDisplay = homeText[arrIndex];
    let textContainer = varArray[arrIndex];

    function typeText() {
        if (bypassPrint == 0) {
            if (textContainer == null) {
                textContainer = varArray[0];
                return;
            }
            if (charIndex == 0) {
                textContainer.style.display = 'block';
            }
            if (charIndex < textToDisplay.length) {
                textContainer.textContent += textToDisplay.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, Math.floor(Math.random() * myVariable)); //100-120
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
    }
    typeText();
};

function textLoader() {
    let textToDisplay = homeText[0];
    let textContainer = varArray[0];

    for (let x = 0; x < homeText.length; x++) {
        textToDisplay = homeText[x];
        textContainer = varArray[x];
        
        textContainer.style.display = 'block';
        textContainer.textContent = textToDisplay;
    }


}