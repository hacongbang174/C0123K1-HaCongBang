
let Mobile = function (battery) {
    this.battery = battery;
    this.memoryWritting = "";
    this.memorySent = "";
    this.memoryInbox = "";
    this.message = "";

    this.checkStatusMobile = function () {
        if (this.status) {
            alert('Điện thoại đang bật');
        } else {
            alert('Điện thoại đang tắt');
        }
        if(this.battery>0){
            this.battery--;
        }else {
            this.battery = 0;
            alert("Điện thoại hết pin. Hãy sạc!");
        }
    }
    this.turnOn = function () {
        this.status = true;
    }

    this.turnOff = function (){
        this.status = false;
    }
    this.setBattery = function(battery){
        this.battery = battery;
    }
    this.chargeBattery = function () {                            //Không chạy được khi đưa theo đối tượng
        alert("sac pin............." + this.battery);
            this.battery += 5;
            var n = setTimeout(this.chargeBattery, 300);
            if(this.battery == 100){
                clearTimeout(n);
                alert("Day pin");
            }
    }

    this.setMessage = function(message) {
        this.message = message;
    }
    this.getMessage = function() {
        if(this.battery>0){
            this.battery--;
        }else {
            this.battery = 0;
            alert("Điện thoại hết pin. Hãy sạc!");
        }
        alert(this.message) ;
    }
    this.getMessageSent = function() {
        this.memorySent += this.message + "<br>";
        if(this.battery>0){
            this.battery--;
        }else {
            this.battery = 0;
            alert("Điện thoại hết pin. Hãy sạc!");
        }
        alert(this.memorySent) ;
    }
    this.sendMessage = function(message, mobile) {
        mobile.setBattery(message);
        if(this.battery>0){
            this.battery--;
        }else {
            this.battery = 0;
            alert("Điện thoại hết pin. Hãy sạc!");
        }
    }
    this.getMessageInbox = function(mobile) {
        this.memoryInbox += mobile.message + "<br>";
        if(this.battery>0){
        this.battery--;
        }else {
            this.battery = 0;
            alert("Điện thoại hết pin. Hãy sạc!");
        }
        alert(this.memoryInbox);
    }
 }

let nokia = new Mobile(100);
let iphone = new Mobile(100);

document.getElementById('batteryNokia').innerHTML = nokia.battery;
document.getElementById('batteryIphone').innerHTML = iphone.battery;

nokia.setMessage('hello'); //không đưa được giá trị value vào document.getElementById('messageNokia').value;
nokia.getMessage();
nokia.sendMessage('hello',iphone);
iphone.getMessageInbox();



/**
var x = 1;
function rePlay(){
    console.log("aaaaaaaaaaaaa");
    var y = setTimeout(rePlay, 1000);
    console.log("bbbbbbbbbbbbbbbbbbbbb");
    if(x == 11){
        clearTimeout(y);
    }
}
rePlay();

 */

// let iphone = new Mobile()
// nokia.chargeBattery = function () {
//     console.log("sac pin............." + nokia.battery);
//         nokia.battery += 5;
//         var n = setTimeout(nokia.chargeBattery, 300);
//         if(nokia.battery == 100){
//             clearTimeout(n);
//             console.log("Day pin");
//         }
// }
// nokia.chargeBattery();

