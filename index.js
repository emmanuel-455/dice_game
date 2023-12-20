let randomNumber = Math.floor(Math.random() * 6 + 1);
let image1 = "images/dice" + randomNumber + ".png"
let getImg = document.querySelectorAll("img")[0];
getImg.setAttribute("src", image1);

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let image2 = "images/dice" + randomNumber1 + ".png"
let getImg1 = document.querySelectorAll("img")[1];
getImg1.setAttribute("src", image2);

if(randomNumber > randomNumber1){
    let player1 = document.querySelectorAll("p")[0];
    player1.innerHTML = "Winner";
}
else if(randomNumber1 > randomNumber){
    let player2 = document.querySelectorAll("p")[1];
    player2.innerHTML = "Winner";
}
else if(randomNumber === randomNumber1){
    document.querySelector(".player1").innerHTML = "Draw"
    document.querySelector(".player2").innerHTML = "Draw"
}
