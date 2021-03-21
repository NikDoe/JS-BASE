'use strict';

//получаем со страницы элемент
const box = document.querySelector('.box');

//если нам надо получить в скрипте ширину и высоту элемента, без учета margin и border
const width = box.clientWidth; //405
const height = box.clientHeight; //355
console.log(width, height); //мы получим значения (значение из css + padding - ширина скрола(обычно это 15px))

//если у элемента будет задано свойство box-sizing: border-box, то pading уже будет включаться в ширину элементу, следовательно значение уменьшиться на величину pading (385 и 335)

//если же нам надо получить ширину и высоту с учетом margin
const _width = box.offsetWidth;
const _height = box.offsetHeight;
console.log(_width, _height); //эти значения уже будут равны тем значениям что заданы в css

//чтобы получить высоту или ширину с учётом всей полосы прокрутки(скрола)
const $height = box.scrollHeight;
console.log($height);

//допустим у нас есть задача показать всё содержимое элемента по нажатию на кнопку

//обьявим переменую для кнопки
const btn = document.querySelector('button');

//создадим обработчик событий для нашей кнопки
btn.addEventListener('click', () => {
    //теперь обрщаемся к нашему элементу и задаем ему новый инлайн стиль
    box.style.height = box.scrollHeight + 'px';
});

//также мы можем узнать расстояние которое уже промотали скрола
btn.addEventListener('click', () => {
    const _scrollTop = box.scrollTop;
    console.log(`скрол опустился на ${_scrollTop}px`);
});

//clientWidth, clientHeight, offsetWidth, offsetHeight, scrollHeight, мы не можем изменять, мы их можем только получать...scrollTop мы можем изменять тоже

//чтоб получить координаты
console.log(box.getBoundingClientRect());
//координата top расчитывается от верхней границы окна браузера и до верхней границы элемента
//bottom от верхней границы окна до нижней границы элемента
//right от левой границы окна до правой границы элемента
//left от левой границы окна до левой границы элемента

//если нам нужно обратится к элементу чтобы узнать отобразился ли он на страницу(display), мы можем обротится к computed стилям
const style = window.getComputedStyle(box);
console.log(style.display); //computed мы также не можем изменять мы можем только прочитать их

//c помощью данного метода мы можем получить стили  псевдоэлемента, с самим же псевдо элементом мы не можем работать с помощью
//чтобы их получить нужно указать псевдо элементм вторым параметром, если конечно это псевдоэлемент вообще есть
// const style = window.getComputedStyle(box, псевдоэлемент);

//важно не путать computed стили и inline стили..инлайн стили более приоритетны, и поэтому они всегда будут перебивать идентичные computed стили

//чтобы получить clientWidth непосредственно у самой страницы
console.log(document.documentElement.clientWidth);
// console.log(document.clientWidth); //так нельзя, мы получиим undefined
console.log(document.documentElement.scrollTop);

// window.scrollBy(0, 400); //первый параметр это координата Х, второй Y...данный метод будет опускать скрол на заданное количество относительно текущего положения

// window.scrollTo(0, 400); // это метод будет перемещать скрол относительно самого верха страницы