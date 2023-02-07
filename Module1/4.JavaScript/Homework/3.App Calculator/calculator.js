function addition() {
    let Num1 = document.getElementById("number1").value;
    let Num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Addition: " + (Number(Num1)+Number(Num2));
}
function subtraction() {
    let Num1 = document.getElementById("number1").value;
    let Num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Subtraction: " + (Number(Num1)-Number(Num2));
}
function multiplication() {
    let Num1 = document.getElementById("number1").value;
    let Num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Multiplication: " + (Number(Num1)*Number(Num2));
}
function division() {
    let Num1 = document.getElementById("number1").value;
    let Num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Division: " + (Number(Num1)/Number(Num2));
}