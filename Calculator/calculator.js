const display = document.getElementById("display");

function appendNumber(num) {
    display.value = display.value + num.toString();
}

function appendCharacter(char) {
    display.value = display.value + char;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert("Hatalı giriş!");
        clearDisplay();
    }
}