const Player1 = localStorage.getItem("player1");
const Player2 = localStorage.getItem("player2");
document.querySelectorAll("p")[0].innerHTML=Player1;
document.querySelectorAll("p")[1].innerHTML=Player2;

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomDiceImage1 = "dice"+randomNumber1+".png";
    var randomImgSource1 = "images/"+randomDiceImage1;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImgSource1);

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomDiceImage2 = "dice"+randomNumber2+".png";
    var randomImageSource2 = "images/"+randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1]
    image2.setAttribute("src",randomImageSource2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 "+Player1+" Win";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML = Player2+" Win 🚩";
    }
    else{
        document.querySelector("h1").innerHTML =" Draw!";
    }
}