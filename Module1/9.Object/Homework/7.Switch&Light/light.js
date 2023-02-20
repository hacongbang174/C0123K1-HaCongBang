let ElectricLamp = function(status) {
    this.status = status;
    this.getElectricLamp = function() {
        if(this.status) {
            console.log('Đèn sáng');
        }else {
            console.log('Đèn tắt');
        }
    }
}
let switchButton = function(status) {
    this.status = status;
    this.switchOn = function() {
        this.status = true;
    }
    this.switchOff = function() {
        this.status = false;
    }
    this.switchButton = function() {
        if(this.status) {
            console.log('Công tắt đang bật');
        }else {
            console.log('Công tắt đang tắt');
        }
    }
    this.connectToLamp = function(ElectricLamp) {
        if (this.status) {
            ElectricLamp.status = true;
        }else {
            ElectricLamp.status = false;
        }
    }
}

let congtac = new switchButton();
let light = new ElectricLamp();
congtac.switchOn()
congtac.switchButton();
congtac.connectToLamp(light);
light.getElectricLamp();

congtac.switchOff()
congtac.switchButton();
congtac.connectToLamp(light);
light.getElectricLamp();