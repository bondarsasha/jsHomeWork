window.onload = function() {
  for (var i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="item"></div>';
  };

  var stroke = 0;

  document.getElementById('game').onclick = function(event) {
    console.log(event);
    if (event.target.className == "item") {
      if (stroke%2==0) {
        event.target.innerHTML = 'x';
      } else {
          event.target.innerHTML = '0';
      }
      stroke++;
      checkWin();
    };
  };

    function checkWin() {
      var allitem = document.getElementsByClassName('item');

        /*
        Победа Крестиков
        */

        if (allitem[0].innerHTML=='x' && allitem[1].innerHTML=='x' && allitem[2].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[3].innerHTML=='x' && allitem[4].innerHTML=='x' && allitem[5].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[6].innerHTML=='x' && allitem[7].innerHTML=='x' && allitem[8].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[0].innerHTML=='x' && allitem[3].innerHTML=='x' && allitem[6].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[1].innerHTML=='x' && allitem[4].innerHTML=='x' && allitem[7].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[2].innerHTML=='x' && allitem[5].innerHTML=='x' && allitem[8].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[0].innerHTML=='x' && allitem[4].innerHTML=='x' && allitem[8].innerHTML=='x') alert ('Победили Крестики');
        if (allitem[2].innerHTML=='x' && allitem[4].innerHTML=='x' && allitem[6].innerHTML=='x') alert ('Победили Крестики');

        /*
        Победа Ноликов
        */

        if (allitem[0].innerHTML=='0' && allitem[1].innerHTML=='0' && allitem[2].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[3].innerHTML=='0' && allitem[4].innerHTML=='0' && allitem[5].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[6].innerHTML=='0' && allitem[7].innerHTML=='0' && allitem[8].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[0].innerHTML=='0' && allitem[3].innerHTML=='0' && allitem[6].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[1].innerHTML=='0' && allitem[4].innerHTML=='0' && allitem[7].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[2].innerHTML=='0' && allitem[5].innerHTML=='0' && allitem[8].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[0].innerHTML=='0' && allitem[4].innerHTML=='0' && allitem[8].innerHTML=='0') alert ('Победили Ноликов');
        if (allitem[2].innerHTML=='0' && allitem[4].innerHTML=='0' && allitem[6].innerHTML=='0') alert ('Победили Ноликов');
    };
};
