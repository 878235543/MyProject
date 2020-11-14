/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/1.ButtionClick.js":
/*!*******************************!*\
  !*** ./src/1.ButtionClick.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _2_Random_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2.Random.js */ \"./src/2.Random.js\");\n/* harmony import */ var _3_createBullet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3.createBullet.js */ \"./src/3.createBullet.js\");\n/* harmony import */ var _4_Move_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./4.Move.js */ \"./src/4.Move.js\");\n/* harmony import */ var _5_Clear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./5.Clear.js */ \"./src/5.Clear.js\");\n/* harmony import */ var _6_createEmpty1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./6.createEmpty1.js */ \"./src/6.createEmpty1.js\");\n/* harmony import */ var _7_ImpactChecking_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./7.ImpactChecking.js */ \"./src/7.ImpactChecking.js\");\n/* harmony import */ var _8_equipment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./8.equipment.js */ \"./src/8.equipment.js\");\n/* harmony import */ var _9_EmptyAll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./9.EmptyAll.js */ \"./src/9.EmptyAll.js\");\n\r\n// 子弹\r\n\r\n// 移动类\r\n\r\n// 清除类\r\n\r\n// 敌机小敌机类\r\n\r\n// 碰撞检测类\r\n\r\n// 捡装备类\r\n\r\n// 敌机全部爆炸类\r\n\r\nlet main = document.getElementsByClassName('main')[0];\r\nlet aircraft = document.getElementsByClassName('aircraft')[0];\r\nlet mask = main.getElementsByClassName('mask')[0];\r\nlet button = mask.getElementsByTagName('button')[0];\r\nlet timer = null;\r\nlet number; //生成子弹的数量\r\nlet Score = document.getElementsByClassName('score')[0];\r\nlet equipmentType; //装备的类型\r\nlet Maskkell = document.querySelector('.Mask');\r\n\r\n// 点击开始\r\nfunction ButtionClick() {\r\n    let mainPosition = 0;\r\n    let scoreNum = 0;\r\n    button.onclick = function () {\r\n        mask.style.display = 'none';\r\n        let num = 0;\r\n        timer = setInterval(() => {\r\n            mainPosition++;\r\n            main.style.backgroundPositionY = mainPosition + 'px';\r\n            mainPosition = mainPosition > 1000 ? 0 : mainPosition;\r\n\r\n            // *********************\r\n            // 清除移动超出边界的物体\r\n            let ClearKell = document.getElementsByClassName('ClearKell');\r\n            let clear = new _5_Clear_js__WEBPACK_IMPORTED_MODULE_3__.default(ClearKell, main);\r\n            clear.clearDom();\r\n            // *********************\r\n\r\n            let aircraftImpact = document.getElementsByClassName('aircraft');// 获取自己的飞机\r\n            let equipments = document.getElementsByClassName('equipment'); //获取装备\r\n\r\n            // 捡装备\r\n            let EquipmentSS = new _8_equipment_js__WEBPACK_IMPORTED_MODULE_6__.default(aircraftImpact, equipments);\r\n            equipmentType = EquipmentSS.Impact();\r\n            if (equipmentType === 'red') {\r\n                // 敌机全部爆炸\r\n                let emptyAll = document.getElementsByClassName('empty');\r\n                let emptyAllClear = new _9_EmptyAll_js__WEBPACK_IMPORTED_MODULE_7__.default(emptyAll);\r\n                emptyAllClear.clear();\r\n            }\r\n\r\n            // 自己飞机和敌机的碰撞检测\r\n            let emptyImpact = document.getElementsByClassName('empty');\r\n            let aircraftImg = './image/本方飞机爆炸.gif'\r\n            let emptyCheck = new _7_ImpactChecking_js__WEBPACK_IMPORTED_MODULE_5__.default(aircraftImpact, emptyImpact, 'empty', aircraftImg,);\r\n            if (aircraft.getAttribute('BreakOut') > 0) {\r\n                // 无敌时间\r\n                let BreakOutNum = parseInt(aircraft.getAttribute('BreakOut'));\r\n                BreakOutNum--;\r\n                if (BreakOutNum < 300) {\r\n                    aircraft.style.opacity = BreakOutNum % 15 === 0 ? 1 : 0.2;\r\n                }\r\n                aircraft.setAttribute('BreakOut', BreakOutNum);\r\n                // console.log(aircraft.getAttribute('BreakOut'));\r\n            } else {\r\n                let iSstoop = emptyCheck.Impact();\r\n                if (iSstoop.isStoop) { //如果返回true则进入判断\r\n                    Maskkell.style.display = 'block';\r\n                    Maskkell.innerHTML = 'game over:得分' + scoreNum;\r\n                    main.onmousemove = null;\r\n                    clearInterval(timer);\r\n                }\r\n            }\r\n\r\n            // 生成子弹 main 位置 X Y 个数\r\n            let X = aircraft.offsetLeft + aircraft.clientWidth / 2;\r\n            let Y = aircraft.offsetTop;\r\n            if (aircraft.getAttribute('BreakOut1') > 0) {\r\n                // 子弹增加时间\r\n                let BreakOutNum = parseInt(aircraft.getAttribute('BreakOut1'));\r\n                BreakOutNum--;\r\n                aircraft.setAttribute('BreakOut1', BreakOutNum);\r\n                number = 5;\r\n                // console.log(aircraft.getAttribute('BreakOut1'));\r\n            } else {\r\n                number = 2;\r\n            }\r\n\r\n            let bullet = new _3_createBullet_js__WEBPACK_IMPORTED_MODULE_1__.default(main, X, Y, number);\r\n            bullet.create();\r\n\r\n            // 子弹移动\r\n            // 子弹 速度 \r\n            let bulletiiS = document.getElementsByClassName('bulletii');\r\n            let bulletSpeed = -18;\r\n            let bulletBoundary = 30; //子弹的清除边界\r\n            let bullMove = new _4_Move_js__WEBPACK_IMPORTED_MODULE_2__.default(bulletiiS, bulletSpeed, bulletBoundary, 'up');\r\n            bullMove.allMove();\r\n\r\n            // 生成敌机小飞机\r\n            // main 位置(X,y)\r\n            let empty1X = (0,_2_Random_js__WEBPACK_IMPORTED_MODULE_0__.default)(0, 317);\r\n            let empty1Y = -24;\r\n            let empty1Src = './image/enemy1_fly_1.png';\r\n            let empty1Class = 'empty1';\r\n            let empty1 = new _6_createEmpty1_js__WEBPACK_IMPORTED_MODULE_4__.default(main, empty1X, empty1Y, num, empty1Src, empty1Class);\r\n            empty1.create();\r\n            // 敌机1移动\r\n            let empty1S = document.getElementsByClassName('empty1');\r\n            let empty1Speed = 2;\r\n            let empty1Boundary = 600;\r\n            let empty1Move = new _4_Move_js__WEBPACK_IMPORTED_MODULE_2__.default(empty1S, empty1Speed, empty1Boundary, 'down');\r\n            empty1Move.allMove();\r\n            // 小飞机和子弹碰撞检测 传次数,子弹,小敌机\r\n            let empty1KellImg = './image/xiaobaozha.gif';\r\n            let empty1Check = new _7_ImpactChecking_js__WEBPACK_IMPORTED_MODULE_5__.default(bulletiiS, empty1S, 'empty1', empty1KellImg);\r\n            let empty1Score = empty1Check.Impact();\r\n            scoreNum += empty1Score.score;\r\n\r\n            // 生成中飞机\r\n            let empty2X = (0,_2_Random_js__WEBPACK_IMPORTED_MODULE_0__.default)(0, 305);\r\n            let empty2Y = -64;\r\n            let empty2Src = './image/enemy3_fly_1.png';\r\n            let empty2Class = 'empty2';\r\n            let empty2 = new _6_createEmpty1_js__WEBPACK_IMPORTED_MODULE_4__.default(main, empty2X, empty2Y, num, empty2Src, empty2Class);\r\n            empty2.create();\r\n            // 中飞机移动\r\n            let empty2S = document.getElementsByClassName('empty2');\r\n            let empty2Speed = 1.5;\r\n            let empty2Boundary = 600;\r\n            let empty2Move = new _4_Move_js__WEBPACK_IMPORTED_MODULE_2__.default(empty2S, empty2Speed, empty2Boundary, 'down');\r\n            empty2Move.allMove();\r\n            // 中飞机碰撞检测\r\n            let empty2KellImg = './image/zhongbaozha.gif';\r\n            let empty2Check = new _7_ImpactChecking_js__WEBPACK_IMPORTED_MODULE_5__.default(bulletiiS, empty2S, 'empty2', empty2KellImg);\r\n            let empty2Score = empty2Check.Impact();\r\n            scoreNum += empty2Score.score;\r\n\r\n            // 生成大飞机 \r\n            let empty3X = (0,_2_Random_js__WEBPACK_IMPORTED_MODULE_0__.default)(0, 240);\r\n            let empty3Y = -164;\r\n            let empty3Src = './image/enemy2_fly_1.png';\r\n            let empty3Class = 'empty3';\r\n            let empty3 = new _6_createEmpty1_js__WEBPACK_IMPORTED_MODULE_4__.default(main, empty3X, empty3Y, num, empty3Src, empty3Class);\r\n            empty3.create();\r\n            // 大飞机移动\r\n            let empty3S = document.getElementsByClassName('empty3');\r\n            let empty3Speed = 1;\r\n            let empty3Boundary = 600;\r\n            let empty3Move = new _4_Move_js__WEBPACK_IMPORTED_MODULE_2__.default(empty3S, empty3Speed, empty3Boundary, 'down');\r\n            empty3Move.allMove();\r\n            // 大飞机碰撞检测\r\n            let empty3KellImg = './image/dabaozha.gif';\r\n            let empty3Check = new _7_ImpactChecking_js__WEBPACK_IMPORTED_MODULE_5__.default(bulletiiS, empty3S, 'empty3', empty3KellImg);\r\n            let empty3Score = empty3Check.Impact();\r\n            scoreNum += empty3Score.score;\r\n            // 显示分数\r\n            ShowScore(scoreNum);\r\n            num++;\r\n            num = num > 2000 ? 0 : num;\r\n        }, 1000 / 60)\r\n    }\r\n}\r\n// 显示分数\r\nfunction ShowScore(score) {\r\n    Score.innerHTML = score;\r\n}\r\n// 飞机移动\r\nfunction aircraftMove() {\r\n    aircraft.onmousedown = function () {\r\n        main.onmousemove = function (e) {\r\n            let aircraftX = e.pageX;\r\n            let aircraftY = e.pageY;\r\n            if (e.pageX <= main.offsetLeft + 33) {\r\n                aircraftX = main.offsetLeft + 33;\r\n            }\r\n            if (e.pageX > main.offsetLeft + main.clientWidth - 33) {\r\n                aircraftX = main.offsetLeft + main.clientWidth - 33;\r\n            }\r\n            if (e.pageY < main.offsetTop + 40) {\r\n                aircraftY = main.offsetTop + 40;\r\n            }\r\n            if (e.pageY > main.offsetTop + main.clientHeight - 40) {\r\n                aircraftY = main.offsetTop + main.clientHeight - 40;\r\n            }\r\n            aircraft.style.left = aircraftX - main.offsetLeft - 33 + 'px';\r\n            aircraft.style.top = aircraftY - main.offsetTop - 40 + 'px';\r\n        }\r\n    }\r\n    aircraft.onmouseup = function () {\r\n        main.onmousemove = null;\r\n    }\r\n}\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    ButtionClick();\r\n    aircraftMove();\r\n}\r\n\n\n//# sourceURL=webpack://ss/./src/1.ButtionClick.js?");

