//методы и свойства строк и чисел
//у строки есть только одной свойство

const str = 'NikDoe';
console.log(str.length); //количесто символов

//с массивами можно тоже опередлить

const arr = [1, 3, 5];
console.log(arr.length);

//все символы в верхнем регистре
//важно знать, что создается копия нового значения, исходное значение строки не изменяется

console.log(str.toUpperCase());

//все символы в нижнем регистре

console.log(str.toLocaleLowerCase());

//метод поиска под строки, или по другому с какого индекса начинается слово встроке
//важно знать что если искомый символ или слово не были найдены то метод вернет -1

const newStr = 'hello NikDoe!';
console.log(newStr.indexOf('NikDoe'));
console.log(newStr.indexOf('w')); //-1
console.log(newStr.indexOf('arrow')); //-1

//методы которые работаю с изменением строки
//вырезать часть строки которая начинается с символа индексом x до символа с индексом y

console.log(newStr.slice(3, 8)); // lo Ni

//важно знать что если задать отрицательные значения то индекс будет считаться с права

console.log(newStr.slice(-5, -1)); // kDoe

// аналогичный метод substring, с особенностью что нельзя писать отрицательные значения

console.log(newStr.substring(2, 9)); // llo Nik
console.log(newStr.substring(9, 2)); // llo Nik

// если передать только один аргумент в эти два метода, то вырезать они будут начиная с данного индекса и до конца строки

console.log(newStr.slice(3)); // lo NikDoe!
console.log(newStr.substring(9)); // Doe!

// аналогичный третий метод с особенностью, что вторым параметром мы задаем количество символов которое хотим вырезать

console.log(newStr.substr(7, 2)); // ik

// основные методы для чисел
// округление до целого

const num = 3.14;
const newNum = 3.86;
console.log(Math.round(num));
console.log(Math.round(newNum)); // важно знать что округление идет до ближайшего целого, поэтому в данном случае мы получим 4

//так же мы можем использовать методы которые предназначены совершенно для другого, но применять мы их можем даже к строкам

const someString = '42.48px';
console.log(parseInt(someString)); //42, при этом теперь это число
console.log(typeof parseInt(someString)); // number, при этом мы снова получаем копию, исходное значение по прежнему останется строкой
console.log(typeof someString); // string