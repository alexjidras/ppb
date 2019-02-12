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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets.js":
/*!*******************!*\
  !*** ./assets.js ***!
  \*******************/
/*! exports provided: loadData, randInt, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randInt\", function() { return randInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return empty; });\nlet loadData = (url) => fetch(url).then((res)=>  res.ok ? res.json() : res.text().then((text) => Promise.reject(text)));\r\nString.prototype.capitalize = function() {return this.replace(/\\b\\w/g,x=>x.toUpperCase())}\r\nfunction randInt(min, max) { return Math.random() * (max - min) + min }\r\nfunction empty(el) {while (el.firstChild) el.removeChild(el.firstChild)}\r\n\n\n//# sourceURL=webpack:///./assets.js?");

/***/ }),

/***/ "./chart1.js":
/*!*******************!*\
  !*** ./chart1.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, options) => {\r\n    //var {Pret_Produs} = data[0] || 0;\r\n\tvar chart = new FusionCharts({\r\n\t\t\"type\": \"angulargauge\",\r\n\t    \"renderAt\": \"chart1\",\r\n\t    \"width\": \"100%\",\r\n\t    \"height\": \"190\",\r\n\t    \"dataFormat\": \"json\",\r\n\t     ...options\r\n\t    });\r\n\r\n\tchart.update = function(data) {\r\n\t\tvar {Pret_Produs} = data[0] || 0;\r\n\t\tthis.setJSONData({\r\n\t\t\t\"chart\": {\r\n\t\t\t  \"baseFont\": \"Nunito Sans\",\r\n\t\t\t  \"setAdaptiveMin\": \"1\",\r\n\t\t\t  \"baseFontColor\": \"#000000\",\r\n\t\t\t  // \"chartTopMargin\": \"0\",\r\n\t\t\t  // \"canvasTopMargin\": \"0\",\r\n\t\t\t  \"chartBottomMargin\": \"20\",\r\n\t\t\t  // \"chartLeftMargin\": \"30\",\r\n\t\t\t  // \"chartRightMargin\": \"10\",\r\n\t\t\t   \"showTickMarks\": \"0\",\r\n\t\t\t  // \"showTickValues\": \"0\",\r\n\t\t\t  // \"showLimits\": \"0\",\r\n\t\t\t   \"majorTMAlpha\": \"110\",\r\n\t\t\t  // \"minorTMAlpha\": \"0\",\r\n\t\t\t  \"pivotFillColor\": \"#000000\",\r\n              //\"pivotFillAlpha\": \"100\",\r\n              \"pivotBorderColor\": \"#000000\",\r\n\t\t\t  // \"pivotRadius\": \"0\",\r\n\t\t\t   //\"showPivotBorder\": \"0\",\r\n\t\t\t   \"gaugeouterradius\": \"124\",\r\n\t\t\t   \"gaugeInnerradius\": \"94\",\r\n\t\t\t   \"showGaugeBorder\": \"0\",\r\n\t\t\t   \"gaugeFillMix\": \"{light+0}\",\r\n\t\t\t   \"showBorder\": \"0\",\r\n\t\t\t  \"bgColor\": \"#1d2f57\",\r\n\t\t\t  \"bgAlpha\" : \"0\",\r\n\t\t\t  \"canvasBgAlpha\": \"0\",\r\n\t\t\t  \"transposeAnimation\":\"1\"\r\n\t\t\t},\r\n\r\n\t\t\t\"annotations\": {\r\n\t\t\t  \"groups\": [{\r\n\t\t\t      \"items\": [\r\n\t\t\t       {\r\n\t\t\t          \"id\": \"2\",\r\n\t\t\t          \"type\": \"text\",\r\n\t\t\t          \"text\": Pret_Produs,\r\n\t\t\t          \"align\": \"center\",\r\n\t\t\t          \"font\": \"Nunito Sans\",\r\n\t\t\t          \"bold\": \"1\",\r\n\t\t\t          \"fontSize\": \"32\",\r\n\t\t\t          \"color\": \"#444444\",\r\n\t\t\t          \"x\": \"$chartcenterX\",\r\n\t\t\t          \"y\": \"$chartCenterY+12\"\r\n\t\t\t      }, \r\n\t\t\t      {\r\n\t\t\t          \"id\": \"3\",\r\n\t\t\t          \"type\": \"text\",\r\n\t\t\t          \"text\": \"lei\",\r\n\t\t\t          \"align\": \"center\",\r\n\t\t\t          \"font\": \"Nunito Sans\",\r\n\t\t\t          \"bold\": \"0\",\r\n\t\t\t          \"fontSize\": \"22\",\r\n\t\t\t          \"color\": \"#444444\",\r\n\t\t\t          \"x\": \"$chartcenterX\",\r\n\t\t\t          \"y\": \"$chartCenterY + 42\"\r\n\t\t\t      }\r\n\t\t\t      ]\r\n\t\t\t  }]\r\n\t\t\t},\r\n\r\n\t\t\t\"colorRange\": {\r\n\t\t\t  \"color\": [{\r\n\t\t\t      \"minValue\": \"0\",\r\n\t\t\t      \"maxValue\": Pret_Produs,\r\n\t\t\t      \"code\": \"#000000\"\r\n\t\t\t    }\r\n\t\t\t  // },\r\n\t\t\t  // {\r\n\t\t\t  //     \"minValue\": Pret_Produs,\r\n\t\t\t  //     \"maxValue\": Pret_Plafon,\r\n\t\t\t  //     \"code\": \"#49516f\"\r\n\t\t\t  // }\r\n\t\t\t  ]\r\n\t\t\t},\r\n\r\n\t\t\t\"dials\": {\r\n\t\t\t  \"dial\": [{\r\n\t\t\t      \"value\": 16,\r\n\t\t\t      \"bgColor\": \"#000000\",\r\n                  \"borderColor\": \"#000000\",\r\n                   \"borderThickness\": \"1\",\r\n                   \"borderAlpha\": \"100\",\r\n\t\t\t      // \"borderAlpha\": \"0\",\r\n\t\t\t      // \"radius\": \"0\",\r\n\t\t\t      // \"baseRadius\": \"0\",\r\n\t\t\t      // \"rearExtension\": \"0\",\r\n\t\t\t      // \"baseWidth\": \"0\",\r\n\t\t\t      // \"showValue\": \"0\"\r\n\t\t\t  }]\r\n\t\t\t}\r\n\t\t});\r\n\t\tsecondaryCharts(data[0]);\r\n\t\treturn this;\r\n\t}\r\n\r\n\r\n\treturn chart.update(data);\r\n});\r\n\r\nfunction secondaryCharts(data) {\r\n\tdocument.getElementById(\"fuelmaxval\").innerHTML = data[\"Pret_Plafon\"] ? data[\"Pret_Plafon\"] + \" lei\" : \"-\";\r\n\tdocument.getElementById(\"stationval\").innerHTML = data[\"Nr_Statii\"] || \"-\";\r\n\tdocument.getElementById(\"chart1_1\").style.opacity = 1;\r\n\tdocument.getElementById(\"chart1_2\").style.opacity = 1;\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./chart1.js?");

/***/ }),

