// let text = document.getElementById('message').textContent;
// console.log(text);

// document.getElementById('message').textContent = 'Game completed';

// document.querySelector('#message').textContent = 'Hi I\'m query selector ';   // backslace for use ' inside any string

// let sNumber = Math.trunc(Math.random() * 20); //trunc will give value in round fighure , will not give value in decimal
let sNumber = Math.trunc(10);
console.log(sNumber);

let soc = 20;
let highscoc = 0;

function guessTheGame(params) {

    if(soc>0){
        let gNumber = document.querySelector('.guess').value;

    
    

        if(!gNumber){
            document.querySelector('#message').textContent = 'Enter A Number and then check';
        }
        else if(gNumber == sNumber){
            document.querySelector('#message').textContent = ' Correct Answer';
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').textContent=gNumber;

            if(soc>highscoc){
                document.querySelector('.highscore').textContent=soc;
            }




        }
        else if(gNumber>sNumber){
            soc--;
            document.querySelector('#message').textContent = '⬆️⬆️ Too High';
            document.querySelector('.score').textContent=soc;
            document.querySelector('body').style.backgroundColor='red';
        }
        else if(gNumber<sNumber){
            soc--;
            document.querySelector('#message').textContent = ' ⬇️⬇️ Too Low';
            document.querySelector('.score').textContent=soc;
            document.querySelector('body').style.backgroundColor='blue';
        }
    }

    else{
        document.querySelector('#message').textContent = ' ❌ You Have Loss The Match, Please try again and your score is 0';   
        document.querySelector('body').style.backgroundColor='teal';
    }

    
}







function resetgame() {
    soc = 20;
    sNumber = Math.trunc(Math.random() * 20);
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.score').textContent=soc;
    document.querySelector('#message').textContent = ' Start Guessing';  
    document.querySelector('.number').textContent='?'; 
    document.querySelector('.guess').value = "";
}