'use strict';

// console.log(input);

function bomb(attemp) {
  let randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
  for (let i = attemp; i >= 1; i--) {
    let input = +prompt('Desactivame');
    if (input === randomNumber) {
      alert('Bomba desactivada!!');
      break;
    } else if (i <= 1) {
      alert('BOOOOOOOOOOOOOOOOOOOM');
      break;
    } else {
      alert(`Vuelve a intentarlo, te quedan ${i - 1} intentos`);
    }
  }
  bomb(5);
}

bomb(5);