/***/ "./chart2.js":
/*!*******************!*\
  !*** ./chart2.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, options) => {\r\n    \r\n\r\n    var chart = new FusionCharts({\r\n        id: \"mychart\",\r\n        type: \"Column2d\",\r\n        renderAt: \"chart2\",\r\n        dataFormat: \"JSON\",\r\n        width: \"100%\",\r\n        height: \"295\",\r\n        ...options\r\n    });\r\n\r\n    chart.update = function(data) {\r\n        if(data.length<2) return;\r\n        var firstPrice = data[0][\"Pret_Produs\"], secondPrice = data[1][\"Pret_Produs\"], firstLuna=data[0][\"Luna\"].capitalize(), secondLuna = data[1][\"Luna\"].capitalize();\r\n        var percentage = (Math.abs(secondPrice-firstPrice)*100/secondPrice).toFixed(2);\r\n        this.setJSONData({\r\n            \"chart\": {\r\n                \"showBorder\": \"0\",\r\n                \"showCanvasBorder\": \"0\",\r\n                \"showAlternateHGridColor\": \"0\",\r\n                \"bgAlpha\": \"0\",\r\n                \"canvasBgAlpha\": \"0\",\r\n                \"baseFontSize\": \"16\",\r\n                \"baseFont\": \"Nunito Sans Regular\",\r\n                \"baseFontColor\": \"#000000\",\r\n                \"divLineThickness\": \"2\",\r\n                \"numberSuffix\": \" lei \",\r\n                \"showLimits\": \"0\",\r\n                \"showDivLineValues\": \"0\",\r\n                \"paletteColors\": \"#000000\",\r\n                \"usePlotGradientColor\": \"0\",\r\n                \"divLineColor\": \"#979797\",\r\n                divLineThickness: 1,\r\n                \"divLineDashed\": \"1\",\r\n                \"divLineDashLen\": \"5\",\r\n                \"valueFontSize\": \"15\",\r\n                \"canvasRightMargin\": \"200\",\r\n                \"canvasLeftMargin\": \"35\",\r\n                \"canvasBottomMargin\": \"65\",\r\n                \"canvasTopMargin\": \"50\",\r\n                \"placeValuesInside\": \"0\",\r\n                \"yAxisMaxValue\": \"25\",\r\n                \"toolTipBgcolor\": \"#484E69\",\r\n                \"toolTipPadding\": \"7\",\r\n                \"toolTipBorderRadius\": \"3\",\r\n                \"toolTipBorderAlpha\": \"30\",\r\n                \"tooltipBorderThickness\": \"0.7\",\r\n                \"toolTipColor\": \"#FDFDFD\",\r\n                \"decimals\": \"1\",\r\n                \"transposeAnimation\":\"1\",\r\n                \"formatNumberScale\": \"0\"\r\n            },\r\n\r\n            \"annotations\": {\r\n                \"groups\": [{\r\n                    \"autoscale\": \"1\",\r\n                    \"items\": [{\r\n                        \"id\": \"indicator\",\r\n                        \"type\": \"text\",\r\n                        \"text\": (secondPrice<firstPrice ? \"▼ \" : \"▲ \") + percentage + \" %\",\r\n                        \"color\": secondPrice<firstPrice ? \"#00f300\" : \"#ff4545\",\r\n                        \"fontSize\": \"30\",\r\n                        \"x\": \"$canvasEndX + 100\",\r\n                        \"y\": \"$canvasheight - 40\"\r\n                    }, {\r\n                        \"id\": \"indicator\",\r\n                        \"type\": \"text\",\r\n                        \"text\": secondPrice<firstPrice ? \"SCADERE IN PRET\" : \"CRESTERE IN PRET\",\r\n                        \"color\": \"#000000\",\r\n                        \"fontSize\": \"16\",\r\n                        \"x\": \"$canvasEndX + 100\",\r\n                        \"y\": \"$canvasheight - 10\"\r\n                    }]\r\n                }]\r\n            },\r\n\r\n            \"data\": [{\r\n                \"label\": firstLuna,\r\n                \"value\": firstPrice,\r\n                \"alpha\": \"75\"\r\n            }, {\r\n                \"label\": secondLuna,\r\n                \"value\": secondPrice\r\n            }]\r\n        });\r\n        return this;\r\n    }\r\n\r\n\r\n\r\n    return chart.update(data);\r\n});\n\n//# sourceURL=webpack:///./chart2.js?");

/***/ }),

