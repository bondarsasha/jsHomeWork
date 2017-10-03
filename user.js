function Car(model, rubber) {
    this.model = model;
    this.rubber = rubber;
    this.getModel = function () {
        console.log(this.model);
    }
    this.getRubber = function () {
        console.log(this.rubber);
    };
    this.go = function () {
        console.log(this.model + " is go");
    };
    this.changeRubber = function (rubber) {
        this.rubber = rubber;
    };
    this.playMusic = function () {
      console.log(this.model + " is plaing music");
    };
}

var test = new Car("toyota", "winterRubber");
test.getModel();
test.getRubber();
test.changeRubber("summerRubber");
test.getRubber();
test.go();
test.playMusic();

var mazda = new Car("mazda", "summerRubber");
mazda.getModel();
mazda.getRubber();
mazda.changeRubber("winterRubber");
mazda.getRubber();
mazda.playMusic();
mazda.go();
