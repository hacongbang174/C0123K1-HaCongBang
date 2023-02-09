function changeTeamp() {
let C = document.getElementById('teamp1').value;
let F = document.getElementById('teamp2').value;
let change;
if (change == C) {
        change = (Number(C)*9)/5 + 32;
        document.getElementById('teamp2').value = change;
} else if (change == F){
        change = ((Number(F) - 32)*5)/9;
        document.getElementById('teamp1').value = change;
        }else document.write("Nhập lại giá trị");
};
