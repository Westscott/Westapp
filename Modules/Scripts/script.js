let timeLabel = "";
let lastKey = "";

let isTyping = false;
let override = 0;

document.addEventListener('DOMContentLoaded', function() {
    //changeWindowFrame('index/html', 'navHome');
    timeLabel = document.getElementById('timeClock');
    const inputField = document.getElementById('idUserInputField');
    
    //const testFrame = document.getElementById('cFrameHome');
    
    updateDateTime();

    window.addEventListener('message', (event) => {
        if (event.data.type === 'keydown') {
            if (event.data.key == " " && lastKey == "Control") {
                inputField.focus();
            }
            lastKey = event.data.key;
        }
    });

    //testFrame.contentWindow.postMessage({ updateVariable: 10 }, '*');

    window.addEventListener('keydown', (event) => {
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



function changeWindow(name) {
    var navBtn1 = document.getElementById('navHome');
    var navBtn2 = document.getElementById('navSoftwareDev');
    var navBtn3 = document.getElementById('navGameDev');
    
    navBtn1.classList.remove("active");
    navBtn2.classList.remove("active");
    navBtn3.classList.remove("active");

    var tempElement = document.getElementById(name);

    tempElement.classList.add("active")
}

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
        changeWindow('navHome')
    }
    else if (_inputValue == "2") {
        changeWindow('navSoftwareDev')
    }
    else if (_inputValue == "3") {
        changeWindowFrame('cFrameGames', 'navGameDev');
    }
    else if (_inputValue == "s") {
        myVariable = 0;
    }
    else {
        setOutputText(`>> Invalid Command "${_inputValue}" - ( Try 'help' )`, 0);
    }

    document.getElementById('idUserInputField').value = '';
};

function setOutputText(outputText, valid, type=0) {
    if (valid == 0)
        document.getElementById("idUserOutputField").style.color = "#D03648";
    else
        document.getElementById("idUserOutputField").style.color = "#008000";
    var textElement = document.getElementById("idUserOutputField");
    textTyperMain(outputText, textElement);
};

function textTyperMain(textToDisplay, textContainer) {
    
    textContainer.textContent = "";
    let charIndex = 0;

    if (isTyping == true) {
        override = 1;
    }

    function typeTextMain() {

        if (charIndex < textToDisplay.length) {

            //textContainer.innerHTML += textToDisplay.charAt(charIndex);
            textContainer.textContent += textToDisplay.charAt(charIndex);
            charIndex++;
            setTimeout(typeTextMain, Math.floor(Math.random() * 15)); //100-120
            
        } else {
            charIndex = 0;
            colorOutputTextMain(textToDisplay);
            isTyping = false;
        }
    }

    isTyping = true;
    typeTextMain();
};

function colorOutputTextMain(outputText) {
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
};




