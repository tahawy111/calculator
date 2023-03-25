let output = document.getElementById("calc");

function display(num){
    output.value += num;
};
function Clear() {
    output.value = "";
};
function Delete() {
    output.value = output.value.slice(0, -1);
};

function calc() {
    output.value = eval(output.value);
};