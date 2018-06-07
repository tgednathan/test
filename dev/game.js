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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = __webpack_require__(2);
var Line_1 = __webpack_require__(3);
var imageButton_1 = __webpack_require__(10);
window.addEventListener('load', function () {
    //canvas and context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var canvasWidth = .8;
    //objects
    var char;
    var line = new Line_1.default(canvas, context);
    //ui
    var button;
    var button2;
    constructor();
    function constructor() {
        char = new character_1.default(['2', '1']);
        button = new imageButton_1.default(50, 50, '3', function () {
            char.Source = ['3'];
        });
        button2 = new imageButton_1.default(175, 50, '2', function () {
            char.Source = ['1', '2'];
        });
        resize();
    }
    setInterval(render, 1);
    function updateLine(x) {
        line.position.x = x;
        line.position.y = 0;
        var b = 25 - Math.abs((line.position.x - canvas.width / 2)) / 4;
        if (b < 0)
            b = 0;
        canvas.style = 'filter:brightness(' + (b + 100) + '%)';
    }
    function render() {
        //clears the image
        context.clearRect(0, 0, canvas.width, canvas.height);
        //filter effect
        context.fillStyle = '#b0e0e6';
        context.fillRect(0, 0, line.position.x, canvas.height);
        context.fill();
        context.fillStyle = '#eed5d2';
        context.fillRect(line.position.x, 0, canvas.width - line.position.x, canvas.height);
        context.fill();
        //objects
        char.DrawImage(canvas, context, line.position.x);
        line.DrawImage(canvas, context);
        button2.Render(context);
        button.Render(context);
    }
    function resize() {
        canvas.width = window.innerWidth * canvasWidth;
        canvas.height = window.innerHeight * canvasWidth;
        char.resize(canvas);
    }
    //events
    window.addEventListener('resize', function () {
        resize();
    });
    window.addEventListener('click', function (e) {
        var pos = {
            x: e.pageX - canvas.getBoundingClientRect().left,
            y: e.pageY - canvas.getBoundingClientRect().top
        };
        button.ClickCheck(pos.x, pos.y);
        button2.ClickCheck(pos.x, pos.y);
    });
    window.addEventListener('mousemove', function (e) {
        var pos = {
            x: e.pageX - canvas.getBoundingClientRect().left,
            y: e.pageY - canvas.getBoundingClientRect().top
        };
        updateLine(pos.x);
    });
    window.addEventListener('touchmove', function (e) {
        var touch = e.touches[0];
        var pos = {
            x: touch.clientX - canvas.getBoundingClientRect().left,
            y: touch.clientY - canvas.getBoundingClientRect().top
        };
        updateLine(pos.x);
    });
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(9);
var character = /** @class */ (function () {
    function character(arrayOfFiles) {
        this.position = new Vector_1.default();
        this.size = { w: 0, h: 0 };
        this.size2 = { w: 0, h: 0 };
        this.imageObj = new Image();
        this.imageObj2 = new Image();
        this.Source = arrayOfFiles;
    }
    character.prototype.DrawImage = function (canvas, context, mouseX) {
        if (mouseX === void 0) { mouseX = canvas.width / 2; }
        var clipPrecentage;
        if (this.oneFile) {
            clipPrecentage = (mouseX - (this.position.x - this.size.w / 2)) / this.size.w * 2;
        }
        else {
            clipPrecentage = (mouseX - (this.position.x - this.size.w / 2)) / this.size.w;
        }
        //console.log(clipPrecentage);
        if (this.oneFile) {
            context.drawImage(this.imageObj, -this.imageObj.width / 4, 0, this.imageObj.width / 2 * Math.min(1.5, clipPrecentage), this.imageObj.height, this.position.x - this.size.w / 2, this.position.y, this.size.w / 2 * Math.min(1.5, clipPrecentage), this.size.h);
            context.drawImage(this.imageObj2, this.imageObj2.width / 2 + this.imageObj2.width / 2 * Math.max(0, clipPrecentage - 0.5), 0, this.imageObj2.width / 2 * (1 - Math.max(0, clipPrecentage - 0.5)), this.imageObj2.height, this.position.x - this.size2.w / 2 * (1 - Math.max(0, clipPrecentage - 0.5)) + this.size2.w / 4, this.position.y, this.size2.w / 2 * (1 - Math.max(0, clipPrecentage - 0.5)), this.size2.h);
        }
        else {
            context.drawImage(this.imageObj, 0, 0, this.imageObj.width * clipPrecentage, this.imageObj.height, this.position.x - this.size.w / 2, this.position.y, this.size.w * clipPrecentage, this.size.h);
            context.drawImage(this.imageObj2, this.imageObj2.width * clipPrecentage, 0, this.imageObj2.width * (1 - clipPrecentage), this.imageObj2.height, this.position.x - this.size2.w * (1 - clipPrecentage) + this.size2.w / 2, this.position.y, this.size2.w * (1 - clipPrecentage), this.size2.h);
        }
    };
    Object.defineProperty(character.prototype, "Source", {
        get: function () {
            return this.source;
        },
        set: function (value) {
            this.source = value;
            this.oneFile = this.source.length === 1;
            this.imageObj.src = 'assets/' + this.source[0] + '.png';
            if (this.oneFile) {
                this.imageObj2.src = 'assets/' + this.source[0] + '.png';
            }
            else {
                this.imageObj2.src = 'assets/' + this.source[1] + '.png';
            }
            if (this.canvas) {
                this.resize(this.canvas);
            }
        },
        enumerable: true,
        configurable: true
    });
    character.prototype.resize = function (canvas) {
        this.canvas = canvas;
        var scale = canvas.height / this.imageObj.height;
        this.size.h = this.imageObj.height * scale;
        this.size.w = this.imageObj.width * scale;
        scale = canvas.height / this.imageObj2.height;
        this.size2.h = this.imageObj2.height * scale;
        this.size2.w = this.imageObj2.width * scale;
        this.position.x = canvas.width / 2;
    };
    return character;
}());
exports.default = character;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(9);
var Line = /** @class */ (function () {
    function Line(canvas, context) {
        this.position = new Vector_1.default();
        this.imageObj = new Image();
        this.imageObj.src = 'assets/light.png';
    }
    Line.prototype.DrawImage = function (canvas, context) {
        var scale = canvas.height / this.imageObj.height;
        context.drawImage(this.imageObj, this.position.x - this.imageObj.width * scale / 2, this.position.y, this.imageObj.width * scale, this.imageObj.height * scale);
    };
    return Line;
}());
exports.default = Line;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character = /** @class */ (function () {
    function character(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x || 0;
        this.y = y || x || 0;
    }
    return character;
}());
exports.default = character;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(9);
var ImageButton = /** @class */ (function () {
    function ImageButton(x, y, src, callback, maxWidth) {
        if (maxWidth === void 0) { maxWidth = 100; }
        this.position = new Vector_1.default(x, y);
        this.image = new Image();
        this.image.src = 'assets/' + src + '.png';
        this.size = {
            w: Math.min(this.image.width, maxWidth),
            h: Math.min(this.image.width, maxWidth)
        };
        this.callback = callback;
    }
    ImageButton.prototype.ClickCheck = function (x, y) {
        if (this.HoverOverButton(x, y)) {
            this.callback();
        }
    };
    ImageButton.prototype.HoverOverButton = function (x, y) {
        return x > this.position.x && x < this.position.x + this.size.w && y > this.position.y && y < this.position.y + this.size.h;
    };
    ImageButton.prototype.Render = function (context) {
        context.fillStyle = "#ffffff";
        context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.strokeRect(this.position.x, this.position.y, this.size.w, this.size.h);
        context.drawImage(this.image, this.position.x, this.position.y, this.size.w, this.size.h);
    };
    ImageButton.prototype.resize = function (canvas) {
        var scale = canvas.height / this.image.height;
        this.size.h = this.image.height * scale;
        this.size.w = this.image.width * scale;
    };
    return ImageButton;
}());
exports.default = ImageButton;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Y3MzViYjRhNWU5NWJjZTdhMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9MaW5lLnRzIiwid2VicGFjazovLy8uL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvaW1hZ2VCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEseUNBQW9DO0FBQ3BDLG9DQUEwQjtBQUMxQiw0Q0FBMkM7QUFFM0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM1QixvQkFBb0I7SUFDcEIsSUFBSSxNQUFNLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxJQUFJLE9BQU8sR0FBNkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxJQUFJLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFFN0IsU0FBUztJQUNULElBQUksSUFBZSxDQUFDO0lBQ3BCLElBQUksSUFBSSxHQUFTLElBQUksY0FBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUzQyxJQUFJO0lBQ0osSUFBSSxNQUFtQixDQUFDO0lBQ3hCLElBQUksT0FBb0IsQ0FBQztJQUV6QixXQUFXLEVBQUUsQ0FBQztJQUNkO1FBRUksSUFBSSxHQUFHLElBQUksbUJBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpDLE1BQU0sR0FBRyxJQUFJLHFCQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLElBQUkscUJBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV2QixvQkFBb0IsQ0FBUztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RSxFQUFFLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUNEO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxlQUFlO1FBQ2YsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNEO1FBQ0ksTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUMvQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdELFFBQVE7SUFDUixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1FBQzlCLE1BQU0sRUFBRSxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBTTtRQUM1QyxJQUFJLEdBQUcsR0FBRztZQUNOLENBQUMsRUFBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUk7WUFDakQsQ0FBQyxFQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRztTQUNuRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFTLENBQU07UUFDaEQsSUFBSSxHQUFHLEdBQUc7WUFDTixDQUFDLEVBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJO1lBQ2pELENBQUMsRUFBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7U0FDbkQsQ0FBQztRQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVMsQ0FBTTtRQUNqRCxJQUFJLEtBQUssR0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksR0FBRyxHQUFHO1lBQ04sQ0FBQyxFQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSTtZQUN2RCxDQUFDLEVBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHO1NBQ3pELENBQUM7UUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNqR0gsc0NBQXNDO0FBRXRDO0lBa0JJLG1CQUFZLFlBQXNCO1FBZDNCLGFBQVEsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQWdCbkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQy9CLENBQUM7SUFFTSw2QkFBUyxHQUFoQixVQUFpQixNQUFXLEVBQUUsT0FBWSxFQUFFLE1BQWlDO1FBQWpDLGtDQUFpQixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDekUsSUFBSSxjQUFzQixDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsY0FBYyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osY0FBYyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ0QsOEJBQThCO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUMzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDeEIsQ0FBQyxFQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDZCxDQUFDO1lBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxHQUFHLENBQUMsRUFDdkYsQ0FBQyxFQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBSSxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2YsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDM0IsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxjQUFjLEVBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQWMsRUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2QsQ0FBQztZQUVGLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxFQUNyQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUksQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDZixDQUFDO1FBQ04sQ0FBQztJQUVMLENBQUM7SUFFRCxzQkFBVyw2QkFBTTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFrQixLQUFlO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDN0QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM3RCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7OztPQWZBO0lBZ0JNLDBCQUFNLEdBQWIsVUFBYyxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUUxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDdkhELHNDQUFzQztBQUV0QztJQUdJLGNBQVksTUFBVyxFQUFFLE9BQVk7UUFEOUIsYUFBUSxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUMzQyxDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsTUFBVyxFQUFFLE9BQVk7UUFDdEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDcEssQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ2RELHlDOzs7Ozs7Ozs7Ozs7O0FDQUE7SUFHSSxtQkFBWSxDQUFVLEVBQUUsQ0FBVTtRQUYzQixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ1JELHNDQUF1QztBQUV2QztJQVdJLHFCQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsR0FBVyxFQUFFLFFBQWtCLEVBQUUsUUFBc0I7UUFBdEIseUNBQXNCO1FBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztZQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7U0FDMUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixDQUFTLEVBQUUsQ0FBUztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQWUsR0FBdEIsVUFBdUIsQ0FBUyxFQUFFLENBQVM7UUFDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoSSxDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLE9BQWlDO1FBQzNDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0UsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUYsQ0FBQztJQUNNLDRCQUFNLEdBQWIsVUFBYyxNQUFXO1FBQ3JCLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUUzQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9hc3NldHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2Y3MzViYjRhNWU5NWJjZTdhMjMiLCJpbXBvcnQgY2hhcmFjdGVyIGZyb20gJy4vY2hhcmFjdGVyJztcclxuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcclxuaW1wb3J0IEltYWdlQnV0dG9uIGZyb20gJy4vVUkvaW1hZ2VCdXR0b24nO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAvL2NhbnZhcyBhbmQgY29udGV4dFxyXG4gICAgbGV0IGNhbnZhczogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgbGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgbGV0IGNhbnZhc1dpZHRoOiBudW1iZXIgPSAuODtcclxuICAgIFxyXG4gICAgLy9vYmplY3RzXHJcbiAgICBsZXQgY2hhcjogY2hhcmFjdGVyO1xyXG4gICAgbGV0IGxpbmU6IExpbmUgPSBuZXcgTGluZShjYW52YXMsIGNvbnRleHQpO1xyXG5cclxuICAgIC8vdWlcclxuICAgIGxldCBidXR0b246IEltYWdlQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvbjI6IEltYWdlQnV0dG9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY2hhciA9IG5ldyBjaGFyYWN0ZXIoWycyJywgJzEnXSk7XHJcblxyXG4gICAgICAgIGJ1dHRvbiA9IG5ldyBJbWFnZUJ1dHRvbig1MCwgNTAsICczJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFyLlNvdXJjZSA9IFsnMyddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1dHRvbjIgPSBuZXcgSW1hZ2VCdXR0b24oMTc1LCA1MCwgJzInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXIuU291cmNlID0gWycxJywgJzInXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0SW50ZXJ2YWwocmVuZGVyLCAxKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMaW5lKHg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxpbmUucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgICAgbGluZS5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICBsZXQgYjogbnVtYmVyID0gMjUgLSBNYXRoLmFicygobGluZS5wb3NpdGlvbi54IC0gY2FudmFzLndpZHRoIC8gMikpIC8gNDtcclxuICAgICAgICBpZihiIDwgMCkgYiA9IDA7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlID0gJ2ZpbHRlcjpicmlnaHRuZXNzKCcgKyAoIGIgKyAxMDApICsgJyUpJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvL2NsZWFycyB0aGUgaW1hZ2VcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vZmlsdGVyIGVmZmVjdFxyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiMGUwZTYnXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBsaW5lLnBvc2l0aW9uLngsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWQ1ZDInXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChsaW5lLnBvc2l0aW9uLngsIDAsIGNhbnZhcy53aWR0aCAtIGxpbmUucG9zaXRpb24ueCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIC8vb2JqZWN0c1xyXG4gICAgICAgIGNoYXIuRHJhd0ltYWdlKGNhbnZhcywgY29udGV4dCwgbGluZS5wb3NpdGlvbi54KTtcclxuICAgICAgICBsaW5lLkRyYXdJbWFnZShjYW52YXMsIGNvbnRleHQpO1xyXG4gICAgICAgIGJ1dHRvbjIuUmVuZGVyKGNvbnRleHQpO1xyXG4gICAgICAgIGJ1dHRvbi5SZW5kZXIoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBjYW52YXNXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogY2FudmFzV2lkdGg7XHJcbiAgICAgICAgY2hhci5yZXNpemUoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vZXZlbnRzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogZS5wYWdlWCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogZS5wYWdlWSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ1dHRvbi5DbGlja0NoZWNrKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgYnV0dG9uMi5DbGlja0NoZWNrKHBvcy54LCBwb3MueSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgeCA6IGUucGFnZVggLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcclxuICAgICAgICAgICAgeSA6IGUucGFnZVkgLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVMaW5lKHBvcy54KTtcclxuICAgIH0pO1xyXG5cclxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoOiBhbnkgPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgeCA6IHRvdWNoLmNsaWVudFggLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcclxuICAgICAgICAgICAgeSA6IHRvdWNoLmNsaWVudFkgLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVMaW5lKHBvcy54KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQudHMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4vc3lzdGVtcy9WZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcmFjdGVyIHtcclxuICAgIHB1YmxpYyBpbWFnZU9iajogYW55O1xyXG4gICAgcHVibGljIGltYWdlT2JqMjogYW55O1xyXG4gICAgcHJpdmF0ZSBvbmVGaWxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCk7XHJcbiAgICBwcml2YXRlIHNvdXJjZTogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGNhbnZhczogYW55O1xyXG5cclxuICAgIHB1YmxpYyBzaXplOiB7XHJcbiAgICAgICAgdzogbnVtYmVyLFxyXG4gICAgICAgIGg6IG51bWJlciBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaXplMjoge1xyXG4gICAgICAgIHc6IG51bWJlcixcclxuICAgICAgICBoOiBudW1iZXIgXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlPZkZpbGVzOiBzdHJpbmdbXSl7XHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHt3OiAwLCBoOiAwfTtcclxuICAgICAgICB0aGlzLnNpemUyID0ge3c6IDAsIGg6IDB9O1xyXG4gXHJcbiAgICAgICAgdGhpcy5pbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoyID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuU291cmNlID0gYXJyYXlPZkZpbGVzO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcHVibGljIERyYXdJbWFnZShjYW52YXM6IGFueSwgY29udGV4dDogYW55LCBtb3VzZVg6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xpcFByZWNlbnRhZ2U6IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICBjbGlwUHJlY2VudGFnZSA9IChtb3VzZVggLSAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyKSkgLyB0aGlzLnNpemUudyAqIDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpcFByZWNlbnRhZ2UgPSAobW91c2VYIC0gKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS53IC8yKSkgLyB0aGlzLnNpemUudztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjbGlwUHJlY2VudGFnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uZUZpbGUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgXHJcbiAgICAgICAgICAgICAgICAtdGhpcy5pbWFnZU9iai53aWR0aCAvIDQsIFxyXG4gICAgICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqLndpZHRoIC8gMiAqIE1hdGgubWluKDEuNSwgY2xpcFByZWNlbnRhZ2UpLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUudyAvIDIgKiBNYXRoLm1pbigxLjUsIGNsaXBQcmVjZW50YWdlKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUuaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VPYmoyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoyLndpZHRoIC8gMiArIHRoaXMuaW1hZ2VPYmoyLndpZHRoIC8gMiAqIE1hdGgubWF4KDAsIGNsaXBQcmVjZW50YWdlIC0gMC41KSwgXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIud2lkdGggLyAyICogICgxIC0gIE1hdGgubWF4KDAsIGNsaXBQcmVjZW50YWdlIC0gMC41KSksIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplMi53IC8gMiAqICgxIC0gIE1hdGgubWF4KDAsIGNsaXBQcmVjZW50YWdlIC0gMC41KSkgKyB0aGlzLnNpemUyLncgLyA0LCBcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUyLncgLyAyICogKDEgLSAgTWF0aC5tYXgoMCwgY2xpcFByZWNlbnRhZ2UgLSAwLjUpKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUyLmhcclxuICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgXHJcbiAgICAgICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iai53aWR0aCAqIGNsaXBQcmVjZW50YWdlLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUudyAqIGNsaXBQcmVjZW50YWdlLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZS5oXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iajIsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIud2lkdGggKiBjbGlwUHJlY2VudGFnZSwgXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIud2lkdGggKiAgKDEgLSBjbGlwUHJlY2VudGFnZSksIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplMi53ICogKDEgLSBjbGlwUHJlY2VudGFnZSkgKyB0aGlzLnNpemUyLncgLyAyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUyLncgKiAoMSAtIGNsaXBQcmVjZW50YWdlKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUyLmhcclxuICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGdldCBTb3VyY2UoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFNvdXJjZSh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25lRmlsZSA9IHRoaXMuc291cmNlLmxlbmd0aCA9PT0gMTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICdhc3NldHMvJyArIHRoaXMuc291cmNlWzBdICsgJy5wbmcnO1xyXG4gICAgICAgIGlmICh0aGlzLm9uZUZpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIuc3JjID0gJ2Fzc2V0cy8nICsgdGhpcy5zb3VyY2VbMF0gKyAnLnBuZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIuc3JjID0gJ2Fzc2V0cy8nICsgdGhpcy5zb3VyY2VbMV0gKyAnLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2l6ZShjYW52YXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICBsZXQgc2NhbGU6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUuaCA9IHRoaXMuaW1hZ2VPYmouaGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zaXplLncgPSB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGU7XHJcblxyXG4gICAgICAgIHNjYWxlID0gY2FudmFzLmhlaWdodCAvIHRoaXMuaW1hZ2VPYmoyLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUyLmggPSB0aGlzLmltYWdlT2JqMi5oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpemUyLncgPSB0aGlzLmltYWdlT2JqMi53aWR0aCAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJhY3Rlci50cyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9zeXN0ZW1zL1ZlY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcclxuICAgIHB1YmxpYyBpbWFnZU9iajogYW55O1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCk7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IGFueSwgY29udGV4dDogYW55KXtcclxuICAgICAgICB0aGlzLmltYWdlT2JqID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZU9iai5zcmMgPSAnYXNzZXRzL2xpZ2h0LnBuZyc7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBwdWJsaWMgRHJhd0ltYWdlKGNhbnZhczogYW55LCBjb250ZXh0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iai5oZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5pbWFnZU9iai53aWR0aCAqIHNjYWxlIC8gMiwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGUsIHRoaXMuaW1hZ2VPYmouaGVpZ2h0ICogc2NhbGUpO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGluZS50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zYXNzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFyYWN0ZXIge1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IHggfHwgMDtcclxuICAgIH0gXHJcbiAgICBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3lzdGVtcy9WZWN0b3IudHMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL3N5c3RlbXMvVmVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQnV0dG9uIHtcclxuICAgIHB1YmxpYyBpbWFnZTogYW55O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjtcclxuICAgIHB1YmxpYyBzaXplOiB7XHJcbiAgICAgICAgdzogbnVtYmVyLFxyXG4gICAgICAgIGg6IG51bWJlciBcclxuICAgIH07XHJcbiAgICBwdWJsaWMgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc3JjOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgbWF4V2lkdGg6IG51bWJlciA9IDEwMCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gJ2Fzc2V0cy8nICsgc3JjICsgJy5wbmcnO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgICAgICAgdzogTWF0aC5taW4odGhpcy5pbWFnZS53aWR0aCwgbWF4V2lkdGgpLFxyXG4gICAgICAgICAgICBoOiBNYXRoLm1pbih0aGlzLmltYWdlLndpZHRoLCBtYXhXaWR0aClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIENsaWNrQ2hlY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5Ib3Zlck92ZXJCdXR0b24oeCwgeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSG92ZXJPdmVyQnV0dG9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHggPiB0aGlzLnBvc2l0aW9uLnggJiYgeCA8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS53ICYmIHkgPiB0aGlzLnBvc2l0aW9uLnkgJiYgeSA8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS5oO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLncsIHRoaXMuc2l6ZS5oKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLncsIHRoaXMuc2l6ZS5oKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53LCB0aGlzLnNpemUuaCk7XHJcblxyXG4gICAgfSBcclxuICAgIHB1YmxpYyByZXNpemUoY2FudmFzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2NhbGU6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUuaCA9IHRoaXMuaW1hZ2UuaGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zaXplLncgPSB0aGlzLmltYWdlLndpZHRoICogc2NhbGU7XHJcblxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9VSS9pbWFnZUJ1dHRvbi50cyJdLCJzb3VyY2VSb290IjoiIn0=