function controlRight() {
    document.getElementById("car").src = "right.jpg";
    var element = document.getElementById("car");
    element.style.width = 200 + "px";
    element.style.height = 100 + "px";
    element.style.left = parseInt(element.style.left) + 50 + "px";
    }
function controlLeft() {
    document.getElementById("car").src = "left.jpg";
    var element = document.getElementById("car");
    element.style.width = 200 + "px";
    element.style.height = 100 + "px";
    element.style.left = parseInt(element.style.left) - 50 + "px";
}
function controlUp() {
    document.getElementById("car").src = "up.jpg";
    var element = document.getElementById("car");
    element.style.width = 100 + "px";
    element.style.height = 200 + "px";
    element.style.top = parseInt(element.style.top) - 50 + "px";
}
function controlDown() {
    document.getElementById("car").src = "down.jpg";
    var element = document.getElementById("car");
    element.style.width = 100 + "px";
    element.style.height = 200 + "px";
    element.style.top = parseInt(element.style.top) + 50 + "px";
}