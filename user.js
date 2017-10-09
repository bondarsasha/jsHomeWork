/*function Car(model, rubber) {
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
mazda.go();*/



(function() {
  var n = [0,3,5,1,7,6,8];
  for (var i = 0; i < n.length; i++) {
    if (n[i] == 5){
      console.log(n[i]);
    }
  }
})();

(function() {
  var n = [0,3,'text',1,7,6,8];
  for (var i = 0; i < n.length; i++) {
    if (n[i] == 'text'){
      console.log(n[i]);
    }
  }
})();
