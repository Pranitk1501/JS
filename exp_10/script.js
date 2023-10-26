function appendToOutput(value) {
    document.getElementById('output').value += value;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('output').value);
        document.getElementById('output').value = result;
    } catch (error) {
        alert('Invalid input!');
    }
}
