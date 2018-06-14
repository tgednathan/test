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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

__webpack_require__(2);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = __webpack_require__(3);
var Line_1 = __webpack_require__(4);
var CharacterSelection_1 = __webpack_require__(11);
window.addEventListener('load', function () {
    //canvas and context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var canvasWidth = .7;
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
            char.Source = [key];
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
var character = /** @class */ (function () {
    function character(arrayOfFiles) {
        this.position = new Vector_1.default();
        this.mirrored = false;
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
/* 4 */
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
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterSelection = /** @class */ (function () {
    function CharacterSelection(callBack) {
        this.scr = ['3', '21', '13', '14'];
        this.characterSelectionObject = document.getElementsByClassName('characterselection')[0];
        console.log(this.characterSelectionObject);
        for (var i = 0; i < this.scr.length; i++) {
            this.ApplyButton(this.scr[i], callBack);
        }
    }
    CharacterSelection.prototype.ApplyButton = function (key, clickFunction) {
        var button = document.createElement("INPUT");
        button.type = 'BUTTON';
        button.style.backgroundImage = 'url(assets/' + key + '.png)';
        button.onclick = function () {
            //console.log('click');
            clickFunction(key);
        };
        console.log(button.style.background);
        this.characterSelectionObject.appendChild(button);
    };
    return CharacterSelection;
}());
exports.default = CharacterSelection;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhmNzY2ZGUyNjdmNzU4OWY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5c3RlbXMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGluZS50cyIsIndlYnBhY2s6Ly8vLi9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvQ2hhcmFjdGVyU2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTtJQUdJLG1CQUFZLENBQVUsRUFBRSxDQUFVO1FBRjNCLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCx5Q0FBb0M7QUFDcEMsb0NBQTBCO0FBRTFCLG1EQUF5RDtBQUV6RCxN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LE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDYix1QkFBdUI7WUFDdkIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXRELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOGY3NjZkZTI2N2Y3NTg5ZjUyMSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYXJhY3RlciB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHkgfHwgeCB8fCAwO1xyXG4gICAgfSBcclxuICAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeXN0ZW1zL1ZlY3Rvci50cyIsImltcG9ydCBjaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xyXG5pbXBvcnQgSW1hZ2VCdXR0b24gZnJvbSAnLi9VSS9pbWFnZUJ1dHRvbic7XHJcbmltcG9ydCBDaGFyYWN0ZXJTZWxlY3Rpb24gZnJvbSAnLi9VSS9DaGFyYWN0ZXJTZWxlY3Rpb24nO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAvL2NhbnZhcyBhbmQgY29udGV4dFxyXG4gICAgbGV0IGNhbnZhczogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgbGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgbGV0IGNhbnZhc1dpZHRoOiBudW1iZXIgPSAuNztcclxuICAgIFxyXG4gICAgLy9vYmplY3RzXHJcbiAgICBsZXQgY2hhcjogY2hhcmFjdGVyO1xyXG4gICAgbGV0IGxpbmU6IExpbmUgPSBuZXcgTGluZShjYW52YXMsIGNvbnRleHQpO1xyXG5cclxuICAgIC8vdWlcclxuICAgIGxldCBzZWxlY3Rpb246IENoYXJhY3RlclNlbGVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgZnVuY3Rpb24gY29uc3RydWN0b3IoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNoYXIgPSBuZXcgY2hhcmFjdGVyKFsnMyddKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHNlbGVjdGlvbiA9IG5ldyBDaGFyYWN0ZXJTZWxlY3Rpb24oIChrZXk6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZWRnbicpO1xyXG4gICAgICAgICAgICBjaGFyLlNvdXJjZSA9IFtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0SW50ZXJ2YWwocmVuZGVyLCAxKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMaW5lKHg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxpbmUucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgICAgbGluZS5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICBsZXQgYjogbnVtYmVyID0gMjUgLSBNYXRoLmFicygobGluZS5wb3NpdGlvbi54IC0gY2FudmFzLndpZHRoIC8gMikpIC8gNDtcclxuICAgICAgICBpZihiIDwgMCkgYiA9IDA7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlID0gJ2ZpbHRlcjpicmlnaHRuZXNzKCcgKyAoIGIgKyAxMDApICsgJyUpJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvL2NsZWFycyB0aGUgaW1hZ2VcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vZmlsdGVyIGVmZmVjdFxyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiMGUwZTYnXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBsaW5lLnBvc2l0aW9uLngsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWQ1ZDInXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChsaW5lLnBvc2l0aW9uLngsIDAsIGNhbnZhcy53aWR0aCAtIGxpbmUucG9zaXRpb24ueCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIC8vb2JqZWN0c1xyXG4gICAgICAgIGNoYXIuRHJhd0ltYWdlKGNhbnZhcywgY29udGV4dCwgbGluZS5wb3NpdGlvbi54KTtcclxuICAgICAgICBsaW5lLkRyYXdJbWFnZShjYW52YXMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogY2FudmFzV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIGNhbnZhc1dpZHRoO1xyXG4gICAgICAgIGNoYXIucmVzaXplKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL2V2ZW50c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICByZXNpemUoKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgeCA6IGUucGFnZVggLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcclxuICAgICAgICAgICAgeSA6IGUucGFnZVkgLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogZS5wYWdlWCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogZS5wYWdlWSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUxpbmUocG9zLngpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICBsZXQgdG91Y2g6IGFueSA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogdG91Y2guY2xpZW50WCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogdG91Y2guY2xpZW50WSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUxpbmUocG9zLngpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC50cyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9zeXN0ZW1zL1ZlY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFyYWN0ZXIge1xyXG4gICAgcHVibGljIGltYWdlT2JqOiBhbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2VPYmoyOiBhbnk7XHJcbiAgICBwcml2YXRlIG9uZUZpbGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvciA9IG5ldyBWZWN0b3IoKTtcclxuICAgIHByaXZhdGUgc291cmNlOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgY2FudmFzOiBhbnk7XHJcbiAgICBwcml2YXRlIG1pcnJvcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaXplOiB7XHJcbiAgICAgICAgdzogbnVtYmVyLFxyXG4gICAgICAgIGg6IG51bWJlciBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaXplMjoge1xyXG4gICAgICAgIHc6IG51bWJlcixcclxuICAgICAgICBoOiBudW1iZXIgXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlPZkZpbGVzOiBzdHJpbmdbXSl7XHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHt3OiAwLCBoOiAwfTtcclxuICAgICAgICB0aGlzLnNpemUyID0ge3c6IDAsIGg6IDB9O1xyXG4gXHJcbiAgICAgICAgdGhpcy5pbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoyID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuU291cmNlID0gYXJyYXlPZkZpbGVzO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcHVibGljIERyYXdJbWFnZShjYW52YXM6IGFueSwgY29udGV4dDogYW55LCBtb3VzZVg6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xpcFByZWNlbnRhZ2U6IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICBjbGlwUHJlY2VudGFnZSA9IChtb3VzZVggLSAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyKSkgLyB0aGlzLnNpemUudyAqIDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpcFByZWNlbnRhZ2UgPSAobW91c2VYIC0gKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS53IC8yKSkgLyB0aGlzLnNpemUudztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjbGlwUHJlY2VudGFnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uZUZpbGUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgXHJcbiAgICAgICAgICAgICAgICAtdGhpcy5pbWFnZU9iai53aWR0aCAvIDQsIFxyXG4gICAgICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqLndpZHRoIC8gMiAqIE1hdGgubWluKDEuNSwgY2xpcFByZWNlbnRhZ2UpLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUudyAvIDIgKiBNYXRoLm1pbigxLjUsIGNsaXBQcmVjZW50YWdlKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUuaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqMiwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqMi53aWR0aCAvIDIgKyB0aGlzLmltYWdlT2JqMi53aWR0aCAvIDIgKiBNYXRoLm1heCgwLCBjbGlwUHJlY2VudGFnZSAtIDAuNSksIFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoyLndpZHRoIC8gMiAqICAoMSAtICBNYXRoLm1heCgwLCBjbGlwUHJlY2VudGFnZSAtIDAuNSkpLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoyLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZTIudyAvIDIgKiAoMSAtICBNYXRoLm1heCgwLCBjbGlwUHJlY2VudGFnZSAtIDAuNSkpICsgdGhpcy5zaXplMi53IC8gNCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplMi53IC8gMiAqICgxIC0gIE1hdGgubWF4KDAsIGNsaXBQcmVjZW50YWdlIC0gMC41KSksIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplMi5oXHJcbiAgICAgICAgICAgICk7ICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqLCBcclxuICAgICAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqLndpZHRoICogY2xpcFByZWNlbnRhZ2UsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUudyAvIDIsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZS53ICogY2xpcFByZWNlbnRhZ2UsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLmhcclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqMiwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqMi53aWR0aCAqIGNsaXBQcmVjZW50YWdlLCBcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqMi53aWR0aCAqICAoMSAtIGNsaXBQcmVjZW50YWdlKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUyLncgKiAoMSAtIGNsaXBQcmVjZW50YWdlKSArIHRoaXMuc2l6ZTIudyAvIDIsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZTIudyAqICgxIC0gY2xpcFByZWNlbnRhZ2UpLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZTIuaFxyXG4gICAgICAgICAgICApOyAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFNvdXJjZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgU291cmNlKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbmVGaWxlID0gdGhpcy5zb3VyY2UubGVuZ3RoID09PSAxO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gJ2Fzc2V0cy8nICsgdGhpcy5zb3VyY2VbMF0gKyAnLnBuZyc7XHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5zcmMgPSAnYXNzZXRzLycgKyB0aGlzLnNvdXJjZVswXSArICcucG5nJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5zcmMgPSAnYXNzZXRzLycgKyB0aGlzLnNvdXJjZVsxXSArICcucG5nJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzaXplKGNhbnZhczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gY2FudmFzLmhlaWdodCAvIHRoaXMuaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZS5oID0gdGhpcy5pbWFnZU9iai5oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpemUudyA9IHRoaXMuaW1hZ2VPYmoud2lkdGggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iajIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZTIuaCA9IHRoaXMuaW1hZ2VPYmoyLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZTIudyA9IHRoaXMuaW1hZ2VPYmoyLndpZHRoICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyLnRzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL3N5c3RlbXMvVmVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xyXG4gICAgcHVibGljIGltYWdlT2JqOiBhbnk7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvciA9IG5ldyBWZWN0b3IoKTtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogYW55LCBjb250ZXh0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICdhc3NldHMvbGlnaHQucG5nJztcclxuICAgIH0gXHJcbiAgICBcclxuICAgIHB1YmxpYyBEcmF3SW1hZ2UoY2FudmFzOiBhbnksIGNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqLCB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGUgLyAyLCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuaW1hZ2VPYmoud2lkdGggKiBzY2FsZSwgdGhpcy5pbWFnZU9iai5oZWlnaHQgKiBzY2FsZSk7XHJcbiAgICB9IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaW5lLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vc3lzdGVtcy9WZWN0b3InO1xyXG5pbXBvcnQgY2hhcmFjdGVyIGZyb20gJy4uL2NoYXJhY3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Rpb24ge1xyXG4gICAgcHVibGljIHNjcjogc3RyaW5nW10gPSBbJzMnLCAnMjEnLCAnMTMnLCAnMTQnXTtcclxuICAgIHB1YmxpYyBjaGFyYWN0ZXJTZWxlY3Rpb25PYmplY3Q6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbEJhY2s6IEZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdGlvbk9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYXJhY3RlcnNlbGVjdGlvbicpWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyU2VsZWN0aW9uT2JqZWN0KTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zY3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5BcHBseUJ1dHRvbih0aGlzLnNjcltpXSwgY2FsbEJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBwdWJsaWMgQXBwbHlCdXR0b24oa2V5OiBzdHJpbmcsIGNsaWNrRnVuY3Rpb246IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ0JVVFRPTic7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzLycgKyBrZXkgKyAnLnBuZyknO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgICAgICAgICBjbGlja0Z1bmN0aW9uKGtleSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24uc3R5bGUuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rpb25PYmplY3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VJL0NoYXJhY3RlclNlbGVjdGlvbi50cyJdLCJzb3VyY2VSb290IjoiIn0=