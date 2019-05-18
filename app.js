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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function () {
        //the start function goes here
        function App() {
            var _this = this;
            this.fromShowed = false;
            this.data = this.loadFile('./assets/projects.json');
            this.showButton = document.getElementsByClassName('createnewPartButton')[0];
            this.createForm = document.getElementsByClassName('createWrapper')[0];
            this.chooseMessage = document.getElementsByClassName('chooseMessage')[0];
            this.questionPanel = document.getElementsByClassName('questionPanel')[0];
            this.consequenceImage = document.getElementsByClassName('consequenceImage')[0];
            this.aboutPage = document.getElementsByClassName('aboutwrapper')[0];
            this.aboutButton = document.getElementsByClassName("about")[0];
            this.aboutButton.addEventListener('click', function () { _this.ToggleAboutPage(false); });
            this.storyPage = document.getElementsByClassName('storywrapper')[0];
            this.storyButton = document.getElementsByClassName("story")[0];
            this.storyButton.addEventListener('click', function () { _this.ToggleAboutPage(true); });
            var objImg = new Image();
            objImg.src = this.consequenceImage.src;
            if (objImg.complete) {
                this.consequenceImage.classList.add('show');
            }
            if (END == 1) {
                this.showButton.classList.add('hide');
                this.questionPanel.innerHTML = "this is the end of this branch.";
            }
            if (START == 1) {
                this.chooseMessage.classList.add('hide');
                //this.chooseMessage.innerHTML = "Start of the story!";
            }
            this.ToggleAboutPage(true);
            this.showButton.addEventListener('click', function () {
                _this.fromShowed = !_this.fromShowed;
                _this.ToggleShow();
            });
            document.onload = function () {
                //window.alert("Image loaded: " + this.consequenceImage.complete);
            };
        }
        App.prototype.ToggleShow = function () {
            if (this.fromShowed) {
                this.createForm.classList.add('show');
                this.createForm.scrollIntoView({
                    behavior: 'smooth'
                });
                this.showButton.innerHTML = 'hide';
            }
            else {
                this.createForm.classList.remove('show');
                this.showButton.innerHTML = 'Create your own path!';
            }
        };
        App.prototype.ToggleAboutPage = function (about) {
            if (about) {
                this.aboutPage.classList.add('hide');
                this.storyPage.classList.remove('hide');
            }
            else {
                this.aboutPage.classList.remove('hide');
                this.storyPage.classList.add('hide');
            }
        };
        App.cap = function (value, min, max) {
            return Math.min(Math.max(value, min), max);
        };
        App.getQueryVariable = function (variable) {
            var query = window.location.href.substring(1);
            var startVar = query.split('?');
            if (startVar.length > 1) {
                var vars = startVar[1].split('&');
                console.log('q', query, startVar, vars);
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    console.log('pair', pair);
                    if (pair[0] === variable) {
                        return pair[1];
                    }
                }
            }
            return -1;
        };
        App.prototype.loadFile = function (url) {
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            var data;
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    data = JSON.parse(request.responseText);
                    console.log('data', data);
                }
                else {
                    console.log('We reached our target server, but it returned an error');
                }
            };
            request.onerror = function () {
                console.log('There was a connection error of some sort');
                // There was a connection error of some sort
            };
            request.send();
            return data;
        };
        return App;
    }());
    exports.default = App;
    window.addEventListener('load', function () {
        new App();
    }, false);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDUyYWE3OGIwNTQzNTkxNWZlZGEiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Z0VDN0RBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSw4QkFBOEIsRUFBRTtBQUNwRztBQUNBO0FBQ0Esb0VBQW9FLDZCQUE2QixFQUFFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi4vYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1MmFhNzhiMDU0MzU5MTVmZWRhIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdGhlIHN0YXJ0IGZ1bmN0aW9uIGdvZXMgaGVyZVxyXG4gICAgICAgIGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5mcm9tU2hvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubG9hZEZpbGUoJy4vYXNzZXRzL3Byb2plY3RzLmpzb24nKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlbmV3UGFydEJ1dHRvbicpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVXcmFwcGVyJylbMF07XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nob29zZU1lc3NhZ2UnKVswXTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVlc3Rpb25QYW5lbCcpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNlcXVlbmNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb25zZXF1ZW5jZUltYWdlJylbMF07XHJcbiAgICAgICAgICAgIHRoaXMuYWJvdXRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXR3cmFwcGVyJylbMF07XHJcbiAgICAgICAgICAgIHRoaXMuYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWJvdXRcIilbMF07XHJcbiAgICAgICAgICAgIHRoaXMuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IF90aGlzLlRvZ2dsZUFib3V0UGFnZShmYWxzZSk7IH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3J5d3JhcHBlcicpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0b3J5XCIpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBfdGhpcy5Ub2dnbGVBYm91dFBhZ2UodHJ1ZSk7IH0pO1xyXG4gICAgICAgICAgICB2YXIgb2JqSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIG9iakltZy5zcmMgPSB0aGlzLmNvbnNlcXVlbmNlSW1hZ2Uuc3JjO1xyXG4gICAgICAgICAgICBpZiAob2JqSW1nLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNlcXVlbmNlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChFTkQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25QYW5lbC5pbm5lckhUTUwgPSBcInRoaXMgaXMgdGhlIGVuZCBvZiB0aGlzIGJyYW5jaC5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoU1RBUlQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jaG9vc2VNZXNzYWdlLmlubmVySFRNTCA9IFwiU3RhcnQgb2YgdGhlIHN0b3J5IVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuVG9nZ2xlQWJvdXRQYWdlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mcm9tU2hvd2VkID0gIV90aGlzLmZyb21TaG93ZWQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5Ub2dnbGVTaG93KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5hbGVydChcIkltYWdlIGxvYWRlZDogXCIgKyB0aGlzLmNvbnNlcXVlbmNlSW1hZ2UuY29tcGxldGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHAucHJvdG90eXBlLlRvZ2dsZVNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyb21TaG93ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCdXR0b24uaW5uZXJIVE1MID0gJ2hpZGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0J1dHRvbi5pbm5lckhUTUwgPSAnQ3JlYXRlIHlvdXIgb3duIHBhdGghJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwLnByb3RvdHlwZS5Ub2dnbGVBYm91dFBhZ2UgPSBmdW5jdGlvbiAoYWJvdXQpIHtcclxuICAgICAgICAgICAgaWYgKGFib3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFib3V0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFib3V0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcC5jYXAgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcC5nZXRRdWVyeVZhcmlhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0VmFyID0gcXVlcnkuc3BsaXQoJz8nKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0VmFyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YXJzID0gc3RhcnRWYXJbMV0uc3BsaXQoJyYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxJywgcXVlcnksIHN0YXJ0VmFyLCB2YXJzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWlyJywgcGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhaXJbMF0gPT09IHZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWlyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHAucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2VzcyFcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhIGNvbm5lY3Rpb24gZXJyb3Igb2Ygc29tZSBzb3J0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVyZSB3YXMgYSBjb25uZWN0aW9uIGVycm9yIG9mIHNvbWUgc29ydFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gQXBwO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5ldyBBcHAoKTtcclxuICAgIH0sIGZhbHNlKTtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHMvYXBwLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=