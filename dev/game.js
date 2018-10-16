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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.SOURCE_IMAGES = [
        {
            sources: ['assets/characters/1.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/2.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/3.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/4.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/5.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/6.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/7.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/8.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/9.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/10.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/11.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/12.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/13.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/14.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/15.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/16.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/17.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/18.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/19.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/20.png'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/21.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/22.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/23.png'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['assets/characters/a.png', 'assets/characters/b.png'],
            invert: false,
            width: 1,
            height: 1
        },
    ];
    return Constants;
}());
exports.default = Constants;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(7);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = __webpack_require__(4);
var Line_1 = __webpack_require__(5);
var CharacterSelection_1 = __webpack_require__(6);
window.addEventListener('load', function () {
    //canvas and context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var canvasWidth = .7;
    var submit = document.getElementsByClassName('submit')[0];
    var file = document.getElementsByClassName('file')[0];
    submit.onclick = function () {
        console.log(submit, file);
        try {
            var scr = {
                sources: [window.URL.createObjectURL(file.files[0])],
                invert: false,
                width: 2,
                height: 1
            };
            console.log(scr.sources[0]);
            char.CharacterInfo = scr;
        }
        catch (_a) {
            console.log('no Image');
        }
    };
    //objects
    var char;
    var line = new Line_1.default(canvas, context);
    //ui
    var selection;
    constructor();
    function constructor() {
        char = new character_1.default(['3']);
        selection = new CharacterSelection_1.default(function (key) {
            console.log('fedgn');
            char.CharacterInfo = key;
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(1);
var character = /** @class */ (function () {
    function character(arrayOfFiles) {
        var _this = this;
        this.position = new Vector_1.default();
        this.size = { w: 0, h: 0 };
        this.size2 = { w: 0, h: 0 };
        this.imageObj = new Image();
        this.imageObj2 = new Image();
        requestAnimationFrame(function () {
            _this.CharacterInfo = Constants_1.default.SOURCE_IMAGES[Constants_1.default.SOURCE_IMAGES.length - 1];
        });
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
        this.drawClipRegion(true, context, mouseX, canvas);
        context.drawImage(this.imageObj, 0, 0, this.imageObj.width / (this.oneFile ? 2 : 1), this.imageObj.height, this.position.x - this.size.w / (this.oneFile ? 4 : 2), this.position.y, this.size.w / (this.oneFile ? 2 : 1), this.size.h);
        context.restore();
        this.drawClipRegion(false, context, mouseX, canvas);
        context.scale(this.characterInfo.invert ? -1 : 1, 1);
        context.drawImage(this.imageObj2, (this.oneFile ? this.imageObj2.width / 2 : 0), 0, this.imageObj.width / (this.oneFile ? 2 : 1), this.imageObj.height, this.characterInfo.invert ? -(this.position.x + this.size.w / 4) : this.position.x - this.size.w / (this.oneFile ? 4 : 2), this.position.y, this.size.w / (this.oneFile ? 2 : 1), this.size.h);
        context.restore();
        return;
    };
    character.prototype.drawClipRegion = function (invert, context, mouseX, canvas) {
        if (invert === void 0) { invert = true; }
        context.save();
        context.beginPath();
        context.moveTo(invert ? 0 : canvas.width, 0);
        context.lineTo(mouseX, 0);
        context.lineTo(mouseX, this.canvas.height);
        context.lineTo(invert ? 0 : canvas.width, this.canvas.height);
        context.closePath();
        context.clip();
    };
    Object.defineProperty(character.prototype, "CharacterInfo", {
        get: function () {
            return this.characterInfo;
        },
        set: function (value) {
            this.characterInfo = value;
            this.oneFile = this.characterInfo.sources.length === 1;
            this.imageObj.src = this.characterInfo.sources[0];
            if (this.oneFile) {
                this.imageObj2.src = this.characterInfo.sources[0];
            }
            else {
                this.imageObj2.src = this.characterInfo.sources[1];
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(1);
var CharacterSelection = /** @class */ (function () {
    function CharacterSelection(callBack) {
        this.characterSelectionObject = document.getElementsByClassName('characterselection')[0];
        console.log(this.characterSelectionObject);
        for (var i = Constants_1.default.SOURCE_IMAGES.length; i--;) {
            this.ApplyButton(Constants_1.default.SOURCE_IMAGES[i], callBack);
        }
    }
    CharacterSelection.prototype.ApplyButton = function (key, clickFunction) {
        var button = document.createElement("INPUT");
        button.type = 'BUTTON';
        button.style.backgroundImage = 'url(' + key.sources[0] + ')';
        button.onclick = function () {
            clickFunction(key);
        };
        this.characterSelectionObject.appendChild(button);
    };
    return CharacterSelection;
}());
exports.default = CharacterSelection;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDc1Zjk1MWEwY2ZmNjY0NDkyODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5c3RlbXMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0NoYXJhY3RlclNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zYXNzL21haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxtQkFBWSxDQUFVLEVBQUUsQ0FBVTtRQUYzQixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ0REO0lBQUE7SUFvSkEs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Q0FBQzs7Ozs7Ozs7QUN4QkQseUMiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNzVmOTUxYTBjZmY2NjQ0OTI4MiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYXJhY3RlciB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHkgfHwgeCB8fCAwO1xyXG4gICAgfSBcclxuICAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeXN0ZW1zL1ZlY3Rvci50cyIsImV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVySW5mbyB7XHJcbiAgICBzb3VyY2VzOiBzdHJpbmdbXTtcclxuICAgIGludmVydDogYm9vbGVhbjtcclxuICAgIHdpZHRoOiAgbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50c1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIFNPVVJDRV9JTUFHRVM6IENoYXJhY3RlckluZm9bXSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvMS5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzIucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzMucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzQucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzUucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzYucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzcucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzgucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzkucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzEwLnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvMTEucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzEyLnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWydhc3NldHMvY2hhcmFjdGVycy8xMy5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzE0LnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvMTUucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzE2LnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWydhc3NldHMvY2hhcmFjdGVycy8xNy5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvMTgucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzE5LnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWydhc3NldHMvY2hhcmFjdGVycy8yMC5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvMjEucG5nJ10sXHJcbiAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWydhc3NldHMvY2hhcmFjdGVycy8yMi5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJ2Fzc2V0cy9jaGFyYWN0ZXJzLzIzLnBuZyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYXNzZXRzL2NoYXJhY3RlcnMvYS5wbmcnLCAnYXNzZXRzL2NoYXJhY3RlcnMvYi5wbmcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGEvQ29uc3RhbnRzLnRzIiwiaW1wb3J0IGNoYXJhY3RlciBmcm9tICcuL2NoYXJhY3Rlcic7XHJcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XHJcbmltcG9ydCBJbWFnZUJ1dHRvbiBmcm9tICcuL1VJL2ltYWdlQnV0dG9uJztcclxuaW1wb3J0IENoYXJhY3RlclNlbGVjdGlvbiBmcm9tICcuL1VJL0NoYXJhY3RlclNlbGVjdGlvbic7XHJcbmltcG9ydCB7IENoYXJhY3RlckluZm8gfSBmcm9tICcuL2RhdGEvQ29uc3RhbnRzJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgLy9jYW52YXMgYW5kIGNvbnRleHRcclxuICAgIGxldCBjYW52YXM6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGxldCBjYW52YXNXaWR0aDogbnVtYmVyID0gLjc7XHJcblxyXG4gICAgbGV0IHN1Ym1pdDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibWl0JylbMF07XHJcbiAgICBsZXQgZmlsZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsZScpWzBdO1xyXG4gICAgc3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VibWl0LCBmaWxlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc2NyOiBDaGFyYWN0ZXJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlczogW3dpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUuZmlsZXNbMF0pXSxcclxuICAgICAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzY3Iuc291cmNlc1swXSk7XHJcbiAgICAgICAgICAgIGNoYXIuQ2hhcmFjdGVySW5mbyA9ICBzY3I7ICAgXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBJbWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICAvL29iamVjdHNcclxuICAgIGxldCBjaGFyOiBjaGFyYWN0ZXI7XHJcbiAgICBsZXQgbGluZTogTGluZSA9IG5ldyBMaW5lKGNhbnZhcywgY29udGV4dCk7XHJcblxyXG4gICAgLy91aVxyXG4gICAgbGV0IHNlbGVjdGlvbjogQ2hhcmFjdGVyU2VsZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY2hhciA9IG5ldyBjaGFyYWN0ZXIoWyczJ10pO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24gPSBuZXcgQ2hhcmFjdGVyU2VsZWN0aW9uKCAoa2V5OiBDaGFyYWN0ZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZWRnbicpO1xyXG4gICAgICAgICAgICBjaGFyLkNoYXJhY3RlckluZm8gPSBrZXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRJbnRlcnZhbChyZW5kZXIsIDEpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpbmUoeDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGluZS5wb3NpdGlvbi54ID0geDtcclxuICAgICAgICBsaW5lLnBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgIGxldCBiOiBudW1iZXIgPSAyNSAtIE1hdGguYWJzKChsaW5lLnBvc2l0aW9uLnggLSBjYW52YXMud2lkdGggLyAyKSkgLyA0O1xyXG4gICAgICAgIGlmKGIgPCAwKSBiID0gMDtcclxuICAgICAgICBjYW52YXMuc3R5bGUgPSAnZmlsdGVyOmJyaWdodG5lc3MoJyArICggYiArIDEwMCkgKyAnJSknO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vY2xlYXJzIHRoZSBpbWFnZVxyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy9maWx0ZXIgZWZmZWN0XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2IwZTBlNidcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGxpbmUucG9zaXRpb24ueCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VlZDVkMidcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGxpbmUucG9zaXRpb24ueCwgMCwgY2FudmFzLndpZHRoIC0gbGluZS5wb3NpdGlvbi54LCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgLy9vYmplY3RzXHJcbiAgICAgICAgY2hhci5EcmF3SW1hZ2UoY2FudmFzLCBjb250ZXh0LCBsaW5lLnBvc2l0aW9uLngpO1xyXG4gICAgICAgIGxpbmUuRHJhd0ltYWdlKGNhbnZhcywgY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBjYW52YXNXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogY2FudmFzV2lkdGg7XHJcbiAgICAgICAgY2hhci5yZXNpemUoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vZXZlbnRzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogZS5wYWdlWCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogZS5wYWdlWSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGU6IGFueSkge1xyXG4gICAgICAgIHZhciBwb3MgPSB7XHJcbiAgICAgICAgICAgIHggOiBlLnBhZ2VYIC0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHkgOiBlLnBhZ2VZIC0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlTGluZShwb3MueCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGU6IGFueSkge1xyXG4gICAgICAgIGxldCB0b3VjaDogYW55ID0gZS50b3VjaGVzWzBdO1xyXG4gICAgICAgIHZhciBwb3MgPSB7XHJcbiAgICAgICAgICAgIHggOiB0b3VjaC5jbGllbnRYIC0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHkgOiB0b3VjaC5jbGllbnRZIC0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlTGluZShwb3MueCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0LnRzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL3N5c3RlbXMvVmVjdG9yJztcclxuaW1wb3J0IENvbnN0YW50cywgeyBDaGFyYWN0ZXJJbmZvIH0gZnJvbSAnLi9kYXRhL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFyYWN0ZXIge1xyXG4gICAgcHVibGljIGltYWdlT2JqOiBhbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2VPYmoyOiBhbnk7XHJcbiAgICBwcml2YXRlIG9uZUZpbGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvciA9IG5ldyBWZWN0b3IoKTtcclxuICAgIHByaXZhdGUgc291cmNlOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgY2FudmFzOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJJbmZvOiBDaGFyYWN0ZXJJbmZvOyAgICBcclxuICAgIHB1YmxpYyBzaXplOiB7XHJcbiAgICAgICAgdzogbnVtYmVyLFxyXG4gICAgICAgIGg6IG51bWJlciBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaXplMjoge1xyXG4gICAgICAgIHc6IG51bWJlcixcclxuICAgICAgICBoOiBudW1iZXIgXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlPZkZpbGVzOiBzdHJpbmdbXSl7XHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHt3OiAwLCBoOiAwfTtcclxuICAgICAgICB0aGlzLnNpemUyID0ge3c6IDAsIGg6IDB9O1xyXG4gXHJcbiAgICAgICAgdGhpcy5pbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5DaGFyYWN0ZXJJbmZvID0gQ29uc3RhbnRzLlNPVVJDRV9JTUFHRVNbQ29uc3RhbnRzLlNPVVJDRV9JTUFHRVMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBwdWJsaWMgRHJhd0ltYWdlKGNhbnZhczogYW55LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1vdXNlWDogbnVtYmVyID0gY2FudmFzLndpZHRoIC8gMik6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGlwUHJlY2VudGFnZTogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbmVGaWxlKSB7XHJcbiAgICAgICAgICAgIGNsaXBQcmVjZW50YWdlID0gKG1vdXNlWCAtICh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUudyAvIDIpKSAvIHRoaXMuc2l6ZS53ICogMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlwUHJlY2VudGFnZSA9IChtb3VzZVggLSAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLzIpKSAvIHRoaXMuc2l6ZS53O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNsaXBQcmVjZW50YWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3Q2xpcFJlZ2lvbih0cnVlLCBjb250ZXh0LCBtb3VzZVgsIGNhbnZhcyk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iai53aWR0aCAvICh0aGlzLm9uZUZpbGUgPyAyIDogMSksIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAodGhpcy5vbmVGaWxlID8gNCA6IDIpLCBcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLncgLyAodGhpcy5vbmVGaWxlID8gMiA6IDEpLCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLmhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3Q2xpcFJlZ2lvbihmYWxzZSwgY29udGV4dCwgbW91c2VYLCBjYW52YXMpO1xyXG4gICAgICAgIGNvbnRleHQuc2NhbGUodGhpcy5jaGFyYWN0ZXJJbmZvLmludmVydCA/IC0xIDogMSwgMSk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VPYmoyLCBcclxuICAgICAgICAgICAgKHRoaXMub25lRmlsZSA/IHRoaXMuaW1hZ2VPYmoyLndpZHRoIC8gMiA6IDApLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoud2lkdGggLyAodGhpcy5vbmVGaWxlID8gMiA6IDEpLCBcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVySW5mby5pbnZlcnQgPyAtKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS53IC8gNCkgOiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUudyAvICh0aGlzLm9uZUZpbGUgPyA0IDogMiksIFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxyXG4gICAgICAgICAgICB0aGlzLnNpemUudyAvICh0aGlzLm9uZUZpbGUgPyAyIDogMSksIFxyXG4gICAgICAgICAgICB0aGlzLnNpemUuaFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgZHJhd0NsaXBSZWdpb24oaW52ZXJ0OiBib29sZWFuID0gdHJ1ZSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBtb3VzZVg6IG51bWJlciwgY2FudmFzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGludmVydCA/IDAgOiBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKG1vdXNlWCwgMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8obW91c2VYLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGludmVydCA/IDAgOiBjYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmNsaXAoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBDaGFyYWN0ZXJJbmZvKCk6IENoYXJhY3RlckluZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBDaGFyYWN0ZXJJbmZvKHZhbHVlOiBDaGFyYWN0ZXJJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJJbmZvID0gdmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbmVGaWxlID0gdGhpcy5jaGFyYWN0ZXJJbmZvLnNvdXJjZXMubGVuZ3RoID09PSAxO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gdGhpcy5jaGFyYWN0ZXJJbmZvLnNvdXJjZXNbMF07XHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5zcmMgPSB0aGlzLmNoYXJhY3RlckluZm8uc291cmNlc1swXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5zcmMgPSB0aGlzLmNoYXJhY3RlckluZm8uc291cmNlc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzaXplKGNhbnZhczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gY2FudmFzLmhlaWdodCAvIHRoaXMuaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZS5oID0gdGhpcy5pbWFnZU9iai5oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpemUudyA9IHRoaXMuaW1hZ2VPYmoud2lkdGggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iajIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZTIuaCA9IHRoaXMuaW1hZ2VPYmoyLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZTIudyA9IHRoaXMuaW1hZ2VPYmoyLndpZHRoICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyLnRzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL3N5c3RlbXMvVmVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xyXG4gICAgcHVibGljIGltYWdlT2JqOiBhbnk7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvciA9IG5ldyBWZWN0b3IoKTtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogYW55LCBjb250ZXh0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICdhc3NldHMvbGlnaHQucG5nJztcclxuICAgIH0gXHJcbiAgICBcclxuICAgIHB1YmxpYyBEcmF3SW1hZ2UoY2FudmFzOiBhbnksIGNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqLCB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGUgLyAyLCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuaW1hZ2VPYmoud2lkdGggKiBzY2FsZSwgdGhpcy5pbWFnZU9iai5oZWlnaHQgKiBzY2FsZSk7XHJcbiAgICB9IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaW5lLnRzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9zeXN0ZW1zL1ZlY3Rvcic7XHJcbmltcG9ydCBjaGFyYWN0ZXIgZnJvbSAnLi4vY2hhcmFjdGVyJztcclxuaW1wb3J0IENvbnN0YW50cywgeyBDaGFyYWN0ZXJJbmZvIH0gZnJvbSAnLi4vZGF0YS9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyU2VsZWN0aW9uIHtcclxuICAgIHB1YmxpYyBjaGFyYWN0ZXJTZWxlY3Rpb25PYmplY3Q6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbEJhY2s6IEZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdGlvbk9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYXJhY3RlcnNlbGVjdGlvbicpWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyU2VsZWN0aW9uT2JqZWN0KTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBDb25zdGFudHMuU09VUkNFX0lNQUdFUy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgdGhpcy5BcHBseUJ1dHRvbihDb25zdGFudHMuU09VUkNFX0lNQUdFU1tpXSwgY2FsbEJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBwdWJsaWMgQXBwbHlCdXR0b24oa2V5OiBDaGFyYWN0ZXJJbmZvLCBjbGlja0Z1bmN0aW9uOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBidXR0b246IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICBidXR0b24udHlwZSA9ICdCVVRUT04nO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBrZXkuc291cmNlc1swXSArICcpJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2xpY2tGdW5jdGlvbihrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rpb25PYmplY3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VJL0NoYXJhY3RlclNlbGVjdGlvbi50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zYXNzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9