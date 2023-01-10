let num = Math.random() * 20;
let result = Math.round(num * 10) / 10;

// console.log(num);
console.log(result);

let num_guess = 0;

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (isNaN(guess)) {
        
        document.getElementById("guess").style.backgroundColor = "rgb(255, 105, 97)";

        message.innerHTML = "Given Input is Not a Number !".fontcolor("red");
    }
    else if (guess > 20) {
        
        document.getElementById("guess").style.backgroundColor = "rgb(255, 105, 97)";

        message.innerHTML = "Given Input Number is Not in Range, Try Again".fontcolor("red")
        num_guess += 1;
    }
    else if (guess > result) {

        document.getElementById("guess").style.backgroundColor = "rgb(255, 105, 97)";

        message.innerHTML = "Try a Lower Number".fontcolor("red")
        num_guess += 1;
    }
    else if (guess < result) {

        document.getElementById("guess").style.backgroundColor = "rgb(255, 105, 97)";

        message.innerHTML = "Try a Higher Number".fontcolor("red")
        num_guess += 1;
    }
    if(num_guess > 7){

        document.getElementById("guess").style.backgroundColor = "rgb(255, 105, 97)"

        message.innerHTML="You have exceeded the number of Tries !".fontcolor("red")
        return;
    }
    else if (guess == result) {

        document.getElementById("guess").style.backgroundColor = "rgb(144, 238, 144)";

        let text = "You got it ! It took you " + num_guess + " tries";
        let result = text.fontcolor("green");
        message.innerHTML = result;
        
        num_guess += 1;
        return;
    }
}