/***/ }),

/***/ "./src/2.Random.js":
/*!*************************!*\
  !*** ./src/2.Random.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 产生随机数\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(min,max){\r\n    return Math.floor(Math.random()*(max-min)+min);\r\n}\n\n//# sourceURL=webpack://ss/./src/2.Random.js?");

/***/ }),

/***/ "./src/3.createBullet.js":
/*!*******************************!*\
  !*** ./src/3.createBullet.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 子弹类\r\nclass Bullet{\r\n    constructor(main,X,Y,number){\r\n        this.main = main;\r\n        this.X = X;\r\n        this.Y = Y;\r\n        this.number = number;\r\n    }\r\n    create(){\r\n        for(let i=0;i<this.number;i++){\r\n            let BulletI = document.createElement('i');\r\n            BulletI.style.left = this.X +i*10 - this.number*4 + 'px';\r\n            BulletI.style.top = this.Y + 'px';\r\n            BulletI.className = 'bulletii';\r\n            this.main.appendChild(BulletI);\r\n            // console.log(i);\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);\n\n//# sourceURL=webpack://ss/./src/3.createBullet.js?");

/***/ }),

/***/ "./src/4.Move.js":
/*!***********************!*\
  !*** ./src/4.Move.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 移动类\r\nclass Move {\r\n    constructor(Dom, speed, boundary, direction) {\r\n        this.Dom = Dom;\r\n        this.speed = speed;\r\n        this.boundary = boundary;\r\n        this.direction = direction;\r\n    }\r\n    allMove() {\r\n        for (let i = 0; i < this.Dom.length; i++) {\r\n            this.Dom[i].style.top = this.Dom[i].offsetTop + this.speed + 'px';\r\n            if(this.direction === 'up'){\r\n                if (this.Dom[i].offsetTop < this.boundary) {\r\n                    this.Dom[i].classList.add('ClearKell');\r\n                }\r\n            }else{\r\n                if (this.Dom[i].offsetTop > this.boundary) {\r\n                    this.Dom[i].classList.add('ClearKell');\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Move);\n\n//# sourceURL=webpack://ss/./src/4.Move.js?");

/***/ }),

