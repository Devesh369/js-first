let randomnumber = (parseInt(Math.random()*100 + 1));

const submit =document.querySelector('#subt');
const userinput =document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses'); 
const remaining =document.querySelector('.lastresult');
const loworhi =document.querySelector('.loworhi');
const startover =document.querySelector('#resultparas');


const p =document.createElement('p');
let prevguess = [];
let numguess = 1;

let playgame =true;
if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
       const guess= parseInt(userinput.value);
       console.log(guess);
      validateguess(guess);
       
    })
}

function validateguess(guess){
    if(isNaN(guess))
    {
        alert('plz enter a valid number')
    }else if(guess< 1){
        alert('plz enter greater then 1 number')
    }else if(guess > 100){
        alert('plz enter lower then 100 number')
    }else{
        prevguess.push(guess);
        if(numguess === 10){
            displayguess(guess);
            displaymessage(`Game Over. Random number was ${randomnumber}`);
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomnumber){
        displaymessage("you guessted right");
        endgame();
    }else if(guess < randomnumber){
        displaymessage(`number is Too low`);
    }else if(guess > randomnumber)
    {
        displaymessage(`number is too High`);
    }
    

}
function displayguess(guess){
    userinput.value ='';
   guessslot.innerHTML += `${guess},` ;
    numguess++;
    remaining.innerHTML = `${10 - numguess}`;

}
function displaymessage(message){

    loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){

    userinput.value ='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id= 'newgame'>Start New Game</h2>`
    startover.appendChild(p);
    playgame = false;
    newgame();
}
function newgame(){

   const newgamebutton =  document.querySelector('#newgame')
    newgamebutton.addEventListener("click",function(e){
        randomnumber = (parseInt(Math.random()*100 + 1));
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML = ''
        remaining.innerHTML = `${10 - numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        
        playgame = true;
    });
    }
