/* 
document.getElementById("hello").innerHTML = "What Can JavaScript Do?";
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
   }
function myFunction2() {
    document.getElementById("demo").innerHTML = "JavaScript can change HTML content.";
   }
function image() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
}
function image1() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
}
*/
function showname1(){
    alert('Nguyễn Văn A');
}
function showname2(){
    document.getElementById('name').innerHTML = "Nguyễn Văn A";
}
function showname3(){
    document.write('Nguyễn Văn A');
}
function showname4(){
    console.log('Nguyễn Văn A');
}