/***/ "./chart3.js":
/*!*******************!*\
  !*** ./chart3.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, options) => {\r\n\tvar chart = new FusionCharts({\r\n\t     type: \"doughnut2d\",\r\n\t     creditLabel: false,\r\n\t     className: \"fc-doughnut2d\", \r\n\t     dataFormat: \"JSON\",\r\n\t     width: \"100%\",\r\n\t     height:\"300\",\r\n\t     renderAt: \"chart3\",\r\n\t\t  ...options\r\n\t})\r\n\r\n\tchart.update = function(data) {\r\n\t\tthis.setJSONData({\r\n\t\t    \"chart\": {\r\n\t\t      \"showBorder\": \"0\",\r\n\t\t      \"showShadow\": \"0\",\r\n\t\t      \"use3DLighting\": \"0\",\r\n\t\t      \"showLabels\": \"0\",\r\n\t\t      \"showValues\": \"1\",\r\n\t\t      \"showpercentvalues\": \"1\",\r\n\t\t      \"paletteColors\": \"#000000, #5AA9FA, #cecece\",\r\n\t\t      \"bgAlpha\": \"0\",\r\n\t\t      \"canvasBgAlpha\": \"0\",\r\n\t\t      \"doughnutRadius\": \"70\",\r\n\t\t      \"pieRadius\": \"95\",\r\n\t\t      //\"pieRadius\": \"100\",\r\n\t\t      \"numberSuffix\": \" tone \",\r\n\t\t      \"plotBorderAlpha\": \"1\",\r\n\t\t      \"toolTipBgcolor\": \"#484E69\",\r\n\t\t      \"toolTipPadding\": \"7\",\r\n\t\t      \"toolTipBorderRadius\": \"3\",\r\n\t\t      \"toolTipBorderAlpha\": \"30\",\r\n\t\t      \"tooltipBorderThickness\": \"0.7\",\r\n\t\t      \"toolTipColor\": \"#FDFDFD\",\r\n\t\t      \"baseFont\": \"Nunito Sans\",\r\n\t\t      \"baseFontSize\": \"14\",\r\n\t\t      \"baseFontColor\": \"#000000\",\r\n\t\t      \"showLegend\": \"1\",\r\n\t\t      \"legendShadow\": \"0\",\r\n\t\t      \"legendBorderAlpha\": \"0\",\r\n\t\t      \"drawCustomLegendIcon\": \"1\",\r\n\t\t      \"legendBgAlpha\": \"0\",\r\n\t\t      \"chartTopMargin\": \"-10\",\r\n\t\t      \"canvasTopMargin\": \"-10\",\r\n\t\t      \"chartBottomMargin\": \"20\",\r\n\t\t      \"canvasBottomMargin\": \"20\",\r\n\t\t     //\"legendNumColumns\": \"3\",\r\n\t\t      \"legendPosition\": \"bottom\",\r\n\t\t      \"startingAngle\": \"15\",\r\n\t\t      \"defaultCenterLabel\": \"Total <br>\"+(data.reduce((prev,el)=> prev+ +el[\"Cantitate\"], 0)/1000).toFixed(2) + \"K tone\",\r\n\t\t      \"centerLabel\": \"$label<br>$value\",\r\n\t\t      \"centerLabelBold\": \"1\",\r\n\t\t      \"centerLabelFontSize\": \"20\",\r\n\t\t      \"enableRotation\": \"1\",\r\n\t\t      \"transposeAnimation\":\"1\",\r\n\t\t      \"plotToolText\": \"<div>$label<br>$dataValue ($percentValue)<div>\",\r\n\t\t      \r\n\t\t    \r\n\t\t    },\r\n\r\n\t\t    // \"annotations\": {\r\n\t\t    //   \"groups\": [{\r\n\t\t    //     \"autoscale\":\"1\",\r\n\t\t    //     \"items\": [{\r\n\t\t    //       \"id\": \"1\",\r\n\t\t    //       \"type\": \"text\",\r\n\t\t    //       \"text\": \"ddd\",\r\n\t\t    //       \"align\": \"left\",\r\n\t\t    //       \"font\": \"Nunito Sans\",\r\n\t\t    //       \"bold\": \"0\",\r\n\t\t    //       \"fontSize\": \"14\",\r\n\t\t    //       \"color\": \"#FDFDFD\",\r\n\t\t    //       \"x\": \"$chartStartX + 15\",\r\n\t\t    //       \"y\": \"$chartEndY - 20\"\r\n\t\t    //     }]\r\n\t\t    //   }]\r\n\t\t    // },\r\n\r\n\t\t    \"data\": data.map((el)=> ({label: el[\"Nume_Produs\"], value: el[\"Cantitate\"]}))\r\n\t\t  })\r\n\t\treturn this;\r\n\t}\r\n\r\n\treturn chart.update(data);\r\n\t//return chart;\r\n\r\n});\n\n//# sourceURL=webpack:///./chart3.js?");

/***/ }),

