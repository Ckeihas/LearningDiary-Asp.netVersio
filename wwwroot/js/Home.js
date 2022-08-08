
const addBg = document.querySelector(".add");
addBg.addEventListener('click', addClass);

document.querySelector(".instBtn").style.display = "none";
document.querySelector(".whenClicked").style.display = "none";
const textStyle = document.querySelector('.navText');

function addClass() {
    const element = document.querySelector('.add');
    

    element.classList.add("whenClicked");
    textStyle.classList.add("textStyle");
    document.querySelector(".instBtn").style.display = "block";
    
}

/*------------------------------------------------------------*/

const bubble = document.querySelector(".instBtn");
bubble.addEventListener('click', changeBubble);

document.querySelector(".instBtn2").style.display = "none";

function changeBubble() {
    
    const nextBubble = document.querySelector('.instBtn2');

    nextBubble.classList.remove('instBtn');
    document.querySelector(".instBtn").style.display = "none";
    nextBubble.classList.add('instBtn2');
    document.querySelector(".instBtn2").style.display = "block";
}

/*------------------------------------------------------------*/

const bubble2 = document.querySelector(".instBtn2");
bubble2.addEventListener('click', changeBubble2);

document.querySelector(".instBtn3").style.display = "none";

function changeBubble2() {

    const nextBubble2 = document.querySelector('.instBtn3');

    document.querySelector(".instBtn2").style.display = "none";
    nextBubble2.classList.add('instBtn3');
    document.querySelector(".instBtn3").style.display = "block";
}

/*------------------------------------------------------------*/

const bubble3 = document.querySelector(".instBtn3");
bubble3.addEventListener('click', changeBubble3);

document.querySelector(".instBtn4").style.display = "none";

function changeBubble3() {

    const nextBubble3 = document.querySelector('.instBtn4');

    document.querySelector(".instBtn3").style.display = "none";
    nextBubble3.classList.add('instBtn4');
    document.querySelector(".instBtn4").style.display = "block";
}

/*------------------------------------------------------------*/

const bubble4 = document.querySelector(".instBtn4");
bubble4.addEventListener('click', changeBubble4);


function changeBubble4() {

    document.querySelector(".instBtn4").style.display = "none";
    document.querySelector(".whenClicked").style.display = "none";
}
