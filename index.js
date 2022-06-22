


var buttons = document.querySelectorAll('.set button')



function playTom1() {
    new Audio('sounds/tom-1.mp3').play();
}
function playTom2() {
    new Audio('sounds/tom-2.mp3').play();
}
function playTom3() {
    new Audio('sounds/tom-3.mp3').play();
}
function playTom4() {
    new Audio('sounds/tom-4.mp3').play();
}
function playSnare() {
    new Audio('sounds/snare.mp3').play();
}
function playKick() {
    new Audio('sounds/kick-bass.mp3').play();
}
function playCrash() {
    new Audio('sounds/Crash.mp3').play();
}


for(var i=0; i<=buttons.length; i++){
buttons[i].addEventListener('click', function(){
    //Get current iteration value
    var currentDrum = this;
    // console.log(currentDrum);
    switch(currentDrum.innerText){
        case "w":
            playTom1();
            currentDrum.style.color = "white";
        break;
        case "a":
            playTom2();
            currentDrum.style.color = "white";
        break;
        case "s":
            playTom3();
            currentDrum.style.color = "white";
        break;
        case "d":
            playTom4();
            currentDrum.style.color = "white";
        break;
        case "j":
            playKick();
            currentDrum.style.color = "white";
        break;
        case "k":
            playSnare();
            currentDrum.style.color = "white";
        break;
        case "l":
            playCrash();
            currentDrum.style.color = "white";
        break;
        default:
            console.log(currentDrum)
    }
})
}


// sfx.play();