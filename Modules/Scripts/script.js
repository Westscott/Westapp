let timeLabel = "";
let lastKey = "";

let isTyping = false;

document.addEventListener('DOMContentLoaded', function() {
    changeWindowFrame('cFrameHome', 'navHome');
    timeLabel = document.getElementById('timeClock');
    const inputField = document.getElementById('idUserInputField');
    updateDateTime();

    window.addEventListener('message', (event) => {
        if (event.data.type === 'keydown') {
            if (event.data.key == " " && lastKey == "Control") {
                inputField.focus();
            }
            lastKey = event.data.key;
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key == " ") {
            inputField.focus();
        }
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            checkUserInput();
        }
    });

    setInterval(updateDateTime, 1000);    
});

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    timeLabel.textContent = currentDateTime;
};


function checkUserInput() {
    let _inputValue = document.getElementById('idUserInputField').value;


    if (_inputValue == "help" || _inputValue == "help 1") {
        setOutputText(">> help (1-2) - list commands | info - basic system information | ref - refresh page | 1 2 3 (nav to specific page)", 1, 1);
    }
    else if (_inputValue == "help 2") {
        setOutputText(">> source (main,)", 1, 1);
    }
    else if (_inputValue == "info") {
        var _plat =  navigator.platform;
        var _screenWidth = screen.width;
        var _screenHeight = screen.height;
        var _agent = navigator.userAgent;
        setOutputText(`>> ${_plat}: ${_screenWidth} x ${_screenHeight} | ${_agent}`, 1);
    } 
    else if (_inputValue == "ref") {
        setOutputText(">> Reload Initialized", 1);
        location.reload();
    }
    else if (_inputValue == "1") {
        changeWindowFrame('cFrameHome', 'navHome');
    }
    else if (_inputValue == "2") {
        changeWindowFrame('cFrameSoftware', 'navSoftwareDev');
    }
    else if (_inputValue == "3") {
        changeWindowFrame('cFrameGames', 'navGameDev');
    }
    else {
        setOutputText(`>> Invalid Command "${_inputValue}" - ( Try 'help' )`, 0);
    }

    document.getElementById('idUserInputField').value = '';
};

// Make this function print out like a term as well
function setOutputText(outputText, valid, type=0) {
    if (valid == 0)
        document.getElementById("idUserOutputField").style.color = "#D03648";
    else
        document.getElementById("idUserOutputField").style.color = "#008000";

    var textElement = document.getElementById("idUserOutputField");

    textTyper(outputText, textElement);
    /*
    document.getElementById("idUserOutputField").innerHTML = `${outputText}`;
    document.getElementById("idUserOutputField").value = `${outputText}`;

    if (type == 1) {
        var words = outputText.split(" ");
        outputText = "";
        const _keywords = ["help", "(1-2)", "info", "ref", "1", "2", "3",];
        for (var _index=0; _index < words.length; _index++) {
            if (_keywords.includes(words[_index])) {
                outputText += "<span class='keywordOne'>"+words[_index]+" </span> ";
            } else {
                outputText += `${words[_index]} `;
            }
        }
        textTyper(outputText, textElement);
        //document.getElementById("idUserOutputField").innerHTML = outputText;
    } else {
        textTyper(outputText, textElement);
    }*/
}

function textTyper(textToDisplay, textContainer) {
    textContainer.textContent = "";
    let charIndex = 0;


    //! Create a method to stop text overriteng when changing tabs fast, etc
    function typeText() {
        if (charIndex < textToDisplay.length) {
            
            //textContainer.innerHTML += textToDisplay.charAt(charIndex);
            textContainer.textContent += textToDisplay.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, Math.floor(Math.random() * 30)); //100-120
            
        } else {
            charIndex = 0;
            colorOutputText(textContainer.textContent);
        }
    }
    typeText();
};

function colorOutputText(outputText) {
    var wResult = outputText.split(" ");
    outputText = "";
    const _keywords = ["help", "(1-2)", "info", "ref", "1", "2", "3",];
    for (var _index=0; _index < wResult.length; _index++) {
        if (_keywords.includes(wResult[_index])) {
            outputText += "<span class='keywordOne'>"+wResult[_index]+" </span> ";
        } else {
            outputText += `${wResult[_index]} `;
        }
    }
    document.getElementById("idUserOutputField").innerHTML = outputText;    
}


function changeWindowFrame(uID, name) {

    var navBtn1 = document.getElementById('navHome');
    var navBtn2 = document.getElementById('navSoftwareDev');
    var navBtn3 = document.getElementById('navGameDev');
    
    navBtn1.classList.remove("active");
    navBtn2.classList.remove("active");
    navBtn3.classList.remove("active");
    var tempElement = document.getElementById(name);
    tempElement.classList.add("active");

    if (name == 'navHome')
        setOutputText(">> Home page loaded", 1);
    else if (name == 'navSoftwareDev')
        setOutputText(">> Software page loaded", 1);
    else if (name == 'navGameDev')
        setOutputText(">> Games page loaded", 1);

    document.getElementById("cFrameHome").style.display = "none";
    document.getElementById("cFrameSoftware").style.display = "none";
    document.getElementById("cFrameGames").style.display = "none";

    document.getElementById(uID).style.display = "block";
};