/***/ "./src/5.Clear.js":
/*!************************!*\
  !*** ./src/5.Clear.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _2_Random_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2.Random.js */ \"./src/2.Random.js\");\n\r\n// 清除类\r\nclass Clear {\r\n    constructor(Dom, main) {\r\n        this.Dom = Dom;\r\n        this.main = main;\r\n        this.timer = null;\r\n    }\r\n    clearDom() {\r\n        for (let i = 0; i < this.Dom.length; i++) {\r\n            if (this.Dom[i].classList.contains('empty3')) {\r\n                let span = document.createElement('span');\r\n                span.className = 'equipment';\r\n                span.style.left = this.Dom[i].offsetLeft + this.Dom[i].clientWidth/2 + 'px';\r\n                span.style.top = this.Dom[i].offsetTop + this.Dom[i].clientHeight/2 + 'px';\r\n\r\n                let num = (0,_2_Random_js__WEBPACK_IMPORTED_MODULE_0__.default)(0,3);\r\n                if (num === 0) {  //red\r\n                    span.classList.add('red');\r\n                    span.style.backgroundColor = 'red';\r\n                } else if (num === 1) {\r\n                    span.classList.add('blue');\r\n                    span.style.backgroundColor = 'blue';\r\n                } else if (num === 2) {\r\n                    span.classList.add('green');\r\n                    span.style.backgroundColor = 'green';\r\n                }\r\n                this.main.appendChild(span);\r\n            }\r\n            this.Dom[i].remove();\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clear);\n\n//# sourceURL=webpack://ss/./src/5.Clear.js?");

