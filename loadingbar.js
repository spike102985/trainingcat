window.onload = function () {
  var pos = 0;

  var box = document.getElementById('box');
  var t = setInterval(move, 3);

  var percent = document.getElementsByClassName('percent');

  function move() {
    if (pos >= 500) {
      clearInterval(t);
      window.location = "train.html"
    }
    else {
      pos += 1;
      box.style.width = pos + 'px';
      percent[0].innerText = "Loading " + Math.ceil(pos / 5) + '%';
    }
  }
};