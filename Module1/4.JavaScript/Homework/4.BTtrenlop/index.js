function controlRight() {
        document.getElementById("car").src = "right.jpg";
        var element = document.getElementById("car").src;
        element.style.left = parseInt(element.style.left) + 50 + "px";
    }
function controlLeft() {
    document.getElementById("car").src = "left.jpg";
    var element = document.getElementById("car").src;
    element.style.left = parseInt(element.style.left) - 50 + "px";
}
function controlUp() {
    document.getElementById("car").src = "up.jpg";
    var element = document.getElementById("car").src;
    element.style.top = parseInt(element.style.top) + 50 + "px";
}
function controlDown() {
    document.getElementById("car").src = "down.jpg";
    var element = document.getElementById("car").src;
    element.style.top = parseInt(element.style.top) - 50 + "px";
}