/***/ }),

/***/ "./src/6.createEmpty1.js":
/*!*******************************!*\
  !*** ./src/6.createEmpty1.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 创建敌机类\r\nclass Empty1 {\r\n    constructor(main, X, Y, num, src, emptyClass) {\r\n        this.main = main;\r\n        this.X = X;\r\n        this.Y = Y;\r\n        this.num = num;\r\n        this.src = src;\r\n        this.emptyClass = emptyClass;\r\n    }\r\n    create() {\r\n        // console.log(this.num);\r\n        if (this.emptyClass === 'empty1') {\r\n            if (this.num % 50 === 0) {\r\n                let empty1 = document.createElement('img');\r\n                empty1.src = this.src;\r\n                empty1.setAttribute('draggable', true);\r\n                empty1.setAttribute('kellNums',0);\r\n               \r\n                empty1.className = `${this.emptyClass} empty`;\r\n                empty1.style.left = this.X + 'px';\r\n                empty1.style.top = this.Y + 'px';\r\n                this.main.appendChild(empty1);\r\n\r\n            }\r\n        }\r\n        if (this.emptyClass === 'empty2') {\r\n            if (this.num % 300 === 0) {\r\n                let empty2 = document.createElement('img');\r\n                empty2.src = this.src;\r\n                empty2.setAttribute('draggable', true);\r\n                empty2.setAttribute('kellNums',0)\r\n                empty2.className = `${this.emptyClass} empty`;\r\n                empty2.style.left = this.X + 'px';\r\n                empty2.style.top = this.Y + 'px';\r\n                this.main.appendChild(empty2);\r\n            }\r\n        }\r\n        if (this.emptyClass === 'empty3') {\r\n            if (this.num % 800 === 0) {\r\n                let empty3 = document.createElement('img');\r\n                empty3.src = this.src;\r\n                empty3.setAttribute('draggable', true);\r\n                empty3.setAttribute('kellNums',0)\r\n                empty3.className = `${this.emptyClass} empty`;\r\n                empty3.style.left = this.X + 'px';\r\n                empty3.style.top = this.Y + 'px';\r\n                this.main.appendChild(empty3);\r\n            }\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Empty1);\n\n//# sourceURL=webpack://ss/./src/6.createEmpty1.js?");

/***/ }),

