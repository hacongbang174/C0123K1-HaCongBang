function Mobile() {
    this.message = "";
    this.memoryMessageIsWritting = "";
    this.memoryMessageInInbox = "";
    this.memoryMessageSent = "";
    this.setBattery = function (battery) {
        if (battery > 100) {
            this.battery = 100;
        } else if (battery > 0) {
            this.battery = battery;
        } else {
            this.battery = 0;
        }
    }
    this.getBattery = function () {
        return this.battery;
    }
    this.setMessage = function (message) {
        this.message = message;
    }
    this.getMessage = function () {
        return this.message;
    }
    this.sendMessage = function (message, mobile) {
        mobile.setMessage(message);
    }
    this.turnOn = function () {
        this.status = "On";
    }
    this.turnOff = function () {
        this.status = "Off";
    }
}
let nokia = new Mobile();
let iphone = new Mobile();

//setBattery

let batteryNokia = parseInt(prompt("Nhập pin cho điện thoại nokia"));
nokia.setBattery(batteryNokia);
document.getElementById('batteryNokia').innerText = nokia.getBattery();

//ChargeBattery1

let battery1 = document.getElementById('batteryNokia').innerText;
function chargeBatteryNokia() {
    document.getElementById('batteryNokia').innerHTML = battery1++;
    let n = setTimeout(chargeBatteryNokia, 100);
    if (document.getElementById('batteryNokia').innerText == 100) {
        clearTimeout(n);
        document.getElementById('statusNokia').value = "On";
    }
}

//StatusMobile1

if (nokia.getBattery() == 0) {
    alert("Điện thoại Nokia hết pin! Đang tắt");
    document.getElementById('statusNokia').value = "Off";
} else {
    document.getElementById('statusNokia').value = "On";
    function sendMessageFromNokia() {
        let messageNokia = document.getElementById('messageNokia').value;
        nokia.sendMessage(messageNokia, iphone);
        nokia.memoryMessageSent += (iphone.getMessage() + " ");
        iphone.memoryMessageInInbox += (iphone.getMessage() + " ");
        document.getElementById('messageNokia').value ="";
        if (document.getElementById('batteryNokia').innerText > 0) {
            document.getElementById('memoryNokiaSent').innerText = nokia.memoryMessageSent;
            document.getElementById('memoryIphoneInbox').innerText = iphone.memoryMessageInInbox;
            document.getElementById('batteryNokia').innerText -= 1;
        } else {
            alert("Điện thoại Nokia hết pin! Đang tắt");
            document.getElementById('statusNokia').value = "Off";
        }
    }
    function openMemoryMessageSentNokia() {
        if (document.getElementById('batteryNokia').innerText > 0) {
            alert(document.getElementById('memoryNokiaSent').innerText);
            document.getElementById('batteryNokia').innerText -= 1;
        } else {
            alert("Điện thoại Nokia hết pin! Đang tắt");
            document.getElementById('statusNokia').value = "Off";
        }
    }
    function openMemoryMessageInboxNokia() {
        if (document.getElementById('batteryNokia').innerText > 0) {
            alert(document.getElementById('memoryNokiaInbox').innerText);
            document.getElementById('batteryNokia').innerText -= 1;
        } else {
            alert("Điện thoại Nokia hết pin! Đang tắt");
            document.getElementById('statusNokia').value = "Off";
        }
    }
}

//setBattery

let batteryIphone = parseInt(prompt("Nhập pin cho điện thoại iphone"));
iphone.setBattery(batteryIphone);
document.getElementById('batteryIphone').innerText = iphone.getBattery();

//ChargeBattery2

let battery2 = document.getElementById('batteryIphone').innerText;
function chargeBatteryIphone() {
    document.getElementById('batteryIphone').innerHTML = battery2++;
    let n = setTimeout(chargeBatteryIphone, 100);
    if (document.getElementById('batteryIphone').innerText == 100) {
        clearTimeout(n);
        document.getElementById('statusIphone').value = "On";
    }
}

//StatusMobile2

if (iphone.getBattery() == 0) {
    alert("Điện thoại Iphone hết pin! Đang tắt");
    document.getElementById('statusIphone').value = "Off";
} else {
    document.getElementById('statusIphone').value = "On";
    function sendMessageFromIphone() {
        let messageIphone = document.getElementById('messageIphone').value;
        iphone.sendMessage(messageIphone, nokia);
        iphone.memoryMessageSent += (nokia.getMessage() + " ");
        nokia.memoryMessageInInbox += (nokia.getMessage() + " ");
        document.getElementById('messageIphone').value ="";
        if (document.getElementById('batteryIphone').innerText > 0) {
            document.getElementById('memoryIphoneSent').innerText = iphone.memoryMessageSent;
            document.getElementById('memoryNokiaInbox').innerText = nokia.memoryMessageInInbox;
            document.getElementById('batteryIphone').innerText -= 1;
        } else {
            alert("Điện thoại Iphone hết pin! Đang tắt");
            document.getElementById('statusIphone').value = "Off";
        }
    }
    function openMemoryMessageSentIphone() {
        if (document.getElementById('batteryIphone').innerText > 0) {
            alert(document.getElementById('memoryIphoneSent').innerText);
            document.getElementById('batteryIphone').innerText -= 1;
        } else {
            alert("Điện thoại Iphone hết pin! Đang tắt");
            document.getElementById('statusIphone').value = "Off";
        }
    }
    function openMemoryMessageInboxIphone() {
        if (document.getElementById('batteryIphone').innerText > 0) {
            alert(document.getElementById('memoryIphoneInbox').innerText);
            document.getElementById('batteryIphone').innerText -= 1;
        } else {
            alert("Điện thoại Iphone hết pin! Đang tắt");
            document.getElementById('statusIphone').value = "Off";
        }
    }
}