let Apple = function (weight) {
    this.weight = weight;
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.isEmpty = function () {
        if (this.weight < 1) {
            return true;
        } else {
            return false;
        }
    }
    this.decreaseApple = function () {
        if (this.isEmpty()) {
            document.write("Hết táo ! ");
        } else {
           this.weight--;
        }
    }
}
let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setGender = function () {
        if (this.gender == 1) {
            this.gender = true;
        } else {
            this.gender = false;
        }
    }
    this.getGender = function () {
        if (this.gender == true) {
            return this.gender = "Male";
        } else {
            return this.gender = "Female";
        }
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setTalkString = function (string) {
        this.talk = string;
    }
    this.getTalk = function () {
        alert(this.talk);
    }
    this.checkApple = function (apple) {
        return apple.isEmpty();
    }
    this.eat = function (apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple();
            this.weight++;
        } else {
            alert("Hết táo! ");
        }
    }
    this.getInfoHuman = function (human) {
        alert(human.name + " " + human.getGender() + " " + human.weight);
    }
}
let adam = new Human("Adam", 1, 70);
let eva = new Human("Eva", 2, 50)
let apple = new Apple(10);
adam.setTalkString('Hello! I am Adam.');
eva.setTalkString('Hello! I am Eva.');
// console.log(apple.isEmpty());
// console.log(apple.decrease());
while (apple.isEmpty() !== true) {
    document.write("Adam ăn táo <br>");
    adam.eat(apple);
    document.write("Quả táo còn " + apple.getWeight() + " đơn vị <br>");
    document.write("Cân nặng của Adam là: " + adam.getWeight() + " đơn vị <br><br>")

    document.write("Eva ăn táo <br>");
    eva.eat(apple);
    document.write("Quả táo còn " + apple.getWeight() + " đơn vị <br>");
    document.write("Cân nặng của Eva là: " + eva.getWeight() + " đơn vị <br><br>")
}