/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  }); //TIMER

  const deadLine = '2021-03-29';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
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
  } //MODAL


  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function modalClose() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', modalClose);
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modalClose();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      modalClose();
    }
  });

  function showModalByScroll() {
    const d = document.documentElement;

    if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); // MENU CARDS

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
  }, 'menu__item', 'big').render();
  new MenuCard({
    src: "img/tabs/elite.jpg",
    alt: "elite",
    title: 'Меню "Премиум"',
    descr: 'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    price: 14,
    parent: '.menu .container'
  }, 'menu__item').render();
  new MenuCard({
    src: "img/tabs/post.jpg",
    alt: "post",
    title: 'Меню "Постное"',
    descr: 'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    price: 11,
    parent: '.menu .container'
  }, 'menu__item').render(); // FEEDBACK FORM
  //1 определяем переменые

  const forms = document.querySelectorAll('form'); //1.1 cоздали файлик server.php
  //2.1.8 делаем временную болванку сообщений для пользователя, в случае различных статусов запроса

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо!',
    failure: 'Что-то пошло не так...'
  }; //подвязываем каждой форме на странице нашу функцию postData

  forms.forEach(form => postData(form)); //2 создаём функцию которая будет отправлять данные на сервер

  function postData(form) {
    //2.1 добавляем обработчик события отправки формы
    form.addEventListener('submit', e => {
      //2.1.1 отменяем стандартное поведение браузера, чтобы при нажатии на кнопку отправки формы, то наша страница не перезагружалась
      e.preventDefault(); //3 генеруем новый элемент в который будем помещать наше сообщение статусов запросов

      const statusMessage = document.createElement('div'); //3.1 добавим ему класс

      statusMessage.classList.add('status'); //3.2 сгенерируем сообщение после нажатия кнопки отправки, если у пользователя медленный интернет, то он будет видеть это сообщение

      statusMessage.textContent = message.loading; //3.3 отправляем наше сообщение

      form.append(statusMessage); //2.1.2 формируем в нашей переменной новый запрос

      const request = new XMLHttpRequest(); //2.1.3 инициализируем наш запрос, и определяем основные параметры запроса 

      request.open('POST', 'server.php'); //2.1.4 заголовок запроса с именем name и значением value. из документации конструктора FormData нам необходимо value multipart/form-data...однако когда мы используем связку XHR и FormData, такой заголовок создастся автоматически
      // request.setRequestHeader('Content-type', 'multipart/form-data');
      //если мы точно знаем что данные нужно отправлят в формате json, тогда заголовок нам нужен

      request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //2.1.5 обьявляем переменную в которую конструктор FormData будет собирать данные с нашей form
      //важно!!! чтобы конструктор понимал какие данные ему собирать, у всех импутов должен быть обьявлен атрибут name

      const formData = new FormData(form); //6 теперь чтобы данные собранные с формы мы могли преобразовать в json формат, вначале мы должны превратить их просто в обычный обьект, чтобы потом применить stringify

      const obj = {}; //6.1 перебираем все данные с FormData  и преоразуем из в пары "ключ: свойство"

      formData.forEach((value, key) => obj[key] = value); //6.2 теперь когда наш данные это обычный обьект, то мы можем использовать stringify

      const json = JSON.stringify(obj); //2.1.6 устанавливаем соединение и отсылает запрос к серверу

      request.send(json); //так как это POST запрос, то у него уже есть body, который является нашим json который до этого был FormData
      //2.1.7 добавляем нашему запросу обработчик 'load'

      request.addEventListener('load', () => {
        //далее формируем условие что если статус нашего запроса 200, т.е. всё хорошо
        if (request.status === 200) {
          console.log(request.response); //4 поместим сообщение о том если всё впорядке с запросом

          statusMessage.textContent = message.success; //4.1 после отправки данных с формы очищаем форму

          form.reset(); //4.2 удаляем блок с сообщение со страницы

          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          //5 в случае ошибки выводим сообщение
          statusMessage.textContent = message.failure;
        }
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map