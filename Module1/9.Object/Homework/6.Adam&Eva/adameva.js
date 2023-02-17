let Apple = function(weight) {
    this.weight = weight;
    this.decrease = function() {
        this.decrease = "";
    }
    this.isEmpty = function() {
        this.isEmpty = true;
    }
    this.getWeight = function() {
        return this.weight
    }
}
let Human = function(name,gender,weight) {
    this.name = name;
    this.gender = true;
    this.weight = weight;
    this.setTalkString = function (string) {
        this.talk = string;
    }
    this.getTalk = function() {
        return this.talk;
    }
    this.setGender = function () {
        if(this.gender = true) {
            alert ("Human is Mr")
        }else {
            alert("Human is Ms")
        }
    }
}