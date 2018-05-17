
var firstLoad = document.getElementsByClassName("first-load");
var count = 0;

function moveBtn() {
    var randomTop, randomLeft, randomTopG, randomLeftG;
    randomTop = Math.random() * 60 + 20;
    randomLeft = Math.random() * 60 + 20;
    count++;
    for (let i = 0; i < firstLoad.length; i++) {
        firstLoad[i].style.display = "none";
    }
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("btn").style.top = randomTop + "%";
    document.getElementById("btn").style.left = randomLeft + "%";
    document.getElementById("count").innerHTML = "Score: " + count;
    if (count > 19) {
        while (true) {
            randomTopG = Math.random() * 60 + 20;
            randomLeftG = Math.random() * 60 + 20;
            if (Math.abs(randomTop - randomTopG) > 16 || Math.abs(randomLeft - randomLeftG) > 16) {
                break;
            }
        }
        document.getElementById("btnG").style.top = randomTopG + "%";
        document.getElementById("btnG").style.left = randomLeftG + "%";
        document.getElementById("btnG").style.display = "block";
    }
}

function gameOverScore() {
    document.getElementById("finalScore").innerHTML = count;
    document.getElementById("gameOverScore").style.display = "block";
}

function gameOver() {
    document.getElementById("gameOverScore").style.display = "none";
    document.getElementById("btnG").style.display = "none";
    count = 0;
    document.getElementById("count").innerHTML = "Score: " + count;
    document.getElementById("btn").style.top = "50%";
    document.getElementById("btn").style.left = "50%";
    for (let i = 0; i < firstLoad.length; i++) {
        firstLoad[i].style.display = "block";
    }
    document.getElementById("gameOver").style.display = "block";
}