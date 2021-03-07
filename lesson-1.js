let number = 5;
const leftBorderWidth = 1;

// let можно изменять

number = 10;
console.log('теперь number = ' + number);

// const который расшифровывается как константа изменять нельзя

// leftBorderWidth = 9; - редактор подчеркнет такой код и при запуске выдаст ошибку

// ОДНАКО!!

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

//всё потому что прямых констант в JS не бывает

// раньше для обьявления использовался var, главной проблемой которого был hoisting, изза которого можно было использовать до её обьяления!

console.log(newName);
var newName = 'NikDoe';

// c let и const это уже не прокатит