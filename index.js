//variables to contain the HTML elements
let slider = document.getElementById("password-length");
let sliderValue = document.getElementById("length-value");
let symbols = document.getElementById("symbols");
let capitalLetters = document.getElementById("capital-letters");
let smallLetters = document.getElementById("small-letters");
let numbers = document.getElementById("numbers");
let passwordContent = document.getElementById("new-password");

let length=10;

//All possible characters
const SYMBOLS = "!@#$%^&*";
const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SMALL_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";


//booleans to record state of the checkboxes
let symbolsSelection=false;
let capitalSelection=false;
let smallSelection=false;
let numberSelection=false;

slider.oninput = function(){
    sliderValue.textContent=this.value;
    length=Number(this.value);
}


symbols.addEventListener("change", function(){
    symbolsSelection=symbols.checked;
})

capitalLetters.addEventListener("change", function(){
    capitalSelection=capitalLetters.checked;
})

smallLetters.addEventListener("change", function(){
    smallSelection=smallLetters.checked;
})

numbers.addEventListener("change", function(){
    numberSelection=numbers.checked;
})

function generatePassword(){

    let allowedcharacters="";

    if(length===0)
        passwordContent.textContent="Please select a suitable length";
    
    else if(!symbolsSelection && !capitalSelection && !smallSelection && !numberSelection)
        passwordContent.textContent="Please select characters to create the password";

    else{
        if(symbolsSelection)
            allowedcharacters+=SYMBOLS;

        if(capitalSelection)
            allowedcharacters+=CAPITAL_LETTERS;

        if(smallSelection)
            allowedcharacters+=SMALL_LETTERS;

        if(numberSelection)
            allowedcharacters+=NUMBERS;

        let password = "";
        for (let i = 0; i < length; i++) {
            password += allowedcharacters[Math.floor(Math.random() * allowedcharacters.length)];
        }
        passwordContent.textContent=password;
    }

}

