import {eventClickRegister} from './keyController.js';

export const calculatorView = () => {
    // Selección del contenedor principal
    const container = document.querySelector("#container");

    // Contenedor de la calculadora
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator-container");

    // Display de la calculadora
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.readOnly = true;
    display.value = "0";

    // Contenedor del display
    const calculatorDisplay = document.createElement("div");
    calculatorDisplay.classList.add("calculator-display");
    // <div class="calculator-display"></div>


/*
######################################################################
  ColumnKeys 1
######################################################################
*/
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("calculator-buttons-container");
    calculatorDisplay.append(display);

    // Key clear
    const keyClear = document.createElement("button");
    keyClear.classList.add("calculator-key", "key-clear");
    keyClear.id = "clear";
    keyClear.textContent = "AC";
    eventClickRegister("AC",keyClear)

    // Key sign
    const keySign = document.createElement("button");
    keySign.classList.add("calculator-key", "key-sign");
    keySign.id = "changeSign";
    keySign.textContent = "+/-";
    eventClickRegister("+/-",keySign)

    // Key percent
    const keyPercent = document.createElement("button");
    keyPercent.classList.add("calculator-key", "key-percent");
    keyPercent.id = "percent"; 
    keyPercent.textContent = "%";
    eventClickRegister("%",keyPercent)

    // Key delete
    const keyDelete = document.createElement("button");
    keyDelete.classList.add("calculator-key", "key-delete");
    keyDelete.id = "delete";
    keyDelete.innerHTML = "←"; 
    eventClickRegister("←", keyDelete)

    //column 1
    let calculatorKeysRows1 = document.createElement("div");
    calculatorKeysRows1.classList.add("calculator-keys-row");
    calculatorKeysRows1.append(keyClear, keySign, keyPercent, keyDelete);

    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(calculatorKeysRows1);

    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);

/*
######################################################################
  ColumnKeys 2
######################################################################
*/
    const key7 = document.createElement("button");
    key7.classList.add("calculator-key", "key-seven");
    key7.id = "seven";
    key7.innerHTML = "7"; 
    eventClickRegister("7",key7)

    const key4 = document.createElement("button");
    key4.classList.add("calculator-key", "key-four");
    key4.id = "four";
    key4.innerHTML = "4"; 
    eventClickRegister("4",key4)

    const key1 = document.createElement("button");
    key1.classList.add("calculator-key", "key-one");
    key1.id = "one";
    key1.innerHTML = "1"; 
    eventClickRegister("1",key1)

    const key0 = document.createElement("button");
    key0.classList.add("calculator-key", "key-zero");
    key0.id = "zero";
    key0.innerHTML = "0"; 
    eventClickRegister("0",key0)

    let calculatorKeysRows2 = document.createElement("div");
    calculatorKeysRows2.classList.add("calculator-keys-row");
    calculatorKeysRows2.append(key7, key4, key1, key0)
    calculatorKeys.append(calculatorKeysRows2);


/*
######################################################################
  ColumnKeys 3
######################################################################
*/
    const key8 = document.createElement("button");
    key8.classList.add("calculator-key", "key-eight");
    key8.id = "eight";
    key8.innerHTML = "8"; 
    eventClickRegister("8",key8)

    const key5 = document.createElement("button");
    key5.classList.add("calculator-key", "key-five");
    key5.id = "five";
    key5.innerHTML = "5"; 
    eventClickRegister("5",key5)

    const key2 = document.createElement("button");
    key2.classList.add("calculator-key", "key-two");
    key2.id = "two";
    key2.innerHTML = "2"; 
    eventClickRegister("2",key2)

    const keyDecimal = document.createElement("button");
    keyDecimal.classList.add("calculator-key", "key-decimal");
    keyDecimal.id = "decimal";
    keyDecimal.innerHTML = "‧"; 
    eventClickRegister("‧",keyDecimal)

    let calculatorKeysRows3 = document.createElement("div");
    calculatorKeysRows3.classList.add("calculator-keys-row");
    calculatorKeysRows3.append(key8, key5, key2, keyDecimal);
    calculatorKeys.append(calculatorKeysRows3);

/*
######################################################################
  ColumnKeys 4
######################################################################
*/
    const key9 = document.createElement("button");
    key9.classList.add("calculator-key", "key-nine");
    key9.id = "nine";
    key9.innerHTML = "9"; 
    eventClickRegister("9",key9)

    const key6 = document.createElement("button");
    key6.classList.add("calculator-key", "key-six");
    key6.id = "six";
    key6.innerHTML = "6"; 
    eventClickRegister("6",key6)

    const key3 = document.createElement("button");
    key3.classList.add("calculator-key", "key-three");
    key3.id = "three";
    key3.innerHTML = "3"; 
    eventClickRegister("3",key3)

    const keyEquals = document.createElement("button");
    keyEquals.classList.add("calculator-key", "key-equals");
    keyEquals.id = "equals";
    keyEquals.innerHTML = "="; 
    eventClickRegister("=",keyEquals)
    
    let calculatorKeysRows4 = document.createElement("div");
    calculatorKeysRows4.classList.add("calculator-keys-row");
    calculatorKeysRows4.append(key9, key6, key3, keyEquals);
    calculatorKeys.append(calculatorKeysRows4);


/*
######################################################################
  ColumnKeys 5
######################################################################
*/
    const keyAdd = document.createElement("button");
    keyAdd.classList.add("calculator-key", "key-add");
    keyAdd.id = "add";
    keyAdd.innerHTML = "+";
    eventClickRegister("+",keyAdd) 

    const keySubtract = document.createElement("button");
    keySubtract.classList.add("calculator-key", "key-subtract");
    keySubtract.id = "subtract";
    keySubtract.innerHTML = "-"; 
    eventClickRegister("-",keySubtract)

    const keyMultiply = document.createElement("button");
    keyMultiply.classList.add("calculator-key", "key-multiply");
    keyMultiply.id = "multiply";
    keyMultiply.innerHTML = "x"; 
    eventClickRegister("*",keyMultiply)

    const keyDivide = document.createElement("button");
    keyDivide.classList.add("calculator-key", "key-divide");
    keyDivide.id = "divide";
    keyDivide.innerHTML = "÷"; 
    eventClickRegister("÷",keyDivide)

    let calculatorKeysRows5 = document.createElement("div");
    calculatorKeysRows5.classList.add("calculator-keys-row");
    calculatorKeysRows5.append(keyAdd, keySubtract, keyMultiply, keyDivide);
    calculatorKeys.append(calculatorKeysRows5);
};
