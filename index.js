


let buttons = document.querySelectorAll('.drum')

function animate(event, key, iteration){
    let currentKey;
    if (event.type == 'keydown'){
        //get key object
        currentKey = document.querySelector('.' + event.key);
    }else if(event.type == 'click'){
        currentKey = document.querySelector('.' + iteration.innerHTML);
    }
    currentKey.classList.add('pressed');
    setTimeout(() => currentKey.classList.remove('pressed'), 100);

} 
// console.log(buttons[0].innerHTML)
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
//length of our button array
let index = buttons.length -1 ; 

// for loop through each button object 
for(let i = 0; i<= index; i ++){
    buttons[i].addEventListener('click', e => {
        animate(e, e.key,buttons[i])
        switch (buttons[i].innerHTML){
                    case 'w':
                        playTom1();
                        break;
                    case 'a':
                        playTom2();
                        break;
                    case 's':
                        playTom3();
                        break;
                    case 'd':
                        playTom4();
                        break;
                    case 'j':
                        playKick();
                        break;
                    case 'k':
                        playSnare();
                        break;
                    case 'l':
                        playCrash();
                        break;
                    default:
    }})

    document.addEventListener('keydown', e => {
        animate(e, e.key,buttons[i])
        switch (e.key) {
            case 'w':
                playTom1();
                break;
            case 'a':
                playTom2();
                break;
            case 's':
                playTom3();
                break;
            case 'd':
                playTom4();
                break;
            case 'j':
                playKick();
                break;
            case 'k':
                playSnare();
                break;
            case 'l':
                playCrash();
                break;
            default:
                console.log(e.key);
                break;
}})
    
}

  
