document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('input');
    let button = document.getElementById('button');
    let div = document.getElementById('div');
    let current = 0;
    let timer;
  
    function startTimer() {
      div.textContent = --current;
      if (current <= 0)
        timer = clearInterval(timer);
    }
  
    function onClick() {
      timer = clearInterval(timer);
      
      current = +input.value;
      if (current) {
        div.textContent = current;
        timer = setInterval(startTimer, 1000);
      }
    }
  
    button.addEventListener('click', onClick);
  });