'use strict';
function pyramid(floors, callBack) {
  for (let i = 0; i <= floors; i++) {
    console.log(callBack(i, floors));
  }
}

const bottomLeft = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  floor += token.repeat(numberItems) + space.repeat(height - numberItems);
  return floor;
};

const bottomRight = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  floor += space.repeat(height - numberItems) + token.repeat(numberItems);
  return floor;
};

const topLeft = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  floor += token.repeat(height - numberItems) + space.repeat(numberItems);
  return floor;
};

const topRight = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  floor += space.repeat(numberItems) + token.repeat(height - numberItems);
  return floor;
};

const bottomCenter = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  if (numberItems === 0) {
    floor += space.repeat(height - numberItems) + token;
  } else {
    floor += space.repeat(height - numberItems) + token.repeat(numberItems * 2 + 1);
  }
  return floor;
};

const topCenter = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  if (numberItems === height) {
    floor += space.repeat(height) + token;
  } else {
    floor += space.repeat(numberItems) + token.repeat((height - numberItems) * 2 + 1);
  }
  return floor;
};

const double = (numberItems, height, token = '*', space = ' ') => {
  let floor = '';
  if (numberItems <= height / 2) {
    floor += space.repeat(height - numberItems) + token.repeat(numberItems * 2 + 1);
  } else {
    floor += space.repeat(numberItems) + token.repeat((height - numberItems) * 2 + 1);
  }
  return floor;
};

console.log(`
Pyramid bottomLeft`);

pyramid(10, bottomLeft);

console.log(`

Pyramid bottomRight`);

pyramid(10, bottomRight);

console.log(`
Pyramid topLeft

`);

pyramid(10, topLeft);

console.log(`
Pyramid topRight

`);

pyramid(10, topRight);

console.log(`Pyramid bottomCenter

`);

pyramid(10, bottomCenter);

console.log(`
Pyramid topCenter

`);

pyramid(10, topCenter);

console.log(`
Pyramid double

`);

pyramid(10, double);
