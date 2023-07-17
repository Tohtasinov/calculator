const result = document.getElementById('result');
let currentOperator = '';
let firstNumber = '';
let secondNumber = '';

function setNumber(number) {
  if (currentOperator && secondNumber) {
    result.innerHTML += number;
    secondNumber += number;
  } else if (!currentOperator) {
    if (result.innerHTML === '0') {
      firstNumber = number;
      result.innerHTML = number;
    } else {
      firstNumber += number;
      result.innerHTML += number;
    }
  } else {
    secondNumber = number;
    result.innerHTML = number;
  }
}

function setOperator(operator) {
  currentOperator = operator;
}

function resulting() {
  switch (currentOperator) {
    case '+':
      result.innerHTML = +firstNumber + +secondNumber;
      break;
    case '-':
      result.innerHTML = +firstNumber - +secondNumber;
      break;
    case '*':
      result.innerHTML = +firstNumber * +secondNumber;
      break;
    case '/':
      result.innerHTML = +firstNumber / +secondNumber;
      break;
    case '%':
      result.innerHTML = +(firstNumber * secondNumber) / 100;
      break;
  }
}

function clean() {
  result.innerHTML = 0;
  currentOperator = '';
  firstNumber = '';
  secondNumber = '';
}

let timeElement = document.getElementById("currentTime");
timeElement.classList.add("current-time");
let timeContainer = document.getElementById("timeContainer");
timeContainer.classList.add("time-container");

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  let formattedTime = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnDivision = document.getElementById("btnDivision");
let btnMultiplate = document.getElementById("btnMultiplate");
let btnMinus = document.getElementById("btnMinus");
let btnPlus = document.getElementById("btnPlus");
let btnResult = document.getElementById("btnResult");
let btnCleaner = document.getElementById("btnCleaner");
let btnProsent = document.getElementById("btnProsent");
let btnSpot = document.getElementById("btnSpot");

function handleKeyPress(event) {
  console.log('event: ', event);
  var key = event.key;

  switch (key) {
    case "1":
      btn1.click();
      break;
    case "2":
      btn2.click();
      break;
    case "3":
      btn3.click();
      break;
    case "4":
      btn4.click()
      break;
    case "5":
      btn5.click();
      break;
    case "6":
      btn6.click();
      break;
    case "7":
      btn7.click();
      break;
    case "8":
      btn8.click()
      break;
    case "9":
      btn9.click()
      break;
      case ".":
      btnSpot.click()
      break;
    case "/":
      btnDivision.click()
      break;
    case "*":
      btnMultiplate.click()
      break;
    case "-":
      btnMinus.click()
      break;
    case "+":
      btnPlus.click()
      break;
    case "=":
      btnResult.click()
      break;
    case "c":
      btnCleaner.click()
      break;
    case "%":
      btnProsent.click()
      break;
    case "0":
      btn0.click()
      break;
    case "Backspace":
      del()
      break;
  }
}



document.addEventListener("keypress", handleKeyPress);