/***/ "./src/7.ImpactChecking.js":
/*!*********************************!*\
  !*** ./src/7.ImpactChecking.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 碰撞检测\r\nclass Checking {\r\n    constructor(Dom1, Dom2, type, img) {\r\n        this.Dom1 = Dom1;\r\n        this.Dom2 = Dom2;\r\n        // this.num = num;\r\n        this.type = type;\r\n        this.img = img;\r\n        // console.log(this.Dom1.length);\r\n        // console.log(this.Dom2.length);\r\n    }\r\n    Impact() {\r\n        let score = 0;\r\n        let isStoop = false;\r\n        for (let i = 0; i < this.Dom1.length; i++) {\r\n            for (let j = 0; j < this.Dom2.length; j++) {\r\n                //  console.log('执行了');\r\n                let left = this.Dom1[i].offsetLeft + this.Dom1[i].clientWidth > this.Dom2[j].offsetLeft;\r\n                let right = this.Dom1[i].offsetLeft < this.Dom2[j].offsetLeft + this.Dom2[j].clientWidth;\r\n                let top = this.Dom1[i].offsetTop + this.Dom1[i].clientHeight > this.Dom2[j].offsetTop;\r\n                let bottom = this.Dom1[i].offsetTop < this.Dom2[j].offsetTop + this.Dom2[j].clientHeight;\r\n                if (left && right && top && bottom) {\r\n                    let num = this.Dom2[j].getAttribute('kellNums');\r\n                    num++;\r\n                    this.Dom2[j].setAttribute('kellNums', num);\r\n\r\n                    if (this.type === 'empty1') {\r\n                        this.Dom1[i].classList.add('ClearKell');\r\n                        if (this.Dom2[j].getAttribute('kellNums') > 50) {\r\n                            this.Dom2[j].src = this.img;\r\n                            this.Dom2[j].classList.add('ClearKell');\r\n                            score = 1;\r\n                        }\r\n                    }\r\n                    if (this.type === 'empty2') {\r\n                        this.Dom1[i].classList.add('ClearKell');\r\n                        if (this.Dom2[j].getAttribute('kellNums') > 150) {\r\n                            this.Dom2[j].src = this.img;\r\n                            this.Dom2[j].classList.add('ClearKell');\r\n                            score = 2;\r\n                        }\r\n                    }\r\n                    if (this.type === 'empty3') {\r\n                        this.Dom1[i].classList.add('ClearKell');\r\n                        if (this.Dom2[j].getAttribute('kellNums') > 350) {\r\n                            this.Dom2[j].src = this.img;\r\n                            this.Dom2[j].classList.add('ClearKell');\r\n                            score = 5;\r\n                        }\r\n                    }\r\n                    if (this.type === 'empty') {\r\n                        this.Dom1[i].style.backgroundImage = `url(${this.img})`;\r\n                        isStoop = true;\r\n                        if (this.Dom2[j].classList.contains('empty1')) {\r\n                            this.Dom2[j].src = './image/xiaobaozha.gif';\r\n                        } else if (this.Dom2[j].classList.contains('empty2')) {\r\n                            this.Dom2[j].src = './image/zhongbaozha.gif';\r\n                        } else if (this.Dom2[j].classList.contains('empty3')) {\r\n                            this.Dom2[j].src = './image/dabaozha.gif';\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return {\r\n            score: score,\r\n            isStoop: isStoop\r\n        };\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checking);\n\n//# sourceURL=webpack://ss/./src/7.ImpactChecking.js?");

/***/ }),

