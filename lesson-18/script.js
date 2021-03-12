// DOM - Document Object Model - обьектная модель документа

//старый способ обращения к элементу в DOM
const box = document.getElementById('box');
console.log(box);//в консоли вс кода работать не будет, потому что document есть только у браузера

//обращение по тегу
const btns = document.getElementsByTagName('button');
console.log(btns); //но мы получим не один элемент, а коллецию(псевдомассив)
//чтобы обратится к конкретному элементу, нужно указать его индекс, так как это массив
console.log(btns[1]); //будет выведен только второй элемент с таким тегом
// если даже есть только один элемент такой на странице, всё равно будет образован псевдомассив

//обращение по классу
//также будет получена коллекция
const circle = document.getElementsByClassName('circle');
console.log(circle);

//СОВРЕМЕННЫЕ СПОСОБЫ

//обращение по селектору
//вернется псевдо массив, но к которому можно применить один единственный метод foreach
//если старые способы возвращали коллекцию HTMLElements, то querySelectorAll NODELIst
const allElem = document.querySelectorAll('*'); //вернет всё что есть на странице
console.log(allElem);

const allDiv = document.querySelectorAll('div'); //вернет все дивы на странице
console.log(allDiv);

const allClasses = document.querySelectorAll('.circle'); //вернет все указанные классы, важно чтоб стояла точка впереди
console.log(allClasses);

allClasses.forEach( item => console.log(item)); //выведет списком все наши классы который мы ранее нашли через querySelectorAll

const allTags = document.querySelectorAll('button');
console.log(allTags);

const oneElement = document.querySelector('div'); //вернет первый указанный элемент, в данном случае мы получим самый первый див на странице
console.log(oneElement);