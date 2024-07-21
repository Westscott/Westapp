let timeLabel = "";

document.addEventListener('DOMContentLoaded', function() {
    changeWindowFrame('cFrameHome', 'navHome');
    timeLabel = document.getElementById('timeClock');
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    timeLabel.textContent = currentDateTime;
};

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
};
