/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n// import validator  from \"./modules/validator\";\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 january 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n// validator()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100)\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n  formId: 'form1',\n  someElem: [\n    {\n      type: 'block',\n      id: 'total'\n    }\n  ]\n})\n\n//npm run watch\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block')\r\n  const calcType = document.querySelector('.calc-type')\r\n  const calcSquare = document.querySelector('.calc-square')\r\n  const calcCount = document.querySelector('.calc-count')\r\n  const calcDay = document.querySelector('.calc-day')\r\n  const total = document.getElementById('total')\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n    const calcSquareValue = calcSquare.value\r\n\r\n    let totalValue = 0\r\n    let calcCountValue = 1\r\n    let calcDayValue = 1\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n    } else {\r\n      totalValue = 0\r\n    }\r\n\r\n    total.textContent = totalValue\r\n    \r\n  }\r\n\r\n  calcBlock.addEventListener('input', (e) => {\r\n    if (e.target === calcType || e.target === calcSquare ||\r\n        e.target === calcCount || e.target === calcDay) {\r\n          countCalc()\r\n        }\r\n  })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n  //функция закрытия и открытия миню\r\n  const handleMenu = () => {\r\n    //1 вариант \r\n    // if(!menu.style.transform){\r\n    //   menu.style.transform = `translateX(0)`\r\n    // }else{\r\n    //   menu.style.transform = ``\r\n    // }\r\n\r\n    //2 вариант\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n  menuBtn.addEventListener('click', handleMenu)\r\n\r\n  closeBtn.addEventListener('click', handleMenu)\r\n\r\n  menuItems.forEach(menuItem =>  menuItem.addEventListener('click', handleMenu))\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  const closeBtn = modal.querySelector('.popup-close')\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modal.style.display = 'block'\r\n    })\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none'\r\n  })\r\n\r\n  //при нажатии мимо модального окна - оно закрывается\r\n  modal.addEventListener('click', (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = []}) => {\r\n  const form = document.getElementById(formId)\r\n  const statusBlock = document.createElement('div')\r\n  const loadText = 'Загрузка...'\r\n  const errorText = 'Ошибка...'\r\n  const successText = 'Спасибо! Мы с вами свяжемся'\r\n\r\n  const validate = (list) => {\r\n    let success = true\r\n\r\n    // list.forEach(input => {\r\n    //   if(!input.classList.contains('success')) {\r\n    //     success = false\r\n    //   }\r\n    // })\r\n\r\n    return success\r\n  }\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts',{\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n    }).then(res => res.json())\r\n  }\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input')\r\n    const formData = new FormData(form)\r\n    const formBody = {}\r\n\r\n    statusBlock.textContent = loadText\r\n    form.append(statusBlock)\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val\r\n    })\r\n\r\n    someElem.forEach(elem => {\r\n      const element = document.getElementById(elem.id)\r\n\r\n      if (elem.type === 'block') {\r\n        formBody[elem.id] = element.textContent\r\n      }else if (elem.type === 'input') {\r\n        formBody[elem.id] = element.value\r\n      }\r\n    })\r\n      \r\n    console.log('submit');\r\n\r\n    if (validate(formElements)) {\r\n        sendData(formBody)\r\n          .then(data => {\r\n            statusBlock.textContent = successText\r\n            \r\n            formElements.forEach(input => {\r\n              input.value = ''\r\n            })\r\n    })\r\n    .catch(error => {\r\n      statusBlock.textContent = errorText\r\n    })\r\n    } else {\r\n      alert ('Данные не валидные!')\r\n    } \r\n  }\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Вертай форму в зад')\r\n    }\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault()\r\n  \r\n      submitForm()\r\n    })\r\n  }catch(error) {\r\n    console.log(error.message);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst slider = () => {\n  const sliderBlock = document.querySelector('.portfolio-content')\n  const slides = document.querySelectorAll('.portfolio-item')\n  const dots = document.querySelectorAll('.dot') //dot-active\n  const timeInterval = 2000\n  \n  let currentSlide = 0  //это первый слайд\n  let interval          //переменная интервал\n\n\n  //сокращение функций\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass)\n  }\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass)\n  }\n\n\n  //функция автомата (замкнутый круг)\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\n    prevSlide(dots, currentSlide, 'dot-active')\n    currentSlide++\n    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду\n    if (currentSlide >= slides.length) {\n        currentSlide = 0\n    }\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\n    nextSlide(dots, currentSlide, 'dot-active')\n  }\n  //эта функция будет запускать в интервале функцию автомата\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer)\n  }\n  const stopSlide = () => {\n    clearInterval(interval)\n  }\n\n\n  //переключение слайдов по стрелкам и кружочкам\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault() //отключение заглушки\n\n    if (!e.target.matches('.dot, .portfolio-btn')) {\n      return\n    }\n\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\n    prevSlide(dots, currentSlide, 'dot-active')\n    //условие\n    if(e.target.matches('#arrow-right')) {\n      currentSlide++\n    } else if (e.target.matches('#arrow-left')) {\n      currentSlide--\n    } else if (e.target.classList.contains('dot')) {\n      dots.forEach((dot, index) => {\n        if(e.target === dot) {\n          currentSlide = index\n        }\n      })\n    }\n    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду(только вперед)\n    if (currentSlide >= slides.length) {\n      currentSlide = 0\n    }\n    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду(только назад)\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\n    nextSlide(dots, currentSlide, 'dot-active')\n  })\n\n  sliderBlock.addEventListener('mouseenter', (e) => {\n    console.log(e.target);\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      stopSlide()\n    }\n  }, true)\n  sliderBlock.addEventListener('mouseleave', (e) => {\n    console.log(e.target);\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      autoSlide(timeInterval)\n    }\n  }, true)\n\n  startSlide(timeInterval)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const tabs = () => {\r\n   const tabPanel = document.querySelector(\".service-header\");\r\n   const tabs = document.querySelectorAll(\".service-header-tab\");\r\n   const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n   tabPanel.addEventListener(\"click\", (e) => {\r\n     if (e.target.closest(\".service-header-tab\")) {\r\n       const tabBtn = e.target.closest(\".service-header-tab\");\r\n       tabs.forEach((tab, index) => {\r\n         if (tab === tabBtn) {\r\n           tab.classList.add(\"active\");\r\n           tabContent[index].classList.remove(\"d-none\");\r\n         } else {\r\n           tab.classList.remove(\"active\");\r\n           tabContent[index].classList.add(\"d-none\");  \r\n         }\r\n       });\r\n     }\r\n   });\r\n };\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  \r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n  const getTimeRemaining = () => {\r\n    \r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n    let hours = Math.floor(timeRemaining / 60 / 60)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n  \r\n    return { timeRemaining,hours, minutes, seconds }\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining()\r\n    timerHours.textContent = getTime.hours\r\n    timerMinutes.textContent = getTime.minutes\r\n    timerSeconds.textContent = getTime.seconds\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000)\r\n    }\r\n  }\r\n  updateClock()\r\n  // getTimeRemaining('28 january 2022')\r\n  // setInterval(countTimer, 1000, '28 january 2022')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;