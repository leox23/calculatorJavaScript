let numbers = ["1","2","3","4","5","6","7","8","9","0","‧"]
let symbol = ["+","-","*","÷","%"]
let calculationStatus = true
var calculationSymbol = ""
var previousNumber = 0

export function eventClickRegister(buttonText, buttonId){
    const textOnDisplay = document.querySelector('#display');

    buttonId.addEventListener("click", () => {

        if (numbers.includes(buttonText)){            
            calculationStatus ? clear(buttonText)
                              : pushNumber(buttonText) 
                              
        } else if (symbol.includes(buttonText)){
            previousNumber = textOnDisplay.value
            calculationAdapter(buttonText)
        }else{
            switch (buttonText){
                case "AC":
                    console.log("AC");
                    AC()
                break
                case "+/-":
                    console.log("+/-");
                    togglePositiveNegative()
                break
                case "←":
                    console.log("es un ←");
                    deleteChar()
                break
                default: //  resultado
                    console.log("es ==");
                    mathResult()
                break
            }
        }
    })
}

function pushNumber(number) {
    const textOnDisplay = document.querySelector('#display');
    console.log("entre a pushnumber: mi caracter es: " + number);
    if (!(number == "‧")) {
        console.log("entree a condicion de no es punto");
        textOnDisplay.value += number
    } else {
        console.log("entree a condicion de ES PUNTO");
        !(textOnDisplay.value.includes(".")) ? textOnDisplay.value += "."
                                            : null
    }
}

function calculationAdapter(symbol) {
    console.log("detecte que es un simbolo");
    const textOnDisplay = document.querySelector('#display');
    previousNumber = textOnDisplay.value
    calculationStatus = true
    calculationSymbol = symbol
    console.log(calculationStatus)
}

function clear(number = 0){
    const textOnDisplay = document.querySelector('#display');
    previousNumber = textOnDisplay.value
    textOnDisplay.value = number
    calculationStatus = false
}

function AC(){
    const textOnDisplay = document.querySelector('#display');
    previousNumber = 0
    textOnDisplay.value = previousNumber
    calculationStatus = true
}

function togglePositiveNegative(){
    const textOnDisplay = document.querySelector('#display');
    let temp = textOnDisplay.value
    if (temp.charAt(0) == ("-")) {
        temp = temp.slice(1, temp.length)
    } else {
        temp = "-" + temp
    }
    textOnDisplay.value = temp
}

function deleteChar() {
    const textOnDisplay = document.querySelector('#display');
    let temp = textOnDisplay.value

    if (temp != 0) {
        temp = temp.slice(0, temp.length - 1)
        if (temp != "") {
            textOnDisplay.value = temp
        } else{
            textOnDisplay.value = 0
            calculationStatus = true
        }
    }
}

function mathResult(){
    const textOnDisplay = document.querySelector('#display');
    let lastNumber = textOnDisplay.value
    console.log("string del resultado");
    console.log(previousNumber + calculationSymbol + lastNumber);
    console.log(eval(previousNumber + calculationSymbol + lastNumber));
    let result 
    if (calculationSymbol != "%"){
        result = eval(previousNumber + calculationSymbol + lastNumber)
    } else {
        result = eval(lastNumber*(previousNumber/100))
    }
    previousNumber = 0
    textOnDisplay.value = result
}
