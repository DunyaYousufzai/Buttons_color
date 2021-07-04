var all_button = document.getElementsByTagName("button")
var copyAllButtons = []
for(let i = 0; i < all_button.length; i++){
    copyAllButtons.push(all_button[i].classList[1]);
}
function  buttonColorChange(buttonThingy){
    if(buttonThingy.value ===   "red"){
        buttonRed();
    }
    else if(buttonThingy.value ===   "green"){
        buttonGreen();
    }
    else if(buttonThingy.value ===   "reset"){
        buttonReset();
    }
    else if(buttonThingy.value ===   "random"){
        buttonRandom();
    }
}
function buttonRed(){
    for(let i =  0; i < all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-danger");
    }
 }
function buttonGreen(){
    for(let i =  0; i <all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-success")
    }
}
function buttonReset(){
    for(let i =  0; i <all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButtons[i])
    }
}
function buttonRandom(){
    let choices = ["btn-primary", "btn-danger", "btn-success","btn-warning","btn-info","btn-secondary","btn-dark"]
    for(let i =  0; i <all_button.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomNumber]);
    }
}