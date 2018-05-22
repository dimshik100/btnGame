
var firstLoad = document.getElementsByClassName("first-load");
var count = 0;
var topScore = 0;
var btnG, sec;

function startTimer() {
    var x = setInterval(function () {
        sec--;
        document.getElementById("timer").innerHTML = "time: " + sec + "s";
        if (sec <= 5) {
            document.getElementById("timer").style.color = "red";
        }
        if (sec === 0) {
            gameOverScore();
            clearInterval(x);
        }
    }, 1000);
}

function moveBtn() {
    var randomTop, randomLeft, randomTopG, randomLeftG;
    randomTop = Math.random() * 60 + 20;
    randomLeft = Math.random() * 60 + 20;
    count++;
    if (count === 1) {
        document.getElementById("timer").style.color = "black";
        sec = 60;
        startTimer();
    }
    if (count % 20 === 0 || count === 10) {
        document.getElementById("wraperG").innerHTML += '<div class="btn-g" onclick="gameOverScore()"></div>';
    }
    for (let i = 0; i < firstLoad.length; i++) {
        firstLoad[i].style.display = "none";
    }
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("btn").style.top = randomTop + "%";
    document.getElementById("btn").style.left = randomLeft + "%";
    document.getElementById("count").innerHTML = "Score: " + count;
    btnG = document.getElementsByClassName("btn-g");
    for (let i = 0; i < btnG.length; i++) {
        while (true) {
            randomTopG = Math.random() * 60 + 20;
            randomLeftG = Math.random() * 60 + 20;
            if (Math.abs(randomTop - randomTopG) > 16 || Math.abs(randomLeft - randomLeftG) > 16) {
                break;
            }
        }
        btnG[i].style.top = randomTopG + "%";
        btnG[i].style.left = randomLeftG + "%";
        btnG[i].style.display = "block";
    }
}

function gameOverScore() {
    document.getElementById("finalScore").innerHTML = count;
    document.getElementById("gameOverScore").style.display = "block";
    if (count > topScore) {
        topScore = count;
        document.getElementById("topScore").innerHTML = "top score: " + topScore;
    }
}

function gameOver() {
    document.getElementById("timer").innerHTML = " ";
    document.getElementById("gameOverScore").style.display = "none";
    document.getElementById("wraperG").innerHTML = " ";
    count = 0;
    document.getElementById("count").innerHTML = "Score: " + count;
    document.getElementById("btn").style.top = "50%";
    document.getElementById("btn").style.left = "50%";
    for (let i = 0; i < firstLoad.length; i++) {
        firstLoad[i].style.display = "block";
    }
    document.getElementById("gameOver").style.display = "block";
}