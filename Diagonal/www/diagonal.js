'use strict';

function arrays(pisos, tamaño) {
  let arrayDeArrays = [];
  for (let i = 0; i < pisos; i++) {
    let firstArray = Array(tamaño).fill(' ');
    firstArray.splice(i, 1, 'Z');
    firstArray.splice(tamaño - i - 1, 1, 'Z');
    arrayDeArrays.push(firstArray);
  }
  return arrayDeArrays;
}

console.log(arrays(10, 10));
