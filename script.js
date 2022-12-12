const randomnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;
let inp = document.querySelector(".number");
inp.addEventListener("keypress",function(){
    if (event.key === "Enter") {
        event.preventDefault();
    document.querySelector(".btn").click();
        
    }
})
let inp2 = document.querySelector(".number");
inp.addEventListener("keypress",function(){
    if (event.key === "a") {
        event.preventDefault();
    document.querySelector(".again").click();
        
    }
})

document.querySelector(".score").textContent= score;
// console.log(randomnumber);  
// document.querySelector(".number").value=5;
document.querySelector(".btn").addEventListener("click",function(){
let input =Number( document.querySelector(".number").value);
    console.log(input);
if(input==0){
    document.querySelector(".message").textContent="Please Enter A Value";
}
else{
if(score>1)
{
if (input === randomnumber) {
    document.querySelector(".answer").style.width = "100px"
    document.querySelector(".message").textContent="You Won🤯";
    document.querySelector(".answer").textContent=randomnumber;
    document.querySelector("body").style.backgroundColor = "yellow";
    if(score>highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
}
else if(input<randomnumber){
    document.querySelector(".message").textContent="Too Low😂";
    document.querySelector(".number").value='';

    score--;
    document.querySelector(".score").textContent= score;

}
else if(input>randomnumber){
    document.querySelector(".message").textContent="Too High😂";
    document.querySelector(".number").value='';

    score--;
    document.querySelector(".score").textContent= score;
}}
else{
    document.querySelector(".message").textContent="You Lost The Game😭";
    document.querySelector(".score").textContent= 0;
    
}
}
})
document.querySelector(".again").addEventListener("click",function() {
    score = 20;
    document.querySelector(".score").textContent = 20;
    const randomnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector("body").style.backgroundColor = "blueviolet";
    document.querySelector(".number").value='';
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".answer").textContent="?";


    

})