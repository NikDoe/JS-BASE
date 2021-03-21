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
  //задаем переменные, для наших табов, для их контента, и для родителя который оборачивает табы
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'); //создаем функцию которая будет скрывать все наши табы

  let hideTabContent = function () {
    //перебираем контент табов, и для каждого задаём класс, что он не виден
    tabsContent.forEach(i => {
      i.classList.add('hide');
      i.classList.remove('show', 'fade'); //также удаляем клас того что элемент виден, и класс анимацию
    }); //также для каждого из табов у которого есть класс active, убираем его

    tabs.forEach(i => {
      i.classList.remove('tabheader__item_active');
    });
  }; //далее создаем функциию которая будет показывать контент наших табов


  let showTabContent = function (i = 0) {
    //по умолчанию задаем первый таб, это фишка es6, мы можем задавать дефолтные значения аргументов
    tabsContent[i].classList.add('show', 'fade'); //показываем контент нашего таба, делая его блочным, и добавляем анимацию

    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active'); //и для этого таба задаем класс active
  }; //не забываем вызвать наши фукнции, обязательно в правильном порядке, первой должна вызывать функция которая скрывает


  hideTabContent();
  showTabContent(); //теперь будем использовать делегирование

  tabsParent.addEventListener('click', e => {
    //для того чтобы по многу раз не писать e.target, создадим переменную target
    const target = e.target; //далее пропишем условие на совпадение с элементом на который мы кликнули

    if (target && target.matches('div.tabheader__item')) {
      //теперь мы должны перебрать табы
      tabs.forEach((item, i) => {
        // item это каждый наш там, i - его индекс
        //теперь мы должна прописать условие, в котором проверим что если тот элемент на который мы кликнули, будет совпадать с тем элементом в цикле который мы перебираем, мы выозовем две наши функции, и в showTabContent передадим индекс нащего таба
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); //TIMER
  //1 первым делом обьявляем переменную, в которой будет храниться дата и время нашего окончания таймера(дэд лайна), та дата когда таймер прекратит свой отсчёт, пока что мы зададим вручную, но в реальном проекте это значение может прилетать с бэкенда

  const deadLine = '2021-03-29'; //2 реализуем функцию которая будет определять разницу между нашим deadLine и реальным временем

  function getTimeRemaining(endtime) {
    //3 обьявим техническую переменную, в которой и будет определяться разница между аргументом endtime, который может прилетать строкой из админ панели и текущем временем
    //3.1 чтобы мы имели возможно от строки отнять текущее время мы должно применить метод Date.parse, который разобьёт строковое количество представленной даты, и вернет количество миллисекунд
    const t = Date.parse(endtime) - Date.parse(new Date()),
          //4 когда мы получили разницу...теперь нам надо превратить её в количество дней, часов, минут, секунд...для этого обьявим соотственствующие переменные, в котороых и поместим эти значения
    //4.1 количество дней, Math.floor используем для округления до целого
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
          //4.2 количество часов, оператор % используем для того чтобы получить количество часов, если оно будет превышать 24...к примеру если нам вернется 50 то 50 % 24 = 2, это 2 часа нам и вернуться
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          //4.3 количество минут
    minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60); //5 переменные которые мы только что создали - мы можем использовать только внутри функции, чтобы была возмность их использовать за пределами функции, воспользуемся оператором return, однако мы не можем в операторе return вывести несколько переменных, поэтому вернем обьект с этими переменными

    return {
      'total': t,
      days,
      hours,
      minutes,
      seconds
    }; //свойство total, со значение нашего t мы будем возвращать для того, чтобы если наш таймер закончился то чтоб небыло отрицательного значения
    //до появления es6 синтаксиса возвращать обьект приходилось в форме
    // return {
    //     't' : t,
    //     'days' : days,
    //     'hours' : hours,
    //     'minutes' : minutes,
    //     'seconds' : seconds
    // };
    //однако с синтаксисом es6 когда свойство и значения совпадают, мы можем записать одним параметром
  } //6 теперь напишем функцию которая будет устанавливать таймер на страницу, в качестве аргументов будем использовать selector - тот селектор который оборачивает (дни, часы, минуты и секунды) и второмы аргументом передадим наш дедлайн(endtime)


  function setClock(selector, endtime) {
    //6.1 создадим переменные, которые будут обращаться к нашим элементам на странице
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          //6.3 создадим переменню переменную, которая будет обновлять наш таймер каждую секунду
    timeInterval = setInterval(updateClock, 1000); //6.6 вызовем функцию updateClock, чтоб она не ждала 1 секнуду пока запустится setInterval

    updateClock(); //6.2 создадим функцию которая будет обновлять наш таймер

    function updateClock() {
      //6.2.1 первым делом передадим в неё нашу фукнцию getTimeRemaining с аргументом endtime(который мы будем получать из функции setClock при вызове setClock)
      const t = getTimeRemaining(endtime); //6.2.2 теперь используя innerHTML/textContent положим в наши переменные которые обращаются к элементам на странице, данные которые мы вернули из функции getTimeRemaining
      //6.2.3 функция getTimeRemaining лежим в переменной t поэтому мы можем так сделать

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds); //6.4 теперь чтобы останавливать наш таймер, который обновляется в интервалом в 1 секунду напишем условие

      if (t.total <= 0) {
        clearInterval(timeInterval); //остановим наш setInterval в котором лежит функция updateClock
      }
    }
  } //6.5 вызовем функцию setClock


  setClock('.timer', deadLine); //6.7 напишем фукнцию помощник которая будет добавлять 0 если числа наших дней, часов, минут, секунд будут однозначными (меньше 10)

  function getZero(num) {
    if (num >= 0 && num < 10) {
      //обязательно пропием условие что больше либо равно нулю
      return `0${num}`;
    } else {
      return num; //и если число двузначное то ничего не надо делать, просто вернем num
    }
  } //MODAL
  //1 добавим дата атрибуты data-modal для всех наших кнопок тригеров в index.html, также добавим дата атрибут data-close, для того элемента который будет закрывать наше модальное окно
  //2 определим переменные


  const modalTrigger = document.querySelectorAll('[data-modal]'),
        //указаываем обязательно All чтобы была возможность работать со всеми модальными окнами которые имеют такой атрибут
  modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'); //3 добавим обработчик событий который будет открывать наше модальное окно
  //3.1 переберем с помощью все наши кнопки тригеры, так же создадим функцию которая будет открывать модальное окно

  function openModal() {
    //3.2 будем добавлять и удалять соотвествуеющие классы для наших модальных окон
    modal.classList.add('show');
    modal.classList.remove('hide'); //3.3 чтобы сайт при этом не скролился добавим нашему bode следующие инлайн стили

    document.body.style.overflow = 'hidden'; //8.1 чтобы наше окно не поялялось по setTimeout если пользователь уже сам его открыл

    clearInterval(modalTimerId);
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  }); //4 напишем функцию которая будет отвечать за закрытие нашего модального окна

  function modalClose() {
    modal.classList.add('hide');
    modal.classList.remove('show'); //4.1 чтобы можно было скролить сайт после закрытие модального окна

    document.body.style.overflow = '';
  } //5 применим нашу функцию закрытия к соответсвующей кнопке


  modalCloseBtn.addEventListener('click', modalClose); //6 добавим возможность закрывать модальное окно по клику вне самого окна

  modal.addEventListener('click', e => {
    //6.1 добавим условие что если место куда мы нажали это селектор с классом modal
    if (e.target === modal) {
      modalClose(); //6.2 тогда будем вызывать фукнцию закрытия
    }
  }); //7 добавим возможность закрыть модальное окно по кнопке escape

  document.addEventListener('keydown', e => {
    //7.1 зададим условие что если кнопка которую мы нажали на клавиатуре это escape и у нашего модального окна нет класса show, тогда будем вызывать функцию закрытия
    //7.2 второе условие нужно для того чтобы escape не нажимался при закрытом модальном окне
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      modalClose();
    }
  }); //8 добавим функционал чтобы модальное окно открывалось через 10 30 секунд после загрузки страницы

  const modalTimerId = setTimeout(openModal, 30000); //9 реализуем функционал когда пользователь долистал сайт до конца, и нужно показать ему модальное окно
  //9.1 создадим функцию которая будет отслеживать когда прокрученая часть страницы + видимая часть страницы будут равны высоте всей страницы которую можно проскролить

  function showModalByScroll() {
    const d = document.documentElement;

    if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
      openModal(); //9.1.1чтобы это событие произошло только один раз, после открытия тут же удалим обработчик событий

      window.removeEventListener('scroll', showModalByScroll);
    }
  } //9.2 добавляем обработчик события нашему window


  window.addEventListener('scroll', showModalByScroll);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map