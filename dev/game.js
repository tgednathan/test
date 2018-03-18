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
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = __webpack_require__(8);
var Line_1 = __webpack_require__(9);
window.addEventListener('load', function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var char = new character_1.default();
    char.x = canvas.width / 2;
    var l = new Line_1.default(canvas, context);
    setInterval(update, 1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        char.resize(canvas);
    });
    canvas.addEventListener('mousemove', function (e) {
        var pos = {
            x: e.pageX - this.offsetLeft,
            y: e.pageY - this.canvasOffsetY
        };
        l.x = pos.x;
        l.y = 0;
        var b = 25 - Math.abs((l.x - canvas.width / 2)) / 4;
        if (b < 0)
            b = 0;
        console.log(b);
        canvas.style = 'filter:brightness(' + (b + 100) + '%)';
    }, false);
    function update() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#b0e0e6';
        context.fillRect(0, 0, l.x, canvas.height);
        context.fill();
        context.fillStyle = '#eed5d2';
        context.fillRect(l.x, 0, canvas.width - l.x, canvas.height);
        context.fill();
        char.resize(canvas);
        char.DrawImage(canvas, context, l.x);
        l.DrawImage(canvas, context);
    }
});


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var character = /** @class */ (function () {
    function character() {
        this.x = 0;
        this.y = 0;
        this.size = { w: 0, h: 0 };
        this.size2 = { w: 0, h: 0 };
        this.imageObj = new Image();
        this.imageObj.src = 'assets/1.png';
        this.imageObj2 = new Image();
        this.imageObj2.src = 'assets/2.png';
    }
    character.prototype.DrawImage = function (canvas, context, mouseX) {
        if (mouseX === void 0) { mouseX = canvas.width / 2; }
        var clipPrecentage = (mouseX - (this.x - this.size.w / 2)) / this.size.w;
        context.drawImage(this.imageObj, 0, 0, this.imageObj.width * clipPrecentage, this.imageObj.height, this.x - this.size.w / 2, this.y, this.size.w * clipPrecentage, this.size.h);
        context.drawImage(this.imageObj2, this.imageObj2.width * clipPrecentage, 0, this.imageObj2.width * (1 - clipPrecentage), this.imageObj2.height, this.x - this.size2.w * (1 - clipPrecentage) + this.size2.w / 2, this.y, this.size2.w * (1 - clipPrecentage), this.size2.h);
    };
    character.prototype.resize = function (canvas) {
        var scale = canvas.height / this.imageObj.height;
        this.size.h = this.imageObj.height * scale;
        this.size.w = this.imageObj.width * scale;
        scale = canvas.height / this.imageObj2.height;
        this.size2.h = this.imageObj2.height * scale;
        this.size2.w = this.imageObj2.width * scale;
        this.x = canvas.width / 2;
    };
    return character;
}());
exports.default = character;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var line = /** @class */ (function () {
    function line(canvas, context) {
        this.x = 0;
        this.y = 0;
        this.imageObj = new Image();
        this.imageObj.src = 'assets/light.png';
    }
    line.prototype.DrawImage = function (canvas, context) {
        var scale = canvas.height / this.imageObj.height;
        context.drawImage(this.imageObj, this.x - this.imageObj.width * scale / 2, this.y, this.imageObj.width * scale, this.imageObj.height * scale);
    };
    return line;
}());
exports.default = line;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY5MzQzMGQ5NGFjNWE2ZGI3YWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9MaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLHlDQUFvQztBQUNwQyxvQ0FBMEI7QUFFMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM1QixJQUFJLE1BQU0sR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELElBQUksT0FBTyxHQUE2QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhFLElBQUksSUFBSSxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBQ3RDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLEdBQVMsSUFBSSxjQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLFdBQVcsQ0FBQyxN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S0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUM7SUFDM0MsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLE1BQVcsRUFBRSxPQUFZO1FBQ3RDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDakQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsSixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjkzNDMwZDk0YWM1YTZkYjdhYyIsImltcG9ydCBjaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5pbXBvcnQgbGluZSBmcm9tICcuL0xpbmUnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgbGV0IGNoYXI6IGNoYXJhY3RlciA9IG5ldyBjaGFyYWN0ZXIoKTtcclxuICAgIGNoYXIueCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICBsZXQgbDogbGluZSA9IG5ldyBsaW5lKGNhbnZhcywgY29udGV4dCk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwodXBkYXRlLCAxKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY2hhci5yZXNpemUoY2FudmFzKTtcclxuICAgIH0pO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGU6IGFueSkge1xyXG4gICAgICAgIHZhciBwb3MgPSB7XHJcbiAgICAgICAgICAgIHggOiBlLnBhZ2VYIC0gdGhpcy5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICB5IDogZS5wYWdlWSAtIHRoaXMuY2FudmFzT2Zmc2V0WVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbC54ID0gcG9zLng7XHJcbiAgICAgICAgbC55ID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGI6IG51bWJlciA9IDI1IC0gTWF0aC5hYnMoKGwueCAtIGNhbnZhcy53aWR0aCAvIDIpKSAvIDQ7XHJcbiAgICAgICAgaWYoYiA8IDApIGIgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGIpO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZSA9ICdmaWx0ZXI6YnJpZ2h0bmVzcygnICsgKCBiICsgMTAwKSArICclKSc7XHJcbiAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiMGUwZTYnXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBsLngsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWQ1ZDInXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChsLngsIDAsIGNhbnZhcy53aWR0aCAtIGwueCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgY2hhci5yZXNpemUoY2FudmFzKTtcclxuICAgICAgICBjaGFyLkRyYXdJbWFnZShjYW52YXMsIGNvbnRleHQsIGwueCk7XHJcbiAgICAgICAgbC5EcmF3SW1hZ2UoY2FudmFzLCBjb250ZXh0KTtcclxuICAgIH1cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zYXNzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFyYWN0ZXIge1xyXG4gICAgcHVibGljIGltYWdlT2JqOiBhbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2VPYmoyOiBhbnk7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzaXplOiB7XHJcbiAgICAgICAgdzogbnVtYmVyLFxyXG4gICAgICAgIGg6IG51bWJlciBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaXplMjoge1xyXG4gICAgICAgIHc6IG51bWJlcixcclxuICAgICAgICBoOiBudW1iZXIgXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNpemUgPSB7dzogMCwgaDogMH07XHJcbiAgICAgICAgdGhpcy5zaXplMiA9IHt3OiAwLCBoOiAwfTtcclxuIFxyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICdhc3NldHMvMS5wbmcnO1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlT2JqMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoyLnNyYyA9ICdhc3NldHMvMi5wbmcnO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcHVibGljIERyYXdJbWFnZShjYW52YXM6IGFueSwgY29udGV4dDogYW55LCBtb3VzZVg6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGNsaXBQcmVjZW50YWdlOiBudW1iZXIgPSAobW91c2VYIC0gKHRoaXMueCAtIHRoaXMuc2l6ZS53IC8yKSkgLyB0aGlzLnNpemUudztcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqLndpZHRoICogY2xpcFByZWNlbnRhZ2UsIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5zaXplLncgLyAyLCBcclxuICAgICAgICAgICAgdGhpcy55LCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLncgKiBjbGlwUHJlY2VudGFnZSwgXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZS5oXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iajIsIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi53aWR0aCAqIGNsaXBQcmVjZW50YWdlLCBcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iajIud2lkdGggKiAgKDEgLSBjbGlwUHJlY2VudGFnZSksIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCAtIHRoaXMuc2l6ZTIudyAqICgxIC0gY2xpcFByZWNlbnRhZ2UpICsgdGhpcy5zaXplMi53IC8gMiwgXHJcbiAgICAgICAgICAgIHRoaXMueSwgXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZTIudyAqICgxIC0gY2xpcFByZWNlbnRhZ2UpLCBcclxuICAgICAgICAgICAgdGhpcy5zaXplMi5oXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9IFxyXG4gICAgcHVibGljIHJlc2l6ZShjYW52YXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gY2FudmFzLmhlaWdodCAvIHRoaXMuaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZS5oID0gdGhpcy5pbWFnZU9iai5oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpemUudyA9IHRoaXMuaW1hZ2VPYmoud2lkdGggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iajIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2l6ZTIuaCA9IHRoaXMuaW1hZ2VPYmoyLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZTIudyA9IHRoaXMuaW1hZ2VPYmoyLndpZHRoICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGluZSB7XHJcbiAgICBwdWJsaWMgaW1hZ2VPYmo6IGFueTtcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IGFueSwgY29udGV4dDogYW55KXtcclxuICAgICAgICB0aGlzLmltYWdlT2JqID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZU9iai5zcmMgPSAnYXNzZXRzL2xpZ2h0LnBuZyc7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBwdWJsaWMgRHJhd0ltYWdlKGNhbnZhczogYW55LCBjb250ZXh0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iai5oZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgdGhpcy54IC0gdGhpcy5pbWFnZU9iai53aWR0aCAqIHNjYWxlIC8gMiwgdGhpcy55LCB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGUsIHRoaXMuaW1hZ2VPYmouaGVpZ2h0ICogc2NhbGUpO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGluZS50cyJdLCJzb3VyY2VSb290IjoiIn0=