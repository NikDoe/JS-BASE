// DOM - Document Object Model - обьектная модель документа

//старый способ обращения к элементу в DOM
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      allElem = document.querySelectorAll('.circle'),
      oneElement = document.querySelector('.box'),
      wrapper = document.querySelector('.wrapper');

box.style.width = 100 + 'px';
box.style.height = 50 + 'px';
box.style.background = '#222';
box.style.color = 'white';

//если при обращении к псевдомассиву мы не будем указывать конкретный элемент из него, то инлайн стили через js не сработают

// btns.style.background = 'red'; //error, ничего не произойдет
btns[1].style.background = 'red'; //изменится второй элемент из псевдомассива

//чтобы указывать несколько свойств в одной строке

const someVal = 100;

//для множества свойст
btns[0].style.cssText = `background: #222; color: white; width: ${someVal}px`;

//одно и тоже свойство для псевдомассивов, для которых нельзя использовать foreach
for (let i = 0; i < btns.length; i++) {
    btns[i].style.width = 200 + 'px';
}

//а для элементов через querySelectorAll уже можно использовать foreach
allElem.forEach(e => e.style.color = 'yellow'); 

//создать новый элемент
const div  = document.createElement('div'); //сейчас он создался в js
//чтобы он появился на странице мы должны указать где он должен появиться
//но для начала зададим ему класс
div.classList.add('create-div');
//теперь можем выводить его на странице
//к примеру в начале body
// document.body.prepend(div);
//или вконце
// document.body.append(div);
//или внутри какого-то элемента
// wrapper.prepend(div);
//или перед определенным элементом из списка элементов
circle[2].before(div);

//удаление элемента
btns[4].remove();

//заменить один элемент другим
//первым указываем какой мы заменяем, вторым - на какой
btns[2].replaceWith(box);

div.innerHTML = 'NikDoe';
//можно передавать и целые структуры
// div.innerHTML = '<h1></h1>'

//когда мы четко знаем что от пользователя должен прийти только текст, то нужно использовать textContent
div.textContent = 'NikDoe'; //кроме текста добавить ничего нельзя

//добавление какой либо отдеьной части HTML
div.insertAdjacentHTML('afterbegin', '<h1>afterbegin</h1>'); // вставляет в начало нашего элемента, по аналогии с prepend
div.insertAdjacentHTML('afterend', '<h1>afterend</h1>');// вставляет в после элемента к которому применяли insertAdjacentHTML
div.insertAdjacentHTML('beforebegin', '<h1>beforebegin</h1>');//перед элементом в которому применили insertAdjacentHTML
div.insertAdjacentHTML('beforeend', '<h1>beforeend</h1>'); //вставляет вконец нашего элемента, по аналогии с append

//метод querySelectorAll можно применять для поиска не по всему документу а только внутри какого-то блока

wrapper.querySelectorAll('circle');


//СТАРЫЕ МЕТОДЫ


// wrapper.appendChild(div);
// wrapper.insertBefore(div, circle[0]);
// wrapper.removeChild(circle[1]); //удаление
// wrapper.replaceChild(box, btns[2]);
