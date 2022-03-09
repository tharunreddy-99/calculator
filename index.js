
const number1 = document.getElementById("inp1");
const number2 = document.getElementById("inp2");
function res() {
    let x = document.getElementById("inp").value;
    let y = eval(x)
    document.getElementById("inp").value = y
}
function display(val) {
    document.getElementById('inp').value += val;
    return val;
}

