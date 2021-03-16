// динамическая типизация
// в строку

console.log(typeof (String(5)));
console.log(typeof (String(null)));

console.log(typeof (5 + ''));

const num = 5;
console.log(typeof ('строка' + num));

const fontSize = 26 + 'px';

//в число

console.log(typeof (Number('5')));
console.log(typeof (+'5'));
console.log(typeof (parseInt('15px', 10))); //10 это система исчисления
let answer = +prompt('hello', '');

//в логический тип

//следующие типы данных дают значение false - 0, '', null, undefined, NaN;
//все остальные типы дают true

let switcher = null;
if (switcher) {
    console.log('Загрузка...'); //не отработает потому что null это false
}

switcher = 1;
if (switcher) {
    console.log('Загрузка...'); //отработает потому что 1 это true
}

console.log(typeof(Boolean({})));
console.log(typeof(!![]));