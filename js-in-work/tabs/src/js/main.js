window.addEventListener('DOMContentLoaded', () => {

    //TABS

    //задаем переменные, для наших табов, для их контента, и для родителя который оборачивает табы
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    //создаем функцию которая будет скрывать все наши табы
    let hideTabContent = function () {
        //перебираем контент табов, и для каждого задаём класс, что он не виден
        tabsContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade'); //также удаляем клас того что элемент виден, и класс анимацию
        });

        //также для каждого из табов у которого есть класс active, убираем его
        tabs.forEach(i => {
            i.classList.remove('tabheader__item_active');
        });
    };

    //далее создаем функциию которая будет показывать контент наших табов
    let showTabContent = function (i = 0) { //по умолчанию задаем первый таб, это фишка es6, мы можем задавать дефолтные значения аргументов
        tabsContent[i].classList.add('show', 'fade'); //показываем контент нашего таба, делая его блочным, и добавляем анимацию
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); //и для этого таба задаем класс active
    };

    //не забываем вызвать наши фукнции, обязательно в правильном порядке, первой должна вызывать функция которая скрывает
    hideTabContent();
    showTabContent();

    //теперь будем использовать делегирование
    tabsParent.addEventListener('click', e => {
        //для того чтобы по многу раз не писать e.target, создадим переменную target
        const target = e.target;

        //далее пропишем условие на совпадение с элементом на который мы кликнули
        if (target && target.matches('div.tabheader__item')) {
            //теперь мы должны перебрать табы
            tabs.forEach((item, i) => { // item это каждый наш там, i - его индекс
                //теперь мы должна прописать условие, в котором проверим что если тот элемент на который мы кликнули, будет совпадать с тем элементом в цикле который мы перебираем, мы выозовем две наши функции, и в showTabContent передадим индекс нащего таба
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //TIMER

    //1 первым делом обьявляем переменную, в которой будет храниться дата и время нашего окончания таймера(дэд лайна), та дата когда таймер прекратит свой отсчёт, пока что мы зададим вручную, но в реальном проекте это значение может прилетать с бэкенда
    const deadLine = '2021-03-29';

    //2 реализуем функцию которая будет определять разницу между нашим deadLine и реальным временем
    function getTimeRemaining(endtime) {

        //3 обьявим техническую переменную, в которой и будет определяться разница между аргументом endtime, который может прилетать строкой из админ панели и текущем временем
        //3.1 чтобы мы имели возможно от строки отнять текущее время мы должно применить метод Date.parse, который разобьёт строковое количество представленной даты, и вернет количество миллисекунд
        const t = Date.parse(endtime) - Date.parse(new Date()),

            //4 когда мы получили разницу...теперь нам надо превратить её в количество дней, часов, минут, секунд...для этого обьявим соотственствующие переменные, в котороых и поместим эти значения
            //4.1 количество дней, Math.floor используем для округления до целого
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            //4.2 количество часов, оператор % используем для того чтобы получить количество часов, если оно будет превышать 24...к примеру если нам вернется 50 то 50 % 24 = 2, это 2 часа нам и вернуться
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            //4.3 количество минут
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        //5 переменные которые мы только что создали - мы можем использовать только внутри функции, чтобы была возмность их использовать за пределами функции, воспользуемся оператором return, однако мы не можем в операторе return вывести несколько переменных, поэтому вернем обьект с этими переменными
        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
        //свойство total, со значение нашего t мы будем возвращать для того, чтобы если наш таймер закончился то чтоб небыло отрицательного значения
        //до появления es6 синтаксиса возвращать обьект приходилось в форме
        // return {
        //     't' : t,
        //     'days' : days,
        //     'hours' : hours,
        //     'minutes' : minutes,
        //     'seconds' : seconds
        // };
        //однако с синтаксисом es6 когда свойство и значения совпадают, мы можем записать одним параметром
    }

    //6 теперь напишем функцию которая будет устанавливать таймер на страницу, в качестве аргументов будем использовать selector - тот селектор который оборачивает (дни, часы, минуты и секунды) и второмы аргументом передадим наш дедлайн(endtime)
    function setClock(selector, endtime) {
        //6.1 создадим переменные, которые будут обращаться к нашим элементам на странице
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            //6.3 создадим переменню переменную, которая будет обновлять наш таймер каждую секунду
            timeInterval = setInterval(updateClock, 1000);

        //6.6 вызовем функцию updateClock, чтоб она не ждала 1 секнуду пока запустится setInterval
        updateClock();

        //6.2 создадим функцию которая будет обновлять наш таймер
        function updateClock() {
            //6.2.1 первым делом передадим в неё нашу фукнцию getTimeRemaining с аргументом endtime(который мы будем получать из функции setClock при вызове setClock)
            const t = getTimeRemaining(endtime);

            //6.2.2 теперь используя innerHTML/textContent положим в наши переменные которые обращаются к элементам на странице, данные которые мы вернули из функции getTimeRemaining
            //6.2.3 функция getTimeRemaining лежим в переменной t поэтому мы можем так сделать
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            //6.4 теперь чтобы останавливать наш таймер, который обновляется в интервалом в 1 секунду напишем условие
            if (t.total <= 0) {
                clearInterval(timeInterval); //остановим наш setInterval в котором лежит функция updateClock
            }
        }

    }

    //6.5 вызовем функцию setClock
    setClock('.timer', deadLine);

    //6.7 напишем фукнцию помощник которая будет добавлять 0 если числа наших дней, часов, минут, секунд будут однозначными (меньше 10)
    function getZero(num) {
        if (num >= 0 && num < 10) { //обязательно пропием условие что больше либо равно нулю
            return `0${num}`;
        } else {
            return num; //и если число двузначное то ничего не надо делать, просто вернем num
        }
    }

    //MODAL

    //1 добавим дата атрибуты data-modal для всех наших кнопок тригеров в index.html, также добавим дата атрибут data-close, для того элемента который будет закрывать наше модальное окно

    //2 определим переменные
    const modalTrigger = document.querySelectorAll('[data-modal]'), //указаываем обязательно All чтобы была возможность работать со всеми модальными окнами которые имеют такой атрибут
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    //3 добавим обработчик событий который будет открывать наше модальное окно
    //3.1 переберем с помощью все наши кнопки тригеры, так же создадим функцию которая будет открывать модальное окно
    function openModal () {
        //3.2 будем добавлять и удалять соотвествуеющие классы для наших модальных окон
        modal.classList.add('show');
        modal.classList.remove('hide');
        //3.3 чтобы сайт при этом не скролился добавим нашему bode следующие инлайн стили
        document.body.style.overflow = 'hidden';
        //8.1 чтобы наше окно не поялялось по setTimeout если пользователь уже сам его открыл
        // clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //4 напишем функцию которая будет отвечать за закрытие нашего модального окна
    function modalClose () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        //4.1 чтобы можно было скролить сайт после закрытие модального окна
        document.body.style.overflow = '';
    }

    //5 применим нашу функцию закрытия к соответсвующей кнопке
    modalCloseBtn.addEventListener('click', modalClose);

    //6 добавим возможность закрывать модальное окно по клику вне самого окна
    modal.addEventListener('click', e => {
        //6.1 добавим условие что если место куда мы нажали это селектор с классом modal
        if (e.target === modal) {
            modalClose(); //6.2 тогда будем вызывать фукнцию закрытия
        }
    });

    //7 добавим возможность закрыть модальное окно по кнопке escape
    document.addEventListener('keydown', e => {
        //7.1 зададим условие что если кнопка которую мы нажали на клавиатуре это escape и у нашего модального окна нет класса show, тогда будем вызывать функцию закрытия
        //7.2 второе условие нужно для того чтобы escape не нажимался при закрытом модальном окне
        if (e.code === 'Escape' && modal.classList.contains('show')){
            modalClose();
        }
    });

    //8 добавим функционал чтобы модальное окно открывалось через 10 30 секунд после загрузки страницы
    // const modalTimerId = setTimeout(openModal, 30000);

    //9 реализуем функционал когда пользователь долистал сайт до конца, и нужно показать ему модальное окно
    
    //9.1 создадим функцию которая будет отслеживать когда прокрученая часть страницы + видимая часть страницы будут равны высоте всей страницы которую можно проскролить
    function showModalByScroll() {
        const d = document.documentElement;
        if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
            openModal();
            //9.1.1чтобы это событие произошло только один раз, после открытия тут же удалим обработчик событий
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    //9.2 добавляем обработчик события нашему window
    window.addEventListener('scroll', showModalByScroll);

    // MENU CARDS

    //1 создаём класс для наших карточек
    class MenuCard {
        //2 создаём конструктор нашего класса, куда будем помещать наши переменные
        //4.4 предусматривает тот момент, что у нашего элемента будет не один класс а несколько, поэтому воспользуемся рест оператором и добавим в конструктор ...classes
        constructor(options, ...classes) {

            this.src = options.src;
            this.alt = options.alt;
            this.title = options.title;
            this.descr = options.descr;
            this.price = options.price;
            this.rateOfCurrency = 2.6; //курс доллара

            //4.5 обьявляем наши classes
            this.classes = classes;

            //4.2 добавляем родителя в который будем помещать наш новосозданный элемент
            this.parent = document.querySelector(options.parent);

            //3.1 вызовем прямов в конструкторе наш метод конвертации
            this.convertToBYN();
            
        }

        //3 создадим метод конвертации из $ в BYN
        convertToBYN() {
            this.price = (this.price * this.rateOfCurrency).toFixed(2);
        }

        //4 создадим метод который будет рендерить наши элементы на странице
        render() {

            //4.1 сгенерирем новый элемент на странице
            const el = document.createElement('div');

            //4.6 добавим условимя что если не один класс не был добавлен элементу, до подставим ему дефолтный класс
            if(this.classes.length === 0) {
                //4.6.1 и если оно выполняется, то будем просто заносить в наш массив ...classes, дефолтное значени
                this.defaultClass = 'menu__item';
                el.classList.add(this.defaultClass);
            } else { //4.6.2 а если есть хотя бы один класс то перебором добавим его в наш элемент
                this.classes.forEach(className => el.classList.add(className));
            }

            //5 добавим структуру нашего элемента
            el.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;

            //4.3 добавляем наш созданный элемент в родителя
            this.parent.append(el);
        }
    }

    //6 создадим экземпляры наших классов
    new MenuCard({
        src: "img/tabs/vegy.jpg",
        alt: "vegy",
        title: 'Меню "Фитнес"',
        descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        price: 9,
        parent: '.menu .container'
    },
        'menu__item',
        'big'
    ).render();

    new MenuCard({
        src: "img/tabs/elite.jpg",
        alt: "elite",
        title: 'Меню "Премиум"',
        descr: 'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        price: 14,
        parent: '.menu .container'
    },
        'menu__item'
    ).render();

    new MenuCard({
        src: "img/tabs/post.jpg",
        alt: "post",
        title: 'Меню "Постное"',
        descr: 'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        price: 11,
        parent: '.menu .container'
    },
        'menu__item'
    ).render();
    
});