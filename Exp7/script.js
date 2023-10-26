let myArray = [];
let verdict = ""

function operation(){
    const userInput = JSON.parse(document.getElementById('input').value);

    if (Array.isArray(userInput)) {
        appendToArray(userInput);
    } else if (typeof userInput === 'object') {
        verdict = "It's not an array, but an object";
        displayVerdict();
    } else {
        verdict = "Please enter a valid object!!";
        displayVerdict();
    }
}

function appendToArray(arr) {
    myArray = myArray.concat(arr);
    verdict = "It is an Array"
    displayArray();
    displayVerdict();
}

function displayArray() {
    document.getElementById("array").innerHTML=myArray;	
}
function displayVerdict(){
    document.getElementById("result").innerHTML=verdict;
}

