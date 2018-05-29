
let count = 0;
let topScore = 0;
let sec = 0;
const arrOfBtnGreen = [];
const firstLoad = document.querySelectorAll(".first-load");

function startTimer() {
    let x = setInterval(function () {
        sec--;
        document.querySelector(".timer").innerHTML = "time: " + sec + "s";
        if (sec <= 5) {
            document.querySelector(".timer").style.color = "red";
        }
        else {
            document.querySelector(".timer").style.color = "black";
        }
        if (sec <= 0) {
            showGameOverScreen();
            clearInterval(x);
        }
    }, 1000);
}

let btnRed = {
    element: document.querySelector(".btn-red"),
    x: 50,
    y: 50,
    radius: 16
}

let btnGreen = {
    elements: document.querySelectorAll(".btn-green"),
    elementHTML: '<div class="btn-green" onclick="showGameOverScreen()"></div>',
    x: 0,
    y: 0,
    radius: 16
}

function moveBtnRed() {
    btnRed.x = Math.random() * 60 + 20;
    btnRed.y = Math.random() * 60 + 20;
    count++;
    if (count === 1) {
        sec = 60;
        startTimer();
    }
    if (count >= 10) {
        moveBtnGreen();
    }
    showBtns();
}

function moveBtnGreen() {
    if (count % 10 === 0) {
        arrOfBtnGreen.push(btnGreen);
        document.querySelector(".wraper").innerHTML += btnGreen.elementHTML;
    }
    for (let i = 0; i < arrOfBtnGreen.length; i++) {
        while (true) {
            arrOfBtnGreen[i].x = Math.random() * 60 + 20;
            arrOfBtnGreen[i].y = Math.random() * 60 + 20;
            if (Math.abs(btnRed.x - arrOfBtnGreen[i].x) > (btnRed.radius + btnGreen.radius) || Math.abs(btnRed.y - arrOfBtnGreen[i].y) > (btnRed.radius + btnGreen.radius)) {
                break;
            }
        }
    }
}

function showBtns() {
    if (count === 1) {
        for (let i = 0; i < firstLoad.length; i++) {
            firstLoad[i].style.display = "none";
        }
    }
    btnRed.element.style.top = btnRed.y + "%";
    btnRed.element.style.left = btnRed.x + "%";
    document.querySelector(".count").innerHTML = "Score: " + count;
    for (const i of arrOfBtnGreen) {
        btnGreen.element[i].style.top = arrOfBtnGreen[i].y + "%";
        btnGreen.element[i].style.left = arrOfBtnGreen[i].x + "%";
    }
}

function showGameOverScreen() {
    document.querySelector("#finalScore").innerHTML = count;
    document.querySelector(".game-over-score").style.display = "block";
}

function restart() {
    if (count > topScore) {
        topScore = count;
    }
    clearInterval(x);
    sec = 0;
    count = 0;
    btnRed.x = 50;
    btnRed.y = 50;
    arrOfBtnGreen = [];
    showNewGame();
}

function showNewGame() {
    document.querySelector(".top-score").innerHTML = "top score: " + topScore;
    document.querySelector(".timer").innerHTML = " ";
    document.querySelector(".game-over-score").style.display = "none";
    document.querySelector(".wraper").innerHTML = " ";
    document.querySelector(".count").innerHTML = "Score: " + count;
    document.querySelector(".new-game").style.display = "block";
    btnRed.element.style.top = btnRed.y + "%";
    btnRed.element.style.left = btnRed.x + "%";
    for (let i = 0; i < firstLoad.length; i++) {
        firstLoad[i].style.display = "block";
    }
}