//Навигация по DOM элементам

console.log(document.head);//обращаемся к тегу head в нашем HTML и получаем все его содержимое

console.log(document.documentElement); //содержимое тега html

console.log(document.body.childNodes);//все узлы внутри родителя body
console.log(document.body.firstChild);//первый узел внутри родителя body
console.log(document.body.firstElementChild);//перевый элемент внутри родителя боду, по аналогии есть lastElementChild
console.log(document.body.lastChild);//последний узел внутри родителя body

//навигация по любому элементу на странице

//каждый элемент это узел, но не каждый узел это элемент

console.log(document.querySelector('#current').parentNode);//узнаем узел-родитель который оборачивает наш селектор
console.log(document.querySelector('#current').parentElement);//узнаем узел-элемент который оборачивает наш селектор

//data атрибуты - это специальные атрибуты начинающиеся с data- , в котороые можно передавать информацию(данные) которые будут доступны в JS
console.log(document.querySelector('[data-current="3"]').previousSibling); //покажет узел который идет перед данным элементом, nextSibling - следующий узел по аналогии
console.log(document.querySelector('[data-current="3"]').previousElementSibling);//покажет ЭЛЕМЕНТ который идет перед нашим элементом, nextElementSibling - по аналогии

//в некоторых моментах цикл foreach не работает со списком узлов(NodeList), напомню что списки узлов нам возвращают методы querySelector и querySelectorAll, в таких случаях, когда невозможно использовать foreach лучще использовать for of

for (const node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

// document.body.childNodes.forEach(i => {
//     if (i.nodeName == '#text') {
        
//     } else {
//         console.log(i);
//     }
// });
