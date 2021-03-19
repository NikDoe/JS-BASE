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
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map