
let Mobile = function(battery, memoryWritting, memorySent, memoryInbox) {
    this.battery = battery;
    this.memoryWritting = memoryWritting;
    this.memorySent = memorySent;
    this.memoryInbox = memoryInbox;
    this.message = "";

    this.turnOn = function() {
        this.status = true;
    }
    this.turnOn = function() {
        this.status = false;
    }
    this.checkStatusMobile = function() {
        if(this.status == true || this.battery > 0) {
            alert("Điện thoại đang bật");               
        }else {
            alert("Điện thoại đang tắt");
        }
    }

    this.chargeBattery = function() {
        this.battery++;
        let n = setTimeout(this.chargeBattery(), 300);
        if (this.battery == 100) {
            clearTimeout(n);
        }
    }
    
    this.setMessage = function (message) {
        this.message = message;
    }

    this.sendMessage = function(message,mobile) {
        mobile.setMessage(message);
    } 
    this.getMessage = function () {
        return this.message;
    }
    this.getMemoryInbox = function() {
        return this.memoryInbox;
    }
    this.getMemorySent = function() {
        return this.memorySent;
    }
    this.useMobile = function () {
        if(this.battery > 0) {
            this.battery--;
        }
    }
}
let nokia = new Mobile(100,1000,1000,1000);
document.getElementById('batteryNokia').innerText= nokia.battery;
let iphone = new Mobile(50,1000,1000,1000);
document.getElementById('batteryNokia').innerText= nokia.battery;
let messageNokia = document.getElementById('messageNokia').innerText; 
nokia.sendMessage(messageNokia,iphone);