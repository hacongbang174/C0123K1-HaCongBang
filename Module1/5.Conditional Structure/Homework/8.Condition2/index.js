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
    document.getElementById('result7').innerHTML = - b/a;
}