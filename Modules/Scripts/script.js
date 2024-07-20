document.addEventListener('DOMContentLoaded', function() {
    
    const inputField = document.getElementById('inputField');
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key == " ") {
            inputField.focus();
        }
    });
    inputField.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            runCommand();
        }
    });
});


function runCommand() {
    const inputFieldValue = document.getElementById('inputField').value;

    //! CHECK FOR INVALID INPUT

    if (inputFieldValue == "help") {
        console.log("COMMANDS: \n1. HELP");
    }
    else if (inputFieldValue == "ref" || inputFieldValue == "refresh") {
        location.reload();
    }
    else if (inputFieldValue == "install") {
        alert("cannot install program");
    }
    else {
        alert("invalid messag");
    }

}

function changeWindow(path, name) {
    var navBtn1 = document.getElementById('navHome');
    var navBtn2 = document.getElementById('navSoftwareDev');
    var navBtn3 = document.getElementById('navGameDev');
    
    navBtn1.classList.remove("active");
    navBtn2.classList.remove("active");
    navBtn3.classList.remove("active");

    var tempElement = document.getElementById(name);

    tempElement.classList.add("active")

    document.getElementById("contentFrame").src = path;
}