/***/ "./src/8.equipment.js":
/*!****************************!*\
  !*** ./src/8.equipment.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// 捡装备\r\nclass equipment {\r\n    constructor(Dom1, Dom2) {\r\n        this.Dom1 = Dom1;\r\n        this.Dom2 = Dom2;\r\n    }\r\n    Impact() {\r\n        let equipmentType = '';\r\n        for (let i = 0; i < this.Dom1.length; i++) {\r\n            for (let j = 0; j < this.Dom2.length; j++) {\r\n                let left = this.Dom1[i].offsetLeft + this.Dom1[i].clientWidth > this.Dom2[j].offsetLeft;\r\n                let right = this.Dom1[i].offsetLeft < this.Dom2[j].offsetLeft + this.Dom2[j].clientWidth;\r\n                let top = this.Dom1[i].offsetTop + this.Dom1[i].clientHeight > this.Dom2[j].offsetTop;\r\n                let bottom = this.Dom1[i].offsetTop < this.Dom2[j].offsetTop + this.Dom2[j].clientHeight;\r\n                if (left && right && top && bottom) {\r\n                    this.Dom2[j].classList.add('ClearKell');\r\n                    if (this.Dom2[j].classList.contains('red')) {\r\n                        equipmentType = 'red';\r\n                    } else if (this.Dom2[j].classList.contains('blue')) {\r\n                        equipmentType = 'blue';\r\n                        this.Dom1[i].setAttribute('BreakOut',1000);\r\n                    } else if (this.Dom2[j].classList.contains('green')) {\r\n                        equipmentType = 'green';\r\n                        this.Dom1[i].setAttribute('BreakOut1',1000);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return equipmentType\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equipment);\n\n//# sourceURL=webpack://ss/./src/8.equipment.js?");

/***/ }),

/***/ "./src/9.EmptyAll.js":
/*!***************************!*\
  !*** ./src/9.EmptyAll.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass EmptyAll {\r\n    constructor(dom) {\r\n        this.dom = dom;\r\n    }\r\n    clear() {\r\n        for (let i = 0; i < this.dom.length; i++) {\r\n            this.dom[i].classList.add('ClearKell');\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyAll);\n\n//# sourceURL=webpack://ss/./src/9.EmptyAll.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_ButtionClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.ButtionClick.js */ \"./src/1.ButtionClick.js\");\n\r\n(0,_1_ButtionClick_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://ss/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;