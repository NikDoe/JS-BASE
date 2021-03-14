//События и их обработчики

//обработчик это функция которая срабатывает как только событие произошло

//второй способ это использовать свойство DOM дерева для событий
//но такой формат не используется, потому что удалить событие используя такой синтаксис в дальнейшем уже нельзя
const btn = document.querySelector('button');
const _btn = document.querySelector('#btn-overlay');
const overlay = document.querySelector('.overlay');

// btn.onclick = () => {
//     console.log('на меня нажали :)');
// };

btn.addEventListener('click', () => {
    console.log('слушатель работает');
});

//таким способом мы можем создавать по нескольку слушателей, и все они будут отрабатыват в той очередности в которой мы их прописали
btn.addEventListener('mouseenter', () => {
    console.log('упс где-то еще создали слушатель для меня');
});

//так происходит по тому что события в js выполняются в порядке очереди

//кто тому же мы можем получать дополнительные данные о том элементе с которым мы взаимодействуем, просто указав первый параметр для нашей колбэк функции, куда и будет передаваться вся информация

btn.addEventListener('dblclick', event => {
    console.log(event.target); //будет показан информация об элементе на который нажали
    //это дает нам широкие возможности для действий
    //к примеру мы можем удалить элемент таким образом
    event.target.remove();
});

//если нужно передать какие-то свои данные, то мы должны передавать их начиная со второго аргумента, первым всегда должен быть event(обьект события)

//также бывают ситуации когда нам нужно удалять обработчики событий
//но для этого нужно чтобы добавление и удаление было одной функцией

const deleteFunc = () => {
    console.log('Я функция удаления');
};

btn.addEventListener('click', deleteFunc);
btn.removeEventListener('click', deleteFunc);

//можно это использовать эффективно совместно с условиями
//создадим переменную которая будет своего рода счётчиком
let i = 0;
//создадим фукнцию которая будет что-то делать
const loadingFunc = e => {
    console.log('Loading');
    //как только наша функция сработал по событию, то увеличим счётчик, и удалим слушатель события
    i++;
    if (i == 1) {
        btn.removeEventListener('click', loadingFunc); //функция больше одного раза не сработает
    }
};

btn.addEventListener('click', loadingFunc);

//всплытие событий
const eventSurfacing = e => {
    console.log(e.target);
    console.log(e.type);
    console.log('Всплытие события');
};

// _btn.addEventListener('click', eventSurfacing);
// overlay.addEventListener('click', eventSurfacing);
//так происходит когда один элемент вложен в другой и для них существует один и тот же слушатель событий, сначало срабатывает фукнция вложенного, а потом по иерархии в верх уже срабатывает функия элемента который оборачивает

//для того чтобы различить их существент e.currentTarget

const _eventSurfacing = e => {
    console.log(e.currentTarget);
    console.log(e.type);
    console.log('Всплытие события');
};

_btn.addEventListener('click', _eventSurfacing);
overlay.addEventListener('click', _eventSurfacing);
//и теперь видно как это событие как бы всплывает на верх

//мы можем также отменять станадартное поведение браузера
const link = addEventListener('click', e => {
    e.preventDefault(); //отменит по клику переход по ссылке
    console.log('Переход отменен');
});

//важно помнить что когда мы используем querySelectorAll, addEventListener, работать не будет, потому что это всё таже коллекция, для которой существует только forEach, с поможью которого мы должны перебрать все элементы коллекции, и внутри колбэк фукнции добавить addEventListener, к каждому элементу

//также у addEventListener третьим параметром могут передаваться опции через обьект, к примеру выполнить событие только один раз

const thirdArg = () => console.log('я отвечаю за опции');

overlay.addEventListener('mouseenter', thirdArg, {once: true}); // once: true - как аналог removeEventListener