let buttons = document.querySelectorAll('.drum')

let index = buttons.length -1 ; 

for(let i = 0; i<= index; i ++){
    buttons[i].addEventListener('click', e => {

        let buttonInnerHtml = buttons[i].innerHTML;
        makeSound(buttonInnerHtml)
        buttonAnimate(buttonInnerHtml);
    }
)}

document.addEventListener('keydown', e => {
   let btnKey = e.key;
   makeSound(btnKey);
   buttonAnimate(btnKey);
    
})

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            case 'a':
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 's':
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                
                break;
            case 'd':
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 'j':
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case 'k':
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'l':
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            default:
                console.log(e.key);
                break;
    }
}

function buttonAnimate(key){
    //Get active button
    let activeButton = document.querySelector('.' + key);
    // Add the pressed styling class to active button
    activeButton.classList.add('pressed');
    // setTimeOut
    setTimeout(()=> {
        activeButton.classList.remove('pressed');
    }, 100);
}