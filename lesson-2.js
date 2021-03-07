// типы данных

let number = 4.6;

console.log(4 / 0); // infinity
console.log('str' * 9); //NaN

//строка

const person = 'NikDoe';
const newPerson = `NikDoe`; //равно верхнему с определенными особеностями

//логический тип

const bool = true; //либо true либо false

//null и undefined

//console.log(something); - null

let und;
console.log(und); //undefined - это обьект есть но внутри он пустой

//Обьекты - ключевая единица JS, в которой может храниться можество типов данных

const obj = {
    name: 'NikDoe',
    age: 27,
    isMarried: false
};

//данные которые лежат внутри обьекта слева это свойства обьекта, после двоеточия это параметры, обращаться к свойствам можно след образом

console.log(obj.name);

//аналогичный способ

// console.log(obj['name']);

//частным случаем обьектов ялвяются массивы

let arr = ['plum.jpg', 'orange.png', 1, {}, []];

//обращение к элементам массива

console.log(arr[2]);// нумерация начинается с нуля, поэтому выведет 1