/***/ "./chart4.js":
/*!*******************!*\
  !*** ./chart4.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(data, options) {\r\n\tvar chart = new FusionCharts({\r\n\t      type: \"multiaxisline\",\r\n\t      renderAt: \"chart4\",\r\n\t      width: \"100%\",\r\n\t      height: \"300\",\r\n\t\t...options\r\n\t});\r\n\r\n\tchart.update = function(data) {\r\n\t\tthis.setJSONData({\r\n\t\t\t  \"chart\": {\r\n\t\t\t  \t\"captionOnTop\": 1,\r\n\t\t\t  \t//drawAnchors: 1,\r\n\t\t\t    \"canvasTopMargin\": \"30\",\r\n\t\t\t  \t\"rotateLabels\": \"1\",\r\n\t\t\t  \t\"toolTipColor\": \"black\",\r\n\t\t\t    \"bgAlpha\": \"0\",\r\n\t\t\t    \"canvasBgAlpha\": \"0\",\r\n\t\t\t    \"baseFontSize\": \"14\",\r\n\t\t\t    \"baseFont\": \"Nunito Sans Regular\",\r\n\t\t\t    \"baseFontColor\": \"#000000\",\r\n\t\t\t    //\"caption\": \"Cotațiile bursiere și prețurile medii de import la benzină\",\r\n\t\t\t    //\"subcaption\": \"iunie-septembrie 2018\",\r\n\t\t\t    \"showhovereffect\": \"1\",\r\n\t\t\t    \"drawcrossline\": \"1\",\r\n\t\t\t    \"plottooltext\": \"<b>$dataValue</b> $seriesName\",\r\n\t\t\t    \"theme\": \"fusion\"\r\n\t\t\t  },\r\n\t\t\t  \"categories\": [\r\n\t\t\t    {\r\n\t\t\t      \"category\": data.map((el)=> ({label: el[\"Luna\"].capitalize()}))\r\n\t\t\t    }\r\n\t\t\t  ],\r\n\t\t\t  \"axis\": [\r\n\t\t\t  {\r\n\t\t\t\t\t\t\"title\": \"Valoare import lei/tona\",\r\n\t\t\t            \"tickWidth\": \"10\",\r\n\t\t\t            \"color\": \"#5AA9FA\",\r\n\t\t\t            //\"numberPrefix\": \"lei/tona\",\r\n\t\t\t            //axisOnLeft: \"0\",\r\n\t\t\t\t\t\tdataset: [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t  \"seriesname\": \"lei/tona\",\r\n\t\t\t\t\t\t  \"data\": data.map((el)=>({value: el[\"Pret_Lei\"]}))\r\n\t\t\t\t\t\t}]\r\n\t\t\t\t\t},\r\n\t\t\t  {\r\n\t\t\t  \taxisOnLeft: \"0\",\r\n\t\t\t\t\t\tshowAxis: 0,\r\n\t\t\t\t\t\t\"color\": \"#121212\",\r\n\t\t\t            \"numberSuffix\": \" $/tona\",\r\n\t\t\t            \"divlineDashed\": \"1\",\r\n\t\t\t\t\t\t\"dataset\": [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t  \"seriesname\": \"Platts\",\r\n\t\t\t\t\t\t  \"data\": data.map((el)=>({value: el[\"Platts\"]}))\r\n\t\t\t\t\t\t}]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\r\n\t\t\t        {\r\n\t\t\t        \taxisOnLeft: \"0\",\r\n\t\t\t            \"title\": \"Valoare import $/tona\",\r\n\t\t\t            \"tickWidth\": \"10\",\r\n\t\t\t            \"color\": \"#9b9b9b\",\r\n\t\t\t            \"divlineDashed\": \"1\",\r\n\t\t\t\t\t\t\"dataset\": [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t  \"seriesname\": \"$/tona\",\r\n\t\t\t\t\t\t  \"data\": data.map((el)=>({value: el[\"Pret_Dolari\"]}))\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\r\n\t\t});\r\n\t\treturn this;\r\n\t}\r\n\r\n\treturn chart.update(data);\r\n\r\n});;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./chart4.js?");

/***/ }),

