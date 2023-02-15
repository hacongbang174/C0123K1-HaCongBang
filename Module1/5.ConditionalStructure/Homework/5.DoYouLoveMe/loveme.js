function clickme() {
    document.getElementById('yes').innerHTML = alert("<3");
}
function buttonMove() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top = y + 'px';
}