// вызываем функцию каждые 20 мс
const t = setInterval(move, 20);  // почему если включить то перерстает работать строка 8 ?
//почему идет не с угла а от края box ?
// переменная можно перерприсваивать 
let pos = 0
// получаем ссылку на box и сохраняем в const
const box = document.getElementById('box');

box.style.left = 150 + 'px';
let direction=1;

function move(){
    pos=pos+direction;
    if (pos == 150) {
direction=-1    
      }
      if (pos == 0) {
        direction=1    
              }
      box.style.left = pos + 'px'
      box.style.top = pos + 'px'
    }