/***/ "./chartmain.js":
/*!**********************!*\
  !*** ./chartmain.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(data, options) {\r\n\r\n// function getrandom(n, last) { return data.slice(0, n).reduce((prev,el,i)=> {\r\n//   return prev.concat({Luna: el[\"Luna\"], An: 2019+Math.floor(i/12),\"Pret_Prognoza\": +(prev[i][\"Pret_Prognoza\"]) + randInt(-1,1), \"Pret_Produs\": null})}, [{...last, Pret_Prognoza: last[\"Pret_Produs\"], Pret_Produs: null}]) };\r\n\r\n// var randomPredictions = getrandom(24, data[data.length-1]);\r\n\r\n// data = data.concat(randomPredictions);\r\n\r\nvar mainchart =  new FusionCharts({\r\n      type: \"line\",\r\n      renderAt: \"chart\",\r\n      width: \"100%\",\r\n      height: \"790\",\r\n      ...options\r\n  });\r\n\r\nvar labelStep = 3, \r\nlabelsperyear = 12/labelStep,\r\nlabelsshowed = 15,\r\nnumplot = 12*labelsshowed/labelsperyear,\r\nscrollcontent = document.getElementById(\"scrollcontent\"),\r\nscrolldiv = document.getElementById(\"scrollmain\"),\r\nscrolldivsize = +getComputedStyle(scrolldiv).getPropertyValue('width').slice(0,-2),\r\nscrollcontentsize = scrolldivsize*data.length/numplot;\r\n\r\n\r\nscrollcontent.setAttribute(\"style\", \"width:\" + scrollcontentsize + \"px\");\r\n\r\nscrolldiv.addEventListener(\"scroll\", ()=> {\r\n\tvar maxscroll = scrolldiv.scrollWidth - scrolldiv.clientWidth,\r\n\tstart = Math.round((data.length - numplot)*scrolldiv.scrollLeft/maxscroll),\r\n\tend = start + numplot;\r\n\r\n\tmainchart.setJSONData({\r\n\t    \"chart\": { \r\n\t        caption: \"PROGNOZAREA PRETURILOR LA BENZINA\",\r\n\t        chartTopMargin: 20,\r\n\t        captionFontSize: \"36\",\r\n\t        captionAlignment: \"left\",\r\n\t        subCaption: \"2018-2020\",\r\n\t        chartPadding: 0,\r\n\t        subCaptionFontSize: \"24\",\r\n\t        captionFontBold: 0,\r\n\t        captionFont: \"Nunito Sans Light\",   \t\r\n\t\t    labelStep,\r\n\t\t    labelFontSize: \"16\",\r\n\t\t    drawAnchors: 0,\r\n\t\t    anchorRadius: 3,\r\n\t\t    anchorBgColor: \"#5AE2C2\",\r\n\t\t    anchorBorderColor: \"#5AE2C2\",\r\n\t        rotateLabels : 0,\r\n\t        \"numberSuffix\": \" lei\",\r\n\t        \"theme\": \"fusion\",\r\n\t        \"lineColor\": \"#5AA9FA\",\r\n\t        \"lineThickness\": 2,\r\n\t        toolTipColor: \"black\",\r\n\t        \"bgAlpha\": \"0\",\r\n\t        \"canvasBgAlpha\": \"0\",\r\n\t        \"baseFontSize\": \"14\",\r\n\t        \"baseFont\": \"Nunito Sans Regular\",\r\n\t        \"baseFontColor\": \"#000000\",\r\n\t        yAxisMinValue: 5,\r\n\t        yAxisMaxValue: 30,\r\n\t        canvasTopMargin: 180,\r\n\t        canvasBottomMargin: \"0\" \r\n\t    },\r\n\t    data: data.slice(start,end).map((el, i)=> el[\"Pret_Produs\"] !== null\r\n\t    \t? ({ label: i%12 === 0 ? [el[\"Luna\"].capitalize().slice(0,3), el[\"An\"]].join(\"<br><br><br>\") : el[\"Luna\"].capitalize().slice(0,3), value: el[\"Pret_Produs\"]}) \r\n\t    \t: ({ label: i%12 === 0 ? [el[\"Luna\"].capitalize().slice(0,3), el[\"An\"]].join(\"<br><br><br>\") : el[\"Luna\"].capitalize().slice(0,3),value: el[\"Pret_Prognoza\"], dashed: 1}) )\r\n\t       \r\n\t});\r\n});\r\n\r\ndocument.getElementById('chart').addEventListener(\"wheel\", (e) => {\r\n\tvar delta = e.deltaY || e.detail || e.wheelDelta;\r\n\tscrolldiv.scrollLeft -= delta;\r\n});\r\n\r\nwindow.addEventListener('resize', ()=> {\r\n\tscrolldivsize = +getComputedStyle(scrolldiv).getPropertyValue('width').slice(0,-2);\r\n\tscrollcontentsize = scrolldivsize*data.length/numplot;\r\n\tscrollcontent.setAttribute(\"style\", \"width:\" + scrollcontentsize + \"px\");\r\n\tscrolldiv.scrollLeft = scrolldiv.scrollWidth - scrolldiv.clientWidth;\r\n});\r\n\r\n//initial scroll\r\nscrolldiv.scrollLeft = scrolldiv.scrollWidth - scrolldiv.clientWidth;\r\n\r\nreturn mainchart;\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./chartmain.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n/* harmony import */ var _chart1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart1 */ \"./chart1.js\");\n/* harmony import */ var _chart2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart2 */ \"./chart2.js\");\n/* harmony import */ var _chart3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart3 */ \"./chart3.js\");\n/* harmony import */ var _chart4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart4 */ \"./chart4.js\");\n/* harmony import */ var _chartmain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartmain */ \"./chartmain.js\");\n/* harmony import */ var _mountc1list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mountc1list */ \"./mountc1list.js\");\n/* harmony import */ var _mountc2list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mountc2list */ \"./mountc2list.js\");\n/* harmony import */ var _mountc3list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mountc3list */ \"./mountc3list.js\");\n/* harmony import */ var _mountc4list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mountc4list */ \"./mountc4list.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet currentyear = 2018, currentmonth = 12;\r\nlet config = {\r\n   \"showChartLoadingMessage\": false,\r\n    \"loadMessageImageAlpha\": '0',\r\n    \"loadMessageImageScale\": '0',\r\n    \"containerBackgroundColor\": \"#ffffff\",//\"#1d2f57\",\r\n    \"containerBackgroundAlpha\": \"100\",\r\n    \"creditLabel\": false,\r\n    \"dataFormat\": \"json\",\r\n}\r\n\r\n\r\nPromise.all([\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=main'),\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=1&m='+ currentmonth + \"&y=\" + currentyear),\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=2&m='+ currentmonth + \"&y=\" + currentyear),\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=3&y=' + currentyear),\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=4&y=' + currentyear),\r\n   Object(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=all')\r\n\r\n]).then(res => {\r\n    FusionCharts.ready(function() {\r\n      var mainc = Object(_chartmain__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(res[0], config).render(),\r\n      c1 = Object(_chart1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res[1], config).render(),\r\n      c2 = Object(_chart2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res[2], config).render(),\r\n      c3 = Object(_chart3__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(res[3], config).render(),\r\n      c4 = Object(_chart4__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(res[4], config).render();\r\n\r\n      Object(_mountc1list__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(res[5][0], currentmonth, currentyear, c1);\r\n      Object(_mountc2list__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(res[5][0], currentmonth, currentyear, c2);\r\n      Object(_mountc3list__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(res[5][1], currentyear, c3);\r\n      Object(_mountc4list__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(res[5][2], currentyear, c4, res[4]);\r\n      \r\n \r\n\r\n  });\r\n}).catch((e)=> alert(e));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mountc1list.js":
