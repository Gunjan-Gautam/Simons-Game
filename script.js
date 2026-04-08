let gameseq = [];
let userSeq = [];
let randBtn = ["one", "two", "three", "four"];
let started = false;
let level = 0;
let btns = document.querySelectorAll(".box-button")


document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game started")
        started = true;
        levelup();
    }

})
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 250);
}

const levelup = () => {
    userSeq=[];
    level++;
    let p = document.querySelector("p");
    p.innerText = `level ${level}`
    let randomNum = Math.floor(Math.random() * 4);
    let randIdx = randBtn[randomNum]
    let btns = document.querySelector(`#${randIdx}`)
    gameseq.push(randIdx);
    btnflash(btns);
}
function btnPress() {
    console.log(this);
    let btn = this;
    userflash(btn)

    let userPressedIdx = btn.getAttribute("id")
    userSeq.push(userPressedIdx)
    checkseq(userSeq.length-1);
}

let buttons = document.querySelectorAll(".box-button");
for (elem of buttons) {
    elem.addEventListener("click", btnPress)
}
function checkseq(idx) {
    // let idx=level-1;
    if (gameseq[idx] === userSeq[idx]) {
 if(gameseq.length==userSeq.length){
    setTimeout(levelup,500)
    console.log(gameseq);
    // console.log(userSeq);  
 }
    }
    else {
    document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "white"
        }, 150);
       let p = document.querySelector("p");
    p.innerText = `Game over! your score is ${level} press any key to Restart again`

    reset();


    }
}
function reset(){
    started= false;
    userSeq=[]
    gameseq=[]
    level=0
}

