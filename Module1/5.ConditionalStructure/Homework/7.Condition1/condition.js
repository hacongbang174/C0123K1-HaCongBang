//Bài 1
function divisible() {
let a = document.getElementById('number1').value;
let b = document.getElementById('number2').value;
if (a % b == 0) {
    document.getElementById('result1').innerHTML = "a chia hết cho b";
}else document.getElementById('result1').innerHTML = "a không chia hết cho b";
};
//Bài 2
function yearOld() {
    let old = document.getElementById('yearOld').value;
    if (old < 15) {
        document.getElementById('result2').innerHTML = "Bạn không đủ tuổi vào lớp 10";
    }else document.getElementById('result2').innerHTML = "Bạn đủ tuổi vào lớp 10";
};
//Bài 3
function checkNumber() {
    let number = parseInt(document.getElementById('number3').value);
    if (number < 0) {
        alert(number + "< 0");
    }else if (number == 0) {
        alert (number + " = 0");
    }else alert (number + "> 0");
};
//Bài 4
function maxNumber() {
    let num1 = parseInt(document.getElementById('number4').value);
    let num2 = parseInt(document.getElementById('number5').value);
    let num3 = parseInt(document.getElementById('number6').value);
    if (num1 > num2){
        if (num1 > num3) {
            document.getElementById('result4').innerHTML = num1 + " là số lớn nhất";
        } else {
            document.getElementById('result4').innerHTML = num3 + " là số lớn nhất";
        }
    }else if (num2 > num3) {
        document.getElementById('result4').innerHTML = num2 + " là số lớn nhất";
    }else document.getElementById('result4').innerHTML = num3 + " là số lớn nhất";
};
//Bài 5
function rank() {
    let test1 = Number(document.getElementById('test1').value);
    let test2 = Number(document.getElementById('test2').value);
    let test3 = Number(document.getElementById('test3').value);
    let avg = (test1 + 2*test2 + 3*test3)/6;
    if (avg >=8) {
        document.getElementById('result5').innerHTML = "Điểm trung bình: " + avg + " - Học lực: Giỏi";
    }else if (avg >= 6.5) {
        document.getElementById('result5').innerHTML = "Điểm trung bình: " + avg + " - Học lực: Khá";
            }else if (avg >= 5) {
                document.getElementById('result5').innerHTML = "Điểm trung bình: " + avg + " - Học lực: Trung bình";
                }else if (avg >= 3.5) {
                    document.getElementById('result5').innerHTML = "Điểm trung bình: " + avg + " - Học lực: Trung bình - Yếu";
                    }else document.getElementById('result5').innerHTML = "Điểm trung bình: " + avg + " - Học lực: Yếu";
};
// Bài 6
function percent() {
    let sales = parseInt(document.getElementById('sales').value);
    let result;
    if (sales >= 10000) {
        result = sales*0.15;
        document.getElementById('result6').innerHTML = result + " (hoa hồng 15%)";
    }else if (sales >= 5000) {
            result = sales*0.1;
            document.getElementById('result6').innerHTML = result + " (hoa hồng 10%)";
        }else if (sales >= 1000) {
            result = sales*0.05;
            document.getElementById('result6').innerHTML = result + " (hoa hồng 5%)";    
        } else document.getElementById('result6').innerHTML = "Không đạt chỉ tiêu";
};
//Bài 7
function chargesTelephone() {
    let charges = document.getElementById('charges').value;
    if (charges >= 500) {
        money = Number(charges)*2000;
        document.getElementById('result7').innerHTML = money + " VNĐ";
    }else if (charges >=100) {
        money = Number(charges)*2500;
        document.getElementById('result7').innerHTML = money + " VNĐ";
    }else {
        money = Number(charges)*3000;
        document.getElementById('result7').innerHTML = money + " VNĐ";
    };

};