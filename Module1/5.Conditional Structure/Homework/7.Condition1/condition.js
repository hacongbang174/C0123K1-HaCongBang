//Bài 1
function divisible() {
let a = parseInt(document.getElementById('number1').value);
let b = parseInt(document.getElementById('number2').value);
if (a % b == 0) {
    document.getElementById('result1').innerHTML = "a chia hết cho b";
}else document.getElementById('result1').innerHTML = "a không chia hết cho b";
}
//Bài 2
/*function yearOld() {
    let old = document.getElementById('yearOld').value;
    if (old < 15) {
        document.getElementById('result2').innerHTML = "Bạn không đủ tuổi vào lớp 10";
    }else document.getElementById('result2').innerHTML = "Bạn đủ tuổi vào lớp 10";
}*/