window.addEventListener('DOMContentLoaded', () => {

    //TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    let hideTabContent = function () {
        tabsContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade');
        });

        tabs.forEach(i => {
            i.classList.remove('tabheader__item_active');
        });
    };

    let showTabContent = function (i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', e => {
        const target = e.target;
        if (target && target.matches('div.tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //TIMER

    const deadLine = '2021-03-29';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),

            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadLine);

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    //MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
        //5 удаляем переменную modalCloseBtn, так как для элементов созданых динамически(сообщение по отправки данных на сервер), она не сработает
        // modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function modalClose() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    //5.1 так как переменную мы удалили, мы должны удалить и эту часть, и воспользовться делегированием
    // modalCloseBtn.addEventListener('click', modalClose);

    modal.addEventListener('click', e => {
        //5.2 воспользуемя делегированием и добавим доп условия
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            modalClose();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalClose();
        }
    });

    const modalTimerId = setTimeout(openModal, 30000);

    function showModalByScroll() {
        const d = document.documentElement;
        if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // MENU CARDS

    class MenuCard {
        constructor(options, ...classes) {

            this.src = options.src;
            this.alt = options.alt;
            this.title = options.title;
            this.descr = options.descr;
            this.price = options.price;
            this.rateOfCurrency = 2.6;
            this.classes = classes;
            this.parent = document.querySelector(options.parent);

            this.convertToBYN();
        }

        convertToBYN() {
            this.price = (this.price * this.rateOfCurrency).toFixed(2);
        }

        render() {

            const el = document.createElement('div');

            if (this.classes.length === 0) {
                this.defaultClass = 'menu__item';
                el.classList.add(this.defaultClass);
            } else {
                this.classes.forEach(className => el.classList.add(className));
            }

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

            this.parent.append(el);
        }
    }

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

    // FEEDBACK FORM

    const forms = document.querySelectorAll('form');

    const message = {
        //10 вместо слово загрузка подставим картинку
        loading: 'img/form/spinner.svg',
        success: 'Спасибо!',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(form => postData(form));

    function postData(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            //10.1 теперь так как мы передаем картинку если loading, то вместо дива теперь нужно создавать img
            const statusMessage = document.createElement('img');
            //10.2 вместо добавления класса мы теперь должны добавлять атрибут src
            statusMessage.src = message.loading;
            //10.3 вместо textContent мы теперь должны добавить стили
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            const formData = new FormData(form);
            const obj = {};
            formData.forEach((value, key) => obj[key] = value);
            const json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);

                    //8 вместо statusMessage.textContent  можем использовать нашу функцию, в которую будем предавать данные из нашего обьекта
                    showThanksModal(message.success);
                    // statusMessage.textContent = message.success;
                    form.reset();
                    
                    //9 убираем таймаут от 
                    statusMessage.remove();
                } else {
                    //8.1 тоже самое делое для сообщения об ошибке
                    showThanksModal(message.failure);
                    // statusMessage.textContent = message.failure;
                }
            });
        });
    }

    //1 создадим функицию которая будет покащывать различные сообщения для пользователя, при отправки данных на сервер
    function showThanksModal(message) {
        //2 первым делом обозначим переменную
        const prevModalDialog = document.querySelector('.modal__dialog');

        //3 скрываем модальное окно с формой, но не удаляем, чтобы пользователь в дальнейшем мог им пользоваться опять
        prevModalDialog.classList.add('hide');
        //3.1 вызовем функцию открывающую модальное окно
        openModal();

        //4 создадим новый элемент на месте спрятанного
        const thanksModal = document.createElement('div');
        //4.1 добавим ему точно такой же класс как и скрытого окна
        thanksModal.classList.add('modal__dialog');
        //4.2 в новосозданном диве создадим верстку
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        //6 так мы с новым модальным окном больше работать не будем, можем создать его без всяких переменных
        document.querySelector('.modal').append(thanksModal);

        //7 возвращаем старую модалку с формой, и удаляем модалку с сообщением
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            //7.1 чтобы больше не мешать пользователю, закроем окно вызвав функцию modalClose
            modalClose();
        }, 2000);
    }

});