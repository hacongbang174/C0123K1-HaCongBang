document.write("Bài 1:" + "<br>");
let Physisc = prompt("Nhập điểm môn Vật Lý");
let Chemistry = prompt("Nhập điểm môn Hóa Học");
let Biology = prompt("Nhập điểm môn Sinh Học"); 
let Total = Number(Physisc) + Number(Chemistry) + Number(Biology);
let Average = Total/3; 
document.write ("Điểm trung bình là:" + Average + "<br>" + "Điểm tổng là:" + Total);
 