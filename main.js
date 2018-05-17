
var count = 0;
function moveBtn() {
    var randomTop, randomLeft;
    randomTop = Math.random()*60 + 20;
    randomLeft = Math.random()*60 + 20;
    count++;
    console.log(randomTop);
    var firstLoad = document.getElementsByClassName("first-load");
    for (let i=0; i<firstLoad.length; i++) {
        firstLoad[i].style.display="none";
    }
    document.getElementById("btn").style.top = randomTop + "%";
    document.getElementById("btn").style.left = randomLeft + "%";
    document.getElementById("count").innerHTML= "Score: " + count;
}