let Mobile = function (battery) {
    this.battery = battery;
    this.memoryWritting = "";
    this.memorySent = "";
    this.memoryInbox = "";

    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.getStatusMobile = function () {
        if (this.status) {
            console.log('Điện thoại đang bật');
        } else {
            console.log('Điện thoại đang tắt');
        }
    }

    this.setMessage = function (message) {
        this.message = message;
    }
    this.getMessage = function () {
        console.log(this.message);
        if (this.battery > 0) {
            this.battery--;
            console.log(this.battery);
        } else {
            console.log('Điện thoại hết pin');
            this.battery = 0;
            this.turnOff();
            this.checkStatusMobile();
            console.log(this.battery);
        }
    }
    this.getMemorySent = function () {
        this.memorySent += this.message;
        console.log(this.memorySent);
        if (this.battery > 0) {
            this.battery--;
            console.log(this.battery);
        } else {
            console.log('Điện thoại hết pin');
            this.battery = 0;
            this.turnOff();
            this.checkStatusMobile();
            console.log(this.battery);
        }
    }
    this.sendMessage = function (message, mobile) {
        mobile.setMessage(message);
    }
    this.getMemoryInbox = function () {
        this.memoryInbox += this.message;
        console.log(this.memoryInbox);
        if (this.battery > 0) {
            this.battery--;
            console.log(this.battery);
        } else {
            console.log('Điện thoại hết pin');
            this.battery = 0;
            this.turnOff();
            this.checkStatusMobile();
            console.log(this.battery);
        }
    }

    this.chargeBattery = function () {
        this.battery++;
        console.log(this.battery);
    }
}
let nokia = new Mobile(100);
let iphone = new Mobile(100);
nokia.turnOn();
nokia.getStatusMobile();
nokia.setMessage('Hello');
nokia.getMessage();
nokia.getMemorySent();
nokia.sendMessage('Hello', iphone);
iphone.getMemoryInbox();
nokia.getMemoryInbox();
nokia.chargeBattery()
