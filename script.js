// JavaScript File
Math.floor((Math.random() * 100)) + 1 

const number = Math.floor((Math.random() * 100)) + 1;
function checkResult(){
    let display= document.getElementById("result")
    let guess = parseInt(document.getElementById('number').value);
    console.log("test 1");
    if(guess == number){
        display.style.color ="#4BB543";
        display.innerHTML = "You are a Genius;"
    } else if(guess > number){
        display.style.color ="#d9534f";
        display.innerHTML = "Too Hot";
        console.log(display.innerHTML)
    } else {
        display.style.color ="#d9534f";
        display.innerHTML = "Too Low";
    
    }
    
   
}
