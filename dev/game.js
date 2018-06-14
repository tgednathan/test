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
            sources: ['1'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['2'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['3'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['4'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['5'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['6'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['7'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['8'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['9'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['10'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['11'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['12'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['13'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['14'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['15'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['16'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['17'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['18'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['19'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['20'],
            invert: true,
            width: 2,
            height: 1
        },
        {
            sources: ['21'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['22'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['23'],
            invert: false,
            width: 2,
            height: 1
        },
        {
            sources: ['a', 'b'],
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
            this.imageObj.src = 'assets/characters/' + this.characterInfo.sources[0] + '.png';
            if (this.oneFile) {
                this.imageObj2.src = 'assets/characters/' + this.characterInfo.sources[0] + '.png';
            }
            else {
                this.imageObj2.src = 'assets/characters/' + this.characterInfo.sources[1] + '.png';
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
        button.style.backgroundImage = 'url(assets/characters/' + key.sources[0] + '.png)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM2MTEyMTAzN2QxNWNkODQzNzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5c3RlbXMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0NoYXJhY3RlclNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zYXNzL21haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxtQkFBWSxDQUFVLEVBQUUsQ0FBVTtRQUYzQixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ0REO0lBQUE7SUFvSkEsQ0FBQztJQWxKaUIsdUJBQWEsR0FBb0I7UUFDM0M7WUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7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QUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLHdCQUF3QixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDYixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ3hCRCx5QyIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi4vYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzNjExMjEwMzdkMTVjZDg0MzcwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcmFjdGVyIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCB4IHx8IDA7XHJcbiAgICB9IFxyXG4gICAgXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5c3RlbXMvVmVjdG9yLnRzIiwiZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJJbmZvIHtcclxuICAgIHNvdXJjZXM6IHN0cmluZ1tdO1xyXG4gICAgaW52ZXJ0OiBib29sZWFuO1xyXG4gICAgd2lkdGg6ICBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgU09VUkNFX0lNQUdFUzogQ2hhcmFjdGVySW5mb1tdID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWycxJ10sXHJcbiAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWycyJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzMnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnNCddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWyc1J10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzYnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnNyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWyc4J10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzknXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTAnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzExJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzEyJ10sXHJcbiAgICAgICAgICAgIGludmVydDogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzEzJ10sXHJcbiAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWycxNCddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTUnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTYnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTcnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTgnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMTknXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMjAnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnMjEnXSxcclxuICAgICAgICAgICAgaW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2VzOiBbJzIyJ10sXHJcbiAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlczogWycyMyddLFxyXG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZXM6IFsnYScsICdiJ10sXHJcbiAgICAgICAgICAgIGludmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhL0NvbnN0YW50cy50cyIsImltcG9ydCBjaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xyXG5pbXBvcnQgSW1hZ2VCdXR0b24gZnJvbSAnLi9VSS9pbWFnZUJ1dHRvbic7XHJcbmltcG9ydCBDaGFyYWN0ZXJTZWxlY3Rpb24gZnJvbSAnLi9VSS9DaGFyYWN0ZXJTZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJJbmZvIH0gZnJvbSAnLi9kYXRhL0NvbnN0YW50cyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIC8vY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgICBsZXQgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBsZXQgY2FudmFzV2lkdGg6IG51bWJlciA9IC43O1xyXG4gICAgXHJcbiAgICAvL29iamVjdHNcclxuICAgIGxldCBjaGFyOiBjaGFyYWN0ZXI7XHJcbiAgICBsZXQgbGluZTogTGluZSA9IG5ldyBMaW5lKGNhbnZhcywgY29udGV4dCk7XHJcblxyXG4gICAgLy91aVxyXG4gICAgbGV0IHNlbGVjdGlvbjogQ2hhcmFjdGVyU2VsZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY2hhciA9IG5ldyBjaGFyYWN0ZXIoWyczJ10pO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc2VsZWN0aW9uID0gbmV3IENoYXJhY3RlclNlbGVjdGlvbiggKGtleTogQ2hhcmFjdGVySW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmVkZ24nKTtcclxuICAgICAgICAgICAgY2hhci5DaGFyYWN0ZXJJbmZvID0ga2V5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0SW50ZXJ2YWwocmVuZGVyLCAxKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMaW5lKHg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxpbmUucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgICAgbGluZS5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICBsZXQgYjogbnVtYmVyID0gMjUgLSBNYXRoLmFicygobGluZS5wb3NpdGlvbi54IC0gY2FudmFzLndpZHRoIC8gMikpIC8gNDtcclxuICAgICAgICBpZihiIDwgMCkgYiA9IDA7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlID0gJ2ZpbHRlcjpicmlnaHRuZXNzKCcgKyAoIGIgKyAxMDApICsgJyUpJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvL2NsZWFycyB0aGUgaW1hZ2VcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vZmlsdGVyIGVmZmVjdFxyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiMGUwZTYnXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBsaW5lLnBvc2l0aW9uLngsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWQ1ZDInXHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChsaW5lLnBvc2l0aW9uLngsIDAsIGNhbnZhcy53aWR0aCAtIGxpbmUucG9zaXRpb24ueCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIC8vb2JqZWN0c1xyXG4gICAgICAgIGNoYXIuRHJhd0ltYWdlKGNhbnZhcywgY29udGV4dCwgbGluZS5wb3NpdGlvbi54KTtcclxuICAgICAgICBsaW5lLkRyYXdJbWFnZShjYW52YXMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogY2FudmFzV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIGNhbnZhc1dpZHRoO1xyXG4gICAgICAgIGNoYXIucmVzaXplKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL2V2ZW50c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICByZXNpemUoKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgeCA6IGUucGFnZVggLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcclxuICAgICAgICAgICAgeSA6IGUucGFnZVkgLSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogZS5wYWdlWCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogZS5wYWdlWSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUxpbmUocG9zLngpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlOiBhbnkpIHtcclxuICAgICAgICBsZXQgdG91Y2g6IGFueSA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICB4IDogdG91Y2guY2xpZW50WCAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB5IDogdG91Y2guY2xpZW50WSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUxpbmUocG9zLngpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC50cyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9zeXN0ZW1zL1ZlY3Rvcic7XHJcbmltcG9ydCBDb25zdGFudHMsIHsgQ2hhcmFjdGVySW5mbyB9IGZyb20gJy4vZGF0YS9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcmFjdGVyIHtcclxuICAgIHB1YmxpYyBpbWFnZU9iajogYW55O1xyXG4gICAgcHVibGljIGltYWdlT2JqMjogYW55O1xyXG4gICAgcHJpdmF0ZSBvbmVGaWxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCk7XHJcbiAgICBwcml2YXRlIHNvdXJjZTogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGNhbnZhczogYW55O1xyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVySW5mbzogQ2hhcmFjdGVySW5mbzsgICAgXHJcbiAgICBwdWJsaWMgc2l6ZToge1xyXG4gICAgICAgIHc6IG51bWJlcixcclxuICAgICAgICBoOiBudW1iZXIgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc2l6ZTI6IHtcclxuICAgICAgICB3OiBudW1iZXIsXHJcbiAgICAgICAgaDogbnVtYmVyIFxyXG4gICAgfTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKGFycmF5T2ZGaWxlczogc3RyaW5nW10pe1xyXG5cclxuICAgICAgICB0aGlzLnNpemUgPSB7dzogMCwgaDogMH07XHJcbiAgICAgICAgdGhpcy5zaXplMiA9IHt3OiAwLCBoOiAwfTtcclxuIFxyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhcmFjdGVySW5mbyA9IENvbnN0YW50cy5TT1VSQ0VfSU1BR0VTW0NvbnN0YW50cy5TT1VSQ0VfSU1BR0VTLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcHVibGljIERyYXdJbWFnZShjYW52YXM6IGFueSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBtb3VzZVg6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xpcFByZWNlbnRhZ2U6IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICBjbGlwUHJlY2VudGFnZSA9IChtb3VzZVggLSAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAyKSkgLyB0aGlzLnNpemUudyAqIDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpcFByZWNlbnRhZ2UgPSAobW91c2VYIC0gKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS53IC8yKSkgLyB0aGlzLnNpemUudztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjbGlwUHJlY2VudGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0NsaXBSZWdpb24odHJ1ZSwgY29udGV4dCwgbW91c2VYLCBjYW52YXMpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VPYmosIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoud2lkdGggLyAodGhpcy5vbmVGaWxlID8gMiA6IDEpLCBcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS53IC8gKHRoaXMub25lRmlsZSA/IDQgOiAyKSwgXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZS53IC8gKHRoaXMub25lRmlsZSA/IDIgOiAxKSwgXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZS5oXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0NsaXBSZWdpb24oZmFsc2UsIGNvbnRleHQsIG1vdXNlWCwgY2FudmFzKTtcclxuICAgICAgICBjb250ZXh0LnNjYWxlKHRoaXMuY2hhcmFjdGVySW5mby5pbnZlcnQgPyAtMSA6IDEsIDEpO1xyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqMiwgXHJcbiAgICAgICAgICAgICh0aGlzLm9uZUZpbGUgPyB0aGlzLmltYWdlT2JqMi53aWR0aCAvIDIgOiAwKSwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqLndpZHRoIC8gKHRoaXMub25lRmlsZSA/IDIgOiAxKSwgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckluZm8uaW52ZXJ0ID8gLSh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUudyAvIDQpIDogdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLncgLyAodGhpcy5vbmVGaWxlID8gNCA6IDIpLCBcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLncgLyAodGhpcy5vbmVGaWxlID8gMiA6IDEpLCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLmhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGRyYXdDbGlwUmVnaW9uKGludmVydDogYm9vbGVhbiA9IHRydWUsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbW91c2VYOiBudW1iZXIsIGNhbnZhczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhpbnZlcnQgPyAwIDogY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3VzZVgsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKG1vdXNlWCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhpbnZlcnQgPyAwIDogY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5jbGlwKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2hhcmFjdGVySW5mbygpOiBDaGFyYWN0ZXJJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2hhcmFjdGVySW5mbyh2YWx1ZTogQ2hhcmFjdGVySW5mbykge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVySW5mbyA9IHZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25lRmlsZSA9IHRoaXMuY2hhcmFjdGVySW5mby5zb3VyY2VzLmxlbmd0aCA9PT0gMTtcclxuICAgICAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICdhc3NldHMvY2hhcmFjdGVycy8nICsgdGhpcy5jaGFyYWN0ZXJJbmZvLnNvdXJjZXNbMF0gKyAnLnBuZyc7XHJcbiAgICAgICAgaWYgKHRoaXMub25lRmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2JqMi5zcmMgPSAnYXNzZXRzL2NoYXJhY3RlcnMvJyArIHRoaXMuY2hhcmFjdGVySW5mby5zb3VyY2VzWzBdICsgJy5wbmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPYmoyLnNyYyA9ICdhc3NldHMvY2hhcmFjdGVycy8nICsgdGhpcy5jaGFyYWN0ZXJJbmZvLnNvdXJjZXNbMV0gKyAnLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2l6ZShjYW52YXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICBsZXQgc2NhbGU6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUuaCA9IHRoaXMuaW1hZ2VPYmouaGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zaXplLncgPSB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGU7XHJcblxyXG4gICAgICAgIHNjYWxlID0gY2FudmFzLmhlaWdodCAvIHRoaXMuaW1hZ2VPYmoyLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUyLmggPSB0aGlzLmltYWdlT2JqMi5oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpemUyLncgPSB0aGlzLmltYWdlT2JqMi53aWR0aCAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJhY3Rlci50cyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9zeXN0ZW1zL1ZlY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcclxuICAgIHB1YmxpYyBpbWFnZU9iajogYW55O1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCk7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IGFueSwgY29udGV4dDogYW55KXtcclxuICAgICAgICB0aGlzLmltYWdlT2JqID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZU9iai5zcmMgPSAnYXNzZXRzL2xpZ2h0LnBuZyc7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBwdWJsaWMgRHJhd0ltYWdlKGNhbnZhczogYW55LCBjb250ZXh0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5pbWFnZU9iai5oZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5pbWFnZU9iai53aWR0aCAqIHNjYWxlIC8gMiwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLmltYWdlT2JqLndpZHRoICogc2NhbGUsIHRoaXMuaW1hZ2VPYmouaGVpZ2h0ICogc2NhbGUpO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGluZS50cyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vc3lzdGVtcy9WZWN0b3InO1xyXG5pbXBvcnQgY2hhcmFjdGVyIGZyb20gJy4uL2NoYXJhY3Rlcic7XHJcbmltcG9ydCBDb25zdGFudHMsIHsgQ2hhcmFjdGVySW5mbyB9IGZyb20gJy4uL2RhdGEvQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclNlbGVjdGlvbiB7XHJcbiAgICBwdWJsaWMgY2hhcmFjdGVyU2VsZWN0aW9uT2JqZWN0OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxCYWNrOiBGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rpb25PYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGFyYWN0ZXJzZWxlY3Rpb24nKVswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3RlclNlbGVjdGlvbk9iamVjdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gQ29uc3RhbnRzLlNPVVJDRV9JTUFHRVMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXBwbHlCdXR0b24oQ29uc3RhbnRzLlNPVVJDRV9JTUFHRVNbaV0sIGNhbGxCYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgcHVibGljIEFwcGx5QnV0dG9uKGtleTogQ2hhcmFjdGVySW5mbywgY2xpY2tGdW5jdGlvbjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgYnV0dG9uOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnQlVUVE9OJztcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChhc3NldHMvY2hhcmFjdGVycy8nICsga2V5LnNvdXJjZXNbMF0gKyAnLnBuZyknO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja0Z1bmN0aW9uKGtleSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdGlvbk9iamVjdC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVUkvQ2hhcmFjdGVyU2VsZWN0aW9uLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=