var myNum;
var msg = document.getElementById('msg');
var noOfGuess = 0;

generateRandomNum();

function generateRandomNum(){
    myNum = Math.floor(Math.random()*100)+1;
}

function play(){
    var inputNum = Number(document.getElementById('input_number').value);

    if(inputNum < 1 || inputNum > 100){
        alert("Please Enter a number Between 1 to 100");
    }
    
    else{
        document.getElementById('no_of_guesses').textContent = ++noOfGuess;

        if(inputNum > myNum){
            if(inputNum - myNum > 10){
                msg.textContent = "Your guess is Too High!!";
                msg.style.color = "red";   
            }else{
                msg.textContent = "Little High, you are closer!!";
                msg.style.color = "coral";
            }
        }
        else if(inputNum < myNum){
            if(myNum - inputNum > 10){
                msg.textContent = "Your guess is Too Low";
                msg.style.color = "red";
            }else{
                msg.textContent = "Little Low, you are closer!!";
                msg.style.color = "coral";
            }
        }
        else{
            msg.textContent = "Yeah! You guessed it right!🏆";
            msg.style.color = "green";
        }
    }
}