/*!************************!*\
  !*** ./mountc1list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, month, year, chart) => {\r\n\t\r\n    var ansel = document.getElementById(\"c1an\"),\r\n    monsel = document.getElementById(\"c1mon\"),\r\n    years = data.reduce((prev,el) => prev.includes(el[\"An\"]) ? prev : prev.concat(el[\"An\"]), []);\r\n\r\n \r\n\tfor(var x in years) {\r\n\t\tvar option = document.createElement('option');\t\t\r\n\t\toption.setAttribute('value', years[x]);\r\n\t\toption.innerHTML = years[x];\r\n\t\tansel.appendChild(option);\r\n\t}\r\n\t\r\n\tansel.value = year;\r\n\tupdatemon(year, month);\r\n\t\r\n\r\n\tansel.addEventListener(\"change\", ()=> {\r\n\t\tupdatemon(ansel.value);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=1&m='+ monsel.value + \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\t\r\n\t})\r\n\r\n\tmonsel.addEventListener(\"change\", ()=> {\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=1&m='+ monsel.value + \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\r\n\t})\r\n\r\n\tfunction updatemon(an, month) {\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(monsel);\r\n\t\tvar mon = data.filter((el) => el[\"An\"] == an);\r\n\t\tif(mon.length) {\r\n\t\t\tfor(var y in mon) {\r\n\t\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\t\toption.setAttribute('value', mon[y][\"ID_Luna\"]);\r\n\t\t\t\toption.innerHTML = mon[y][\"Luna\"];\r\n\t\t\t\tmonsel.appendChild(option);\r\n\t\t    }\r\n\t\t    monsel.value = month || mon[0][\"ID_Luna\"] || \"\";\r\n\r\n\t\t}\r\n\t \t\r\n\t}\r\n\r\n\t  \r\n});\n\n//# sourceURL=webpack:///./mountc1list.js?");

/***/ }),

/***/ "./mountc2list.js":
/*!************************!*\
  !*** ./mountc2list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, month, year, chart, chartdata) => {\r\n\t\r\n    var ansel = document.getElementById(\"c2an\"),\r\n    monsel1 = document.getElementById(\"c2mon1\"),\r\n    monsel2 = document.getElementById(\"c2mon2\"),\r\n    years = data.reduce((prev,el) => el[\"An\"]<=year && !prev.includes(el[\"An\"]) ? prev.concat(el[\"An\"]) : prev, []);\r\n\r\n console.log(data);\r\n\tfor(var x in years) {\r\n\t\tvar option = document.createElement('option');\t\t\r\n\t\toption.setAttribute('value', years[x]);\r\n\t\toption.innerHTML = years[x];\r\n\t\tansel.appendChild(option);\r\n\t}\r\n\r\n\tansel.value = year;\r\n\tupdatemon(year, month);\r\n\t\r\n\r\n\tansel.addEventListener(\"change\", ()=> {\r\n\t\tupdatemon(ansel.value);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=2&m='+ monsel1.value + \"&m2=\" + monsel2.value + \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\t\r\n\t})\r\n\r\n\tmonsel1.addEventListener(\"change\", ()=> {\r\n\t\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=2&m='+ monsel2.value + \"&m2=\" + monsel1.value +  \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\r\n\t})\r\n\tmonsel2.addEventListener(\"change\", ()=> {\r\n\t\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=2&m='+ monsel2.value + \"&m2=\" + monsel1.value +  \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\r\n\t})\r\n\r\n\tfunction updatemon(an, month) {\r\n\t\t\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(monsel1);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(monsel2);\r\n\t\tvar mon = data.filter((el) => el[\"An\"] == an);\r\n\t\tif(mon.length) {\r\n\t\t\tfor(var y in mon) {\r\n\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\toption.setAttribute('value', mon[y][\"ID_Luna\"]);\r\n\t\t\toption.innerHTML = mon[y][\"Luna\"];\r\n\t\t\tmonsel1.appendChild(option);\r\n\t\t    }\r\n\t\t    for(var y in mon) {\r\n\t\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\t\toption.setAttribute('value', mon[y][\"ID_Luna\"]);\r\n\t\t\t\toption.innerHTML = mon[y][\"Luna\"];\r\n\t\t\t\tmonsel2.appendChild(option);\r\n\t\t    }\r\n\t\t    \r\n\t\t    monsel2.value = month || mon[mon.length-1][\"ID_Luna\"];\r\n\t\t    monsel1.value = monsel2.value-3>0 ? monsel2.value-3 : 1;\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n\t  \r\n});\n\n//# sourceURL=webpack:///./mountc2list.js?");

/***/ }),

/***/ "./mountc3list.js":
/*!************************!*\
  !*** ./mountc3list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, year, chart) => {\r\n\t\r\n    var ansel = document.getElementById(\"c3an\"),\r\n    persel = document.getElementById(\"c3per\"),\r\n    years = data.reduce((prev,el) => prev.includes(el[\"An\"]) ? prev : prev.concat(el[\"An\"]), []);\r\n\r\n \r\n\tfor(var x in years) {\r\n\t\tvar option = document.createElement('option');\t\t\r\n\t\toption.setAttribute('value', years[x]);\r\n\t\toption.innerHTML = years[x];\r\n\t\tansel.appendChild(option);\r\n\t}\r\n\tupdateper(year);\r\n\t\r\n\r\n\tansel.addEventListener(\"change\", ()=> {\r\n\t\tupdateper(ansel.value);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=3&p='+ persel.value + \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\t\r\n\t})\r\n\r\n\tpersel.addEventListener(\"change\", ()=> {\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=3&p='+ persel.value + \"&y=\" + ansel.value ).then((newdata) => {\r\n\t\t\tchart.update(newdata);\r\n\r\n\t\t})\r\n\t})\r\n\r\n\tfunction updateper(an) {\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(persel);\r\n\t\tvar per = data.filter((el) => el[\"An\"] == an);\r\n\t\tif(per.length) {\r\n\t\t\tfor(var y in per) {\r\n\t\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\t\toption.setAttribute('value', per[y][\"ID_Perioada\"]);\r\n\t\t\t\toption.innerHTML = per[y][\"Perioada\"];\r\n\t\t\t\tpersel.appendChild(option);\r\n\t\t    }\r\n\t\t    persel.value = per[0][\"ID_Perioada\"] || \"\";\r\n\t\t}\r\n\t\t\t\r\n\t}\r\n\r\n\t  \r\n});\n\n//# sourceURL=webpack:///./mountc3list.js?");

/***/ }),

/***/ "./mountc4list.js":
/*!************************!*\
  !*** ./mountc4list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./assets.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, year, chart, chartdata) => {\r\n\t\r\n    var ansel = document.getElementById(\"c4an\"),\r\n    monsel1 = document.getElementById(\"c4mon1\"),\r\n    monsel2 = document.getElementById(\"c4mon2\"),\r\n    years = data.reduce((prev,el) => prev.includes(el[\"An\"]) ? prev : prev.concat(el[\"An\"]), []);\r\n\r\n\tfor(var x in years) {\r\n\t\tvar option = document.createElement('option');\t\t\r\n\t\toption.setAttribute('value', years[x]);\r\n\t\toption.innerHTML = years[x];\r\n\t\tansel.appendChild(option);\r\n\t}\r\n\t\r\n\tupdatemon(year);\r\n\t\r\n\r\n\tansel.addEventListener(\"change\", ()=> {\r\n\t\tupdatemon(ansel.value);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"loadData\"])('./api.php?g=4&y=' + ansel.value).then((newdata) => {\r\n\t\t\tchartdata = newdata;\r\n\t\t\tchart.update(chartdata);\r\n\r\n\t\t})\t\r\n\t})\r\n\r\n\tmonsel1.addEventListener(\"change\", ()=> {\t\r\n\t\tchart.update(chartdata.slice(monsel1.value-1, monsel2.value));\r\n\r\n\t})\r\n\tmonsel2.addEventListener(\"change\", ()=> {\t\r\n\t\tchart.update(chartdata.slice(monsel1.value-1, monsel2.value));\r\n        \r\n\t})\r\n\r\n\tfunction updatemon(an) {\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(monsel1);\r\n\t\tObject(_assets__WEBPACK_IMPORTED_MODULE_0__[\"empty\"])(monsel2);\r\n\t\tvar mon = data.filter((el) => el[\"An\"] == an);\r\n\t\tif(mon.length) {\r\n\t\t\tfor(var y in mon) {\r\n\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\toption.setAttribute('value', mon[y][\"ID_Luna\"]);\r\n\t\t\toption.innerHTML = mon[y][\"Luna\"];\r\n\t\t\tmonsel1.appendChild(option);\r\n\t\t\t\r\n\t\t    }\r\n\t        for(var y in mon) {\r\n\t\t\t\tvar option = document.createElement('option');\t\t\r\n\t\t\t\toption.setAttribute('value', mon[y][\"ID_Luna\"]);\r\n\t\t\t\toption.innerHTML = mon[y][\"Luna\"];\r\n\t\t\t\tmonsel2.appendChild(option);\r\n\t\t\t\t\r\n\t\t    }\r\n\r\n\t\t    monsel1.value = mon[0][\"ID_Luna\"] || \"\";\r\n\t\t    monsel2.value = mon[mon.length-1][\"ID_Luna\"] || \"\";  \r\n\t\t}\r\n\t\t\t\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./mountc4list.js?");

/***/ })

/******/ });