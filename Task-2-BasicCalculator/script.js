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

function calculateResult() {
  try {
    // display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = parseFloat(result.toFixed(12));
  } catch {
    display.innerText = 'Error';
  }
}