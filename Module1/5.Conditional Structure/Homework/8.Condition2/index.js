//Bài 1
function changeTemp() {
        let temp = document.getElementById("temp").value;
        let from1 = document.getElementById("fromTemp").value;
        let to1 = document.getElementById("toTemp").value;
        if (from1 == "c" && to1 == "f"){
            let resultTemp1 = (Number(temp)*9)/5 + 32;
            document.getElementById("result1").innerHTML = resultTemp1 + " độ F";
        }    else if (from1 == "c" && to1 == "c"){
                    document.getElementById("result1").innerHTML = temp + " độ C";
                }    else if (from1 == "f" && to1 == "c") {
                        let resultTemp2 = ((Number(temp) - 32)*5)/9;
                        document.getElementById("result1").innerHTML = resultTemp2 + " độ C" ;
                        }    else {
                                document.getElementById("result1").innerHTML = temp + " độ F";
                            }
}
//Bài 2
function changeUnit() {
    let unit = document.getElementById("unit").value;
    let from2 = document.getElementById("fromUnit").value;
    let to2 = document.getElementById("toUnit").value;
    if (from2 == "m" && to2 == "ft"){
        document.getElementById("result2").innerHTML = Number(unit)*3.2808 + " ft";
    }    else if (from2 == "m" && to2 == "m"){
                document.getElementById("result2").innerHTML = unit + " m";
            }    else if (from2 == "ft" && to2 == "m") {
                    document.getElementById("result2").innerHTML = Number(unit)/3.2808 + " m" ;
                    }    else {
                            document.getElementById("result2").innerHTML = unit + " ft";
                        }
}
//Bài 3
function areaSquare() {
    let num = document.getElementById('squareEdge').value;
    document.getElementById('result3').innerHTML = Number(num)*Number(num);
}
//Bài 4
function areaRec() {
    let a = document.getElementById('shortEdge').value;
    let b = document.getElementById('longEdge').value;
    document.getElementById('result4').innerHTML = Number(a)*Number(b);
}
//Bài 5
function areaTriangle() {
    let a = document.getElementById('edge1').value;
    let b = document.getElementById('edge2').value;
    let area = (Number(a)*Number(b))/2;
    document.getElementById('result5').innerHTML = area;
}
//Bài 6
function equation1() {
    let a = document.getElementById('ptb1a').value;
    let b = document.getElementById('ptb1b').value;
    document.getElementById('result6').innerHTML = - b/a;
}
//Bài 7
function equation2() {
    let a = document.getElementById('ptb2a').value;
    let b = document.getElementById('ptb2b').value;
    let c = document.getElementById('ptb2c').value;
    let delta = b*b - 4*a*c;
    if (delta > 0) {
        x1 = (- b + Math.sqrt(delta))/(2*a);
        x2 = (- b - Math.sqrt(delta))/(2*a);
        document.getElementById('result7').innerHTML = "Phương trình có hai nghiệm: x = " + x1 + " và x = " + x2;
    }else if (delta == 0) {
        x3 = -b/(2*a);
        document.getElementById('result7').innerHTML = "Phương trình có nghiệm kép: x = " + x3;
    }else document.getElementById('result7').innerHTML = "Phương trình vô nghiệm"
}
//Bài 8
function yearOld() {
    let age = Number(document.getElementById('yearOld').value);
    switch (Number.isInteger(age)) {
        case(true): 
        if (0 < age && age < 120) {
            document.getElementById('result8').innerHTML = "Tuổi của bạn là: " + age;
            }else document.getElementById('result8').innerHTML = "Nhập lại tuổi của bạn";
        break;
        case(false):
            document.getElementById('result8').innerHTML = "Nhập lại tuổi của bạn";
        break;
        default: "";
    }
}
//Bài 9
function checkEdgeTriangle() {
    let a = parseInt(document.getElementById('edgeTri1').value);
    let b = parseInt(document.getElementById('edgeTri2').value);
    let c = parseInt(document.getElementById('edgeTri3').value);
    if (a > 0 && b > 0 && c > 0) {
        let x = a + b;
        let y = b + c;
        let z = a + c;
        if (x > c) {
            if (y > a) {
                if (z > b) {
                    document.getElementById('result9').innerHTML = "a, b, c là cạnh của một tam giác";
                }else document.getElementById('result9').innerHTML = "a, b, c không là cạnh của một tam giác";
            }
        }
    }else document.getElementById('result9').innerHTML = "a, b, c không là cạnh của một tam giác";
}
//Bài 10
function moneyElectric() {
    let num = parseInt(document.getElementById('numberElectric').value);
    if (num > 400) {
        document.getElementById('result10').innerHTML = Number(num)*2.323 + " VNĐ";
    } else if (num > 300) {
        document.getElementById('result10').innerHTML = Number(num)*2.231 + " VNĐ";
    }else if (num > 200) {
        document.getElementById('result10').innerHTML = Number(num)*1.971 + " VNĐ";
    }else if (num > 100) {
        document.getElementById('result10').innerHTML = Number(num)*1.590 + " VNĐ";
    }else if (num > 50) {
        document.getElementById('result10').innerHTML = Number(num)*1.459 + " VNĐ";
    }else document.getElementById('result10').innerHTML = Number(num)*1.403 + " VNĐ";
}
//Bài 11
function incomeTax() {
    let income = parseInt(document.getElementById('income').value);
    if (income > 80000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 7. Thuế thu nhập cá nhân là: " + (Number(income)*0.35 - 9850000) + " VNĐ";
    }else if (income > 80000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 6. Thuế thu nhập cá nhân là: " + (Number(income)*0.3 - 5850000) + " VNĐ";
    }else if (income > 52000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 5. Thuế thu nhập cá nhân là: " + (Number(income)*0.25 - 3250000) + " VNĐ";
    }else if (income > 18000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 4. Thuế thu nhập cá nhân là: " + (Number(income)*0.2 - 1650000) + " VNĐ";
    }else if (income > 10000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 3. Thuế thu nhập cá nhân là: " + (Number(income)*0.15 - 750000) + " VNĐ";
    }else if (income > 5000000) {
        document.getElementById('result11').innerHTML = "Lương của bạn bậc 2. Thuế thu nhập cá nhân là: " + (Number(income)*0.1 - 250000) + " VNĐ";
    }else document.getElementById('result11').innerHTML = "Lương của bạn bậc 1. Thuế thu nhập cá nhân là: " + Number(income)*0.05 + " VNĐ";
}
//Bài 12
function interestBank() {
    let money = parseInt(document.getElementById('money').value);
    let month = parseInt(document.getElementById('month').value);
    let interest = parseInt(document.getElementById('interestMonth').value);
    let i = 0;
    while (i < month) {
    money = money + Number(money)*(Number(interest)/100);
    i++;
    }
    document.getElementById('result12').innerHTML = money +" VNĐ";
}