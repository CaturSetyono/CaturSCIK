function appendToResult(value) {
let result = document.getElementById('result');
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}