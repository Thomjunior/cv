
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="images/joy"+randomNumber1+".jpg";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/joy"+randomNumber2+".jpg";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Rejoycer 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Rejoycer 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}