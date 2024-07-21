let timeLabel = "";

document.addEventListener('DOMContentLoaded', function() {
    changeWindowFrame('cFrameHome', 'navHome');
    timeLabel = document.getElementById('timeClock');
    updateDateTime();

    //const inputField = document.getElementById('inputField');
    

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key == " ") {
            inputField.focus();
        }
    });

    /*
    inputField.addEventListener('keydown', (event) => {
        checkCommandInput(event); 
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            runCommand();
        }
    });*/

    setInterval(updateDateTime, 1000);
});


function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    timeLabel.textContent = currentDateTime;
}


function runCommand() {
    const inputFieldValue = document.getElementById('inputField').value;
    //! CHECK FOR INVALID INPUT
    //? Create a better setup
    if (inputFieldValue == "help") {
        let commandList = 'help\n(ref)resh\ninfo\nexit'
        alert(`COMMAND LIST\n${commandList}`)
    }
    else if (inputFieldValue == "ref" || inputFieldValue == "refresh") {
        location.reload();
    }
    else if (inputFieldValue == "info") {
        const screenWidth = screen.width;
        const screenHeight = screen.height;
        alert(`INFO: ${screenWidth}x${screenHeight}`);
    }
    else {
        alert("invalid messag");
    }

}

function checkCommandInput(event) {
    alert("Checking for valid input");
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


    document.getElementById("cFrameHome").style.display = "none";
    document.getElementById("cFrameSoftware").style.display = "none";
    document.getElementById("cFrameGames").style.display = "none";

    console.log(uID);
    document.getElementById(uID).style.display = "block";
}