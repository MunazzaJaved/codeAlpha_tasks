let display = document.getElementById('display');

function clearDisplay() {
  display.innerText = '0';
}

function appendToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function addDoubleZero() {
  appendToDisplay('00');
}

function calculateResult() {
  try {
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = parseFloat(result.toFixed(12));
  } catch {
    display.innerText = 'Error';
  }
}
