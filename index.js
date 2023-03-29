// Generating the random number - Player 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// adding the random number to image, so it can select the image - Player 1
var randomImage1 = "images/dice" + randomNumber1 + ".png";



// assigning it to the image tag - Player 1
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

// Generating the random number - Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// adding the random number to image, so it can select the image - Player 2
var randomImage2 = "images/" + "dice" + randomNumber2 + ".png";

// assigning it to the image tag - Player 2
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


// Winner Decisions
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins ✨"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins ✨"
}

else {
    document.querySelector("h1").innerHTML = "Draw ✨"
}