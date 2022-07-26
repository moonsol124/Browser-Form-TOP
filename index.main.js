"use strict";
(self["webpackChunkbrowser_form_top"] = self["webpackChunkbrowser_form_top"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 16px;\n}\n\nbody {\n}\n\n.template {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    width: 100%;\n    overflow: auto;\n}\n\n.content {\n    width: 90%;\n    height: 90vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4fr 10fr;\n    padding: 2rem;\n    border: 1px solid rgb(166, 166, 255);\n    border-radius: 1rem;\n}\n\n.title {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 1rem;\n}\n\n.input-container {\n    border-radius: 16px;\n    padding: 1rem;\n    display: grid;\n    gap: 5px;\n}\n\n.error-msg {\n    background-color: rgb(255, 191, 191);\n    border-radius: 5px;\n    padding: 2px 5px;\n}\n\n.input-error {\n    border: 1px solid red;\n}\n\n.input-container > label {\n\n}\n\n.input-container > input, select {\n    width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;IAC5B,aAAa;IACb,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;AAEA;;AAEA;IACI,WAAW;AACf","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 16px;\n}\n\nbody {\n}\n\n.template {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    width: 100%;\n    overflow: auto;\n}\n\n.content {\n    width: 90%;\n    height: 90vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4fr 10fr;\n    padding: 2rem;\n    border: 1px solid rgb(166, 166, 255);\n    border-radius: 1rem;\n}\n\n.title {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 1rem;\n}\n\n.input-container {\n    border-radius: 16px;\n    padding: 1rem;\n    display: grid;\n    gap: 5px;\n}\n\n.error-msg {\n    background-color: rgb(255, 191, 191);\n    border-radius: 5px;\n    padding: 2px 5px;\n}\n\n.input-error {\n    border: 1px solid red;\n}\n\n.input-container > label {\n\n}\n\n.input-container > input, select {\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/countryList.js":
/*!****************************!*\
  !*** ./src/countryList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countryList)
/* harmony export */ });
function countryList() {
    const cl = [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ];
      return cl;
  }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _countryList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countryList.js */ "./src/countryList.js");




// Email, Country, Zip Code, Password and Password Confirmation fields.

function makeTitle() {
    const title = document.createElement('div');
    title.className = 'title';
    const h1 = document.createElement('h1');
    h1.textContent = 'User Submit Form';
    title.appendChild (h1);

    return title;
}

//creating a factory function for inputs
const Input = (type, id, name) => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.setAttribute('for', id);
    label.textContent = name[0].toUpperCase()+name.slice(1, name.length);
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    container.append(label, input, span);
    container.className = 'input-container';

    return {container};
}

const CountryList = () => {
    const cl = (0,_countryList_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const container = document.createElement('div');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const span = document.createElement('span');

    label.setAttribute('for', 'country-list');
    label.textContent = 'Choose your Country';
    select.setAttribute('name', 'country-list');
    select.setAttribute('id', 'country-list');
    for (let i = 0; i < cl.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', cl[i]);
        option.textContent = cl[i];
        select.appendChild(option);
    }
    container.append(label, select, span);
    container.className = 'input-container';

    return {container};
}

const ZipCode = () => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.setAttribute('for', 'zip-code');
    label.textContent = 'Enter your zip code';
    input.setAttribute('id', 'zip-code');
    input.setAttribute('name', 'zip-code');
    input.setAttribute('type', 'text');
    input.setAttribute('pattern', '[0-9]{4}[A-Za-z]{2}');

    container.append(label, input, span);
    container.className = 'input-container';
    return {container};
}

const SubmitBtn = () => {
    const btnDiv = document.createElement ('div');
    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    btn.className = 'submit-btn';

    btnDiv.appendChild(btn);
    btnDiv.setAttribute('style', 'display:flex; justify-content: center; align-items: center');
    return {btnDiv};
}

function checkErrors(input) {
    const span = document.querySelector(`#${input.id}+span`);
    span.className = 'error-msg';
    if (input.validity.valueMissing) {
        input.classList.add('input-error');
        span.textContent = "This is a required field.";
    }
    else if (input.validity.typeMismatch) {
        input.classList.add('input-error');
        span.textContent = 'Use a right format.';
    }
    else if (input.validity.patternMismatch) {
        input.classList.add('input-error');
        span.textContent = 'Pattern is not correct.';
    }
    else if (input.validity.valid) {
        input.classList.remove('input-error');
        span.textContent = "";
        span.className = '';
    }
}

function checkPasswords(passwords) {
    const inputs = Array.from(document.querySelectorAll('[type=password]'));
    console.log(inputs);
    if (passwords[0] === passwords[1]) {
        inputs.forEach (input => {
            const span = document.querySelector(`#${input.id}+span`);
            span.textContent = "";
            span.className = '';
        })
    }
    else {
        console.log ("no");
        inputs.forEach (input => {
            const span = document.querySelector(`#${input.id}+span`);
            span.textContent = "Passwords do not match.";
            span.className = 'error-msg';
        })
    }
}

function makeRequired() {
    const inputs = Array.from(document.querySelectorAll('input, select'));
    inputs.forEach (input => {
        input.setAttribute("required", "");
        input.required = true;
        input.addEventListener('input', e => {
            checkErrors(input);
        })
    })
}

function makeForm() {
    const form = document.createElement('form');
    form.setAttribute("novalidate", "");
    form.novalidate = false; 
    const userEmail = Input('email', 'email', 'email');
    const userCountry = CountryList();
    const userZipCode = ZipCode();
    const userPassword1 = Input('password', 'password1', 'password1');
    const userPassword2 = Input('password', 'password2', 'password2');
    userPassword1.container.children[0].textContent = 'Password';
    userPassword2.container.children[0].textContent = 'Confirm password';
    const btn = SubmitBtn();
    form.append(userEmail.container, userCountry.container, 
        userZipCode.container, userPassword1.container, 
        userPassword2.container, btn.btnDiv);
    form.addEventListener('submit', e => {
        const passwords = [];
        const inputs = Array.from(document.querySelectorAll('input', 'select'));
        inputs.forEach(input => {
            e.preventDefault();
            checkErrors(input);
            if (input.type === 'password') {
                passwords.push(input.value);
            }
        })
        checkPasswords(passwords);
    })
    return form;
}

function makeContent() {
    const content = document.createElement('div');
    content.className = 'content';
    content.append (makeTitle(), makeForm());
    
    return content;
}

function makeTemplate() {
    const div = document.createElement('div');
    div.className = 'template';

    div.appendChild(makeContent());
    window.addEventListener('load', e => {
        makeRequired();
    })
    return div;
}

document.body.appendChild(makeTemplate());
//                                FACTORY FUNCTION 
// const testFunction = (n1, n2) => {
//     const i = n1;
//     const j = n2;

//     const sum = () => {
//         return i+j;
//     }

//     return {sum};
// }

// const number1 = testFunction(4,2);
// console.log (number1);
// console.log (testFunction);



//                                   CONSTRUCTOR
// function student(name) {
//     this.name = name;

//     this.introduceSelf = () => {
//         console.log ("Hi, my name is "+this.name);
//     }
// } 
// const maria = new student('Maria');
// maria.introduceSelf();





//                                      CLASS
// class student {
//     constructor(name) {
//         this.name = name;
//     }

//     sayName() {
//         console.log ("Hi, my name is "+this.name);
//     }
// }

// const jose = new student('Jose');
// jose.sayName();

//                                     MODUEL

// const myModule = (function() {
//     variables are private
//     const i = 1;
//     const j = 2;

//     the function is public
//     const sum = () => {
//         return i+j;
//     }

//     what is returned becomes public;
//     return {sum};
// })();

// console.log (myModule);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1BxQjtBQUNzQjs7O0FBRzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxlQUFlLDJEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxFQUFFLFNBQVMsRUFBRTs7QUFFdEQ7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELHlCQUF5QjtBQUN6RSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxTQUFTO0FBQzdEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsSUFBSTs7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItZm9ybS10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Jyb3dzZXItZm9ybS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jyb3dzZXItZm9ybS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWZvcm0tdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Jyb3dzZXItZm9ybS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1mb3JtLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1mb3JtLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWZvcm0tdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jyb3dzZXItZm9ybS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWZvcm0tdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1mb3JtLXRvcC8uL3NyYy9jb3VudHJ5TGlzdC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWZvcm0tdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMTBmcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NiwgMTY2LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTEsIDE5MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXG59XFxuXFxuLmlucHV0LWVycm9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyID4gbGFiZWwge1xcblxcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQsIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxufVxcblxcbi50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDEwZnI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjYsIDE2NiwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkxLCAxOTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxufVxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0LCBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudHJ5TGlzdCgpIHtcbiAgICBjb25zdCBjbCA9IFtcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiLFxuICAgICAgICBcIsOFbGFuZCBJc2xhbmRzXCIsXG4gICAgICAgIFwiQWxiYW5pYVwiLFxuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJBbWVyaWNhbiBTYW1vYVwiLFxuICAgICAgICBcIkFuZG9ycmFcIixcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJBbmd1aWxsYVwiLFxuICAgICAgICBcIkFudGFyY3RpY2FcIixcbiAgICAgICAgXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiQXJtZW5pYVwiLFxuICAgICAgICBcIkFydWJhXCIsXG4gICAgICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkF6ZXJiYWlqYW5cIixcbiAgICAgICAgXCJCYWhhbWFzICh0aGUpXCIsXG4gICAgICAgIFwiQmFocmFpblwiLFxuICAgICAgICBcIkJhbmdsYWRlc2hcIixcbiAgICAgICAgXCJCYXJiYWRvc1wiLFxuICAgICAgICBcIkJlbGFydXNcIixcbiAgICAgICAgXCJCZWxnaXVtXCIsXG4gICAgICAgIFwiQmVsaXplXCIsXG4gICAgICAgIFwiQmVuaW5cIixcbiAgICAgICAgXCJCZXJtdWRhXCIsXG4gICAgICAgIFwiQmh1dGFuXCIsXG4gICAgICAgIFwiQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZilcIixcbiAgICAgICAgXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFxuICAgICAgICBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIkJvdXZldCBJc2xhbmRcIixcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnkgKHRoZSlcIixcbiAgICAgICAgXCJCcnVuZWkgRGFydXNzYWxhbVwiLFxuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiQnVya2luYSBGYXNvXCIsXG4gICAgICAgIFwiQnVydW5kaVwiLFxuICAgICAgICBcIkNhYm8gVmVyZGVcIixcbiAgICAgICAgXCJDYW1ib2RpYVwiLFxuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiQ2FuYWRhXCIsXG4gICAgICAgIFwiQ2F5bWFuIElzbGFuZHMgKHRoZSlcIixcbiAgICAgICAgXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSlcIixcbiAgICAgICAgXCJDaGFkXCIsXG4gICAgICAgIFwiQ2hpbGVcIixcbiAgICAgICAgXCJDaGluYVwiLFxuICAgICAgICBcIkNocmlzdG1hcyBJc2xhbmRcIixcbiAgICAgICAgXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKVwiLFxuICAgICAgICBcIkNvbG9tYmlhXCIsXG4gICAgICAgIFwiQ29tb3JvcyAodGhlKVwiLFxuICAgICAgICBcIkNvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCIsXG4gICAgICAgIFwiQ29uZ28gKHRoZSlcIixcbiAgICAgICAgXCJDb29rIElzbGFuZHMgKHRoZSlcIixcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiQ3JvYXRpYVwiLFxuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJDdXJhw6dhb1wiLFxuICAgICAgICBcIkN5cHJ1c1wiLFxuICAgICAgICBcIkN6ZWNoaWFcIixcbiAgICAgICAgXCJDw7R0ZSBkJ0l2b2lyZVwiLFxuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJEamlib3V0aVwiLFxuICAgICAgICBcIkRvbWluaWNhXCIsXG4gICAgICAgIFwiRG9taW5pY2FuIFJlcHVibGljICh0aGUpXCIsXG4gICAgICAgIFwiRWN1YWRvclwiLFxuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxuICAgICAgICBcIkVyaXRyZWFcIixcbiAgICAgICAgXCJFc3RvbmlhXCIsXG4gICAgICAgIFwiRXN3YXRpbmlcIixcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIkZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXVwiLFxuICAgICAgICBcIkZhcm9lIElzbGFuZHMgKHRoZSlcIixcbiAgICAgICAgXCJGaWppXCIsXG4gICAgICAgIFwiRmlubGFuZFwiLFxuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkZyZW5jaCBHdWlhbmFcIixcbiAgICAgICAgXCJGcmVuY2ggUG9seW5lc2lhXCIsXG4gICAgICAgIFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpXCIsXG4gICAgICAgIFwiR2Fib25cIixcbiAgICAgICAgXCJHYW1iaWEgKHRoZSlcIixcbiAgICAgICAgXCJHZW9yZ2lhXCIsXG4gICAgICAgIFwiR2VybWFueVwiLFxuICAgICAgICBcIkdoYW5hXCIsXG4gICAgICAgIFwiR2licmFsdGFyXCIsXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiR3JlZW5sYW5kXCIsXG4gICAgICAgIFwiR3JlbmFkYVwiLFxuICAgICAgICBcIkd1YWRlbG91cGVcIixcbiAgICAgICAgXCJHdWFtXCIsXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiR3Vlcm5zZXlcIixcbiAgICAgICAgXCJHdWluZWFcIixcbiAgICAgICAgXCJHdWluZWEtQmlzc2F1XCIsXG4gICAgICAgIFwiR3V5YW5hXCIsXG4gICAgICAgIFwiSGFpdGlcIixcbiAgICAgICAgXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcbiAgICAgICAgXCJIb2x5IFNlZSAodGhlKVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCIsXG4gICAgICAgIFwiSG9uZyBLb25nXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIkljZWxhbmRcIixcbiAgICAgICAgXCJJbmRpYVwiLFxuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIklyZWxhbmRcIixcbiAgICAgICAgXCJJc2xlIG9mIE1hblwiLFxuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiSmFtYWljYVwiLFxuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiSmVyc2V5XCIsXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiS2F6YWtoc3RhblwiLFxuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiS2lyaWJhdGlcIixcbiAgICAgICAgXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG4gICAgICAgIFwiS29yZWEgKHRoZSBSZXB1YmxpYyBvZilcIixcbiAgICAgICAgXCJLdXdhaXRcIixcbiAgICAgICAgXCJLeXJneXpzdGFuXCIsXG4gICAgICAgIFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSlcIixcbiAgICAgICAgXCJMYXR2aWFcIixcbiAgICAgICAgXCJMZWJhbm9uXCIsXG4gICAgICAgIFwiTGVzb3Rob1wiLFxuICAgICAgICBcIkxpYmVyaWFcIixcbiAgICAgICAgXCJMaWJ5YVwiLFxuICAgICAgICBcIkxpZWNodGVuc3RlaW5cIixcbiAgICAgICAgXCJMaXRodWFuaWFcIixcbiAgICAgICAgXCJMdXhlbWJvdXJnXCIsXG4gICAgICAgIFwiTWFjYW9cIixcbiAgICAgICAgXCJNYWRhZ2FzY2FyXCIsXG4gICAgICAgIFwiTWFsYXdpXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIixcbiAgICAgICAgXCJNYWxkaXZlc1wiLFxuICAgICAgICBcIk1hbGlcIixcbiAgICAgICAgXCJNYWx0YVwiLFxuICAgICAgICBcIk1hcnNoYWxsIElzbGFuZHMgKHRoZSlcIixcbiAgICAgICAgXCJNYXJ0aW5pcXVlXCIsXG4gICAgICAgIFwiTWF1cml0YW5pYVwiLFxuICAgICAgICBcIk1hdXJpdGl1c1wiLFxuICAgICAgICBcIk1heW90dGVcIixcbiAgICAgICAgXCJNZXhpY29cIixcbiAgICAgICAgXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwiLFxuICAgICAgICBcIk1vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZilcIixcbiAgICAgICAgXCJNb25hY29cIixcbiAgICAgICAgXCJNb25nb2xpYVwiLFxuICAgICAgICBcIk1vbnRlbmVncm9cIixcbiAgICAgICAgXCJNb250c2VycmF0XCIsXG4gICAgICAgIFwiTW9yb2Njb1wiLFxuICAgICAgICBcIk1vemFtYmlxdWVcIixcbiAgICAgICAgXCJNeWFubWFyXCIsXG4gICAgICAgIFwiTmFtaWJpYVwiLFxuICAgICAgICBcIk5hdXJ1XCIsXG4gICAgICAgIFwiTmVwYWxcIixcbiAgICAgICAgXCJOZXRoZXJsYW5kcyAodGhlKVwiLFxuICAgICAgICBcIk5ldyBDYWxlZG9uaWFcIixcbiAgICAgICAgXCJOZXcgWmVhbGFuZFwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiLFxuICAgICAgICBcIk5pZ2VyICh0aGUpXCIsXG4gICAgICAgIFwiTmlnZXJpYVwiLFxuICAgICAgICBcIk5pdWVcIixcbiAgICAgICAgXCJOb3Jmb2xrIElzbGFuZFwiLFxuICAgICAgICBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKVwiLFxuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIk9tYW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiLFxuICAgICAgICBcIlBhbGF1XCIsXG4gICAgICAgIFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFxuICAgICAgICBcIlBhbmFtYVwiLFxuICAgICAgICBcIlBhcHVhIE5ldyBHdWluZWFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiLFxuICAgICAgICBcIlBlcnVcIixcbiAgICAgICAgXCJQaGlsaXBwaW5lcyAodGhlKVwiLFxuICAgICAgICBcIlBpdGNhaXJuXCIsXG4gICAgICAgIFwiUG9sYW5kXCIsXG4gICAgICAgIFwiUG9ydHVnYWxcIixcbiAgICAgICAgXCJQdWVydG8gUmljb1wiLFxuICAgICAgICBcIlFhdGFyXCIsXG4gICAgICAgIFwiUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhXCIsXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIlJ1c3NpYW4gRmVkZXJhdGlvbiAodGhlKVwiLFxuICAgICAgICBcIlJ3YW5kYVwiLFxuICAgICAgICBcIlLDqXVuaW9uXCIsXG4gICAgICAgIFwiU2FpbnQgQmFydGjDqWxlbXlcIixcbiAgICAgICAgXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxuICAgICAgICBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICAgICAgICBcIlNhaW50IEx1Y2lhXCIsXG4gICAgICAgIFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcbiAgICAgICAgXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXG4gICAgICAgIFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcbiAgICAgICAgXCJTYW1vYVwiLFxuICAgICAgICBcIlNhbiBNYXJpbm9cIixcbiAgICAgICAgXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIixcbiAgICAgICAgXCJTZW5lZ2FsXCIsXG4gICAgICAgIFwiU2VyYmlhXCIsXG4gICAgICAgIFwiU2V5Y2hlbGxlc1wiLFxuICAgICAgICBcIlNpZXJyYSBMZW9uZVwiLFxuICAgICAgICBcIlNpbmdhcG9yZVwiLFxuICAgICAgICBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcbiAgICAgICAgXCJTbG92YWtpYVwiLFxuICAgICAgICBcIlNsb3ZlbmlhXCIsXG4gICAgICAgIFwiU29sb21vbiBJc2xhbmRzXCIsXG4gICAgICAgIFwiU29tYWxpYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXG4gICAgICAgIFwiU291dGggU3VkYW5cIixcbiAgICAgICAgXCJTcGFpblwiLFxuICAgICAgICBcIlNyaSBMYW5rYVwiLFxuICAgICAgICBcIlN1ZGFuICh0aGUpXCIsXG4gICAgICAgIFwiU3VyaW5hbWVcIixcbiAgICAgICAgXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXG4gICAgICAgIFwiU3dlZGVuXCIsXG4gICAgICAgIFwiU3dpdHplcmxhbmRcIixcbiAgICAgICAgXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFxuICAgICAgICBcIlRhaXdhbiAoUHJvdmluY2Ugb2YgQ2hpbmEpXCIsXG4gICAgICAgIFwiVGFqaWtpc3RhblwiLFxuICAgICAgICBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiLFxuICAgICAgICBcIlRpbW9yLUxlc3RlXCIsXG4gICAgICAgIFwiVG9nb1wiLFxuICAgICAgICBcIlRva2VsYXVcIixcbiAgICAgICAgXCJUb25nYVwiLFxuICAgICAgICBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixcbiAgICAgICAgXCJUdW5pc2lhXCIsXG4gICAgICAgIFwiVHVya2V5XCIsXG4gICAgICAgIFwiVHVya21lbmlzdGFuXCIsXG4gICAgICAgIFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpXCIsXG4gICAgICAgIFwiVHV2YWx1XCIsXG4gICAgICAgIFwiVWdhbmRhXCIsXG4gICAgICAgIFwiVWtyYWluZVwiLFxuICAgICAgICBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpXCIsXG4gICAgICAgIFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZCAodGhlKVwiLFxuICAgICAgICBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKVwiLFxuICAgICAgICBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKVwiLFxuICAgICAgICBcIlVydWd1YXlcIixcbiAgICAgICAgXCJVemJla2lzdGFuXCIsXG4gICAgICAgIFwiVmFudWF0dVwiLFxuICAgICAgICBcIlZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZilcIixcbiAgICAgICAgXCJWaWV0IE5hbVwiLFxuICAgICAgICBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwiLFxuICAgICAgICBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwiLFxuICAgICAgICBcIldhbGxpcyBhbmQgRnV0dW5hXCIsXG4gICAgICAgIFwiV2VzdGVybiBTYWhhcmFcIixcbiAgICAgICAgXCJZZW1lblwiLFxuICAgICAgICBcIlphbWJpYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF07XG4gICAgICByZXR1cm4gY2w7XG4gIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjb3VudHJ5TGlzdCBmcm9tICcuL2NvdW50cnlMaXN0LmpzJztcblxuXG4vLyBFbWFpbCwgQ291bnRyeSwgWmlwIENvZGUsIFBhc3N3b3JkIGFuZCBQYXNzd29yZCBDb25maXJtYXRpb24gZmllbGRzLlxuXG5mdW5jdGlvbiBtYWtlVGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdVc2VyIFN1Ym1pdCBGb3JtJztcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCAoaDEpO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG4vL2NyZWF0aW5nIGEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgaW5wdXRzXG5jb25zdCBJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZVswXS50b1VwcGVyQ2FzZSgpK25hbWUuc2xpY2UoMSwgbmFtZS5sZW5ndGgpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgaW5wdXQsIHNwYW4pO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaW5wdXQtY29udGFpbmVyJztcblxuICAgIHJldHVybiB7Y29udGFpbmVyfTtcbn1cblxuY29uc3QgQ291bnRyeUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY2wgPSBjb3VudHJ5TGlzdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY291bnRyeS1saXN0Jyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHlvdXIgQ291bnRyeSc7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb3VudHJ5LWxpc3QnKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb3VudHJ5LWxpc3QnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNsW2ldKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2xbaV07XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBzZWxlY3QsIHNwYW4pO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaW5wdXQtY29udGFpbmVyJztcblxuICAgIHJldHVybiB7Y29udGFpbmVyfTtcbn1cblxuY29uc3QgWmlwQ29kZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd6aXAtY29kZScpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIHlvdXIgemlwIGNvZGUnO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnemlwLWNvZGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnemlwLWNvZGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsICdbMC05XXs0fVtBLVphLXpdezJ9Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBpbnB1dCwgc3Bhbik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnB1dC1jb250YWluZXInO1xuICAgIHJldHVybiB7Y29udGFpbmVyfTtcbn1cblxuY29uc3QgU3VibWl0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBidG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC1idG4nO1xuXG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcicpO1xuICAgIHJldHVybiB7YnRuRGl2fTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFcnJvcnMoaW5wdXQpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9K3NwYW5gKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICdlcnJvci1tc2cnO1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIHJlcXVpcmVkIGZpZWxkLlwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbnB1dC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdVc2UgYSByaWdodCBmb3JtYXQuJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnUGF0dGVybiBpcyBub3QgY29ycmVjdC4nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKHBhc3N3b3Jkcykge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9cGFzc3dvcmRdJykpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgaWYgKHBhc3N3b3Jkc1swXSA9PT0gcGFzc3dvcmRzWzFdKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoIChpbnB1dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9K3NwYW5gKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nIChcIm5vXCIpO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaCAoaW5wdXQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfStzcGFuYCk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnZXJyb3ItbXNnJztcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXF1aXJlZCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKSk7XG4gICAgaW5wdXRzLmZvckVhY2ggKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcbiAgICAgICAgICAgIGNoZWNrRXJyb3JzKGlucHV0KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcbiAgICBmb3JtLm5vdmFsaWRhdGUgPSBmYWxzZTsgXG4gICAgY29uc3QgdXNlckVtYWlsID0gSW5wdXQoJ2VtYWlsJywgJ2VtYWlsJywgJ2VtYWlsJyk7XG4gICAgY29uc3QgdXNlckNvdW50cnkgPSBDb3VudHJ5TGlzdCgpO1xuICAgIGNvbnN0IHVzZXJaaXBDb2RlID0gWmlwQ29kZSgpO1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZDEgPSBJbnB1dCgncGFzc3dvcmQnLCAncGFzc3dvcmQxJywgJ3Bhc3N3b3JkMScpO1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZDIgPSBJbnB1dCgncGFzc3dvcmQnLCAncGFzc3dvcmQyJywgJ3Bhc3N3b3JkMicpO1xuICAgIHVzZXJQYXNzd29yZDEuY29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkJztcbiAgICB1c2VyUGFzc3dvcmQyLmNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdDb25maXJtIHBhc3N3b3JkJztcbiAgICBjb25zdCBidG4gPSBTdWJtaXRCdG4oKTtcbiAgICBmb3JtLmFwcGVuZCh1c2VyRW1haWwuY29udGFpbmVyLCB1c2VyQ291bnRyeS5jb250YWluZXIsIFxuICAgICAgICB1c2VyWmlwQ29kZS5jb250YWluZXIsIHVzZXJQYXNzd29yZDEuY29udGFpbmVyLCBcbiAgICAgICAgdXNlclBhc3N3b3JkMi5jb250YWluZXIsIGJ0bi5idG5EaXYpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkcyA9IFtdO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JywgJ3NlbGVjdCcpKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2hlY2tFcnJvcnMoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZHMucHVzaChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrUGFzc3dvcmRzKHBhc3N3b3Jkcyk7XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIGNvbnRlbnQuYXBwZW5kIChtYWtlVGl0bGUoKSwgbWFrZUZvcm0oKSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3RlbXBsYXRlJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChtYWtlQ29udGVudCgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICBtYWtlUmVxdWlyZWQoKTtcbiAgICB9KVxuICAgIHJldHVybiBkaXY7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFrZVRlbXBsYXRlKCkpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZBQ1RPUlkgRlVOQ1RJT04gXG4vLyBjb25zdCB0ZXN0RnVuY3Rpb24gPSAobjEsIG4yKSA9PiB7XG4vLyAgICAgY29uc3QgaSA9IG4xO1xuLy8gICAgIGNvbnN0IGogPSBuMjtcblxuLy8gICAgIGNvbnN0IHN1bSA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGkrajtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge3N1bX07XG4vLyB9XG5cbi8vIGNvbnN0IG51bWJlcjEgPSB0ZXN0RnVuY3Rpb24oNCwyKTtcbi8vIGNvbnNvbGUubG9nIChudW1iZXIxKTtcbi8vIGNvbnNvbGUubG9nICh0ZXN0RnVuY3Rpb24pO1xuXG5cblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTlNUUlVDVE9SXG4vLyBmdW5jdGlvbiBzdHVkZW50KG5hbWUpIHtcbi8vICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4vLyAgICAgdGhpcy5pbnRyb2R1Y2VTZWxmID0gKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyAoXCJIaSwgbXkgbmFtZSBpcyBcIit0aGlzLm5hbWUpO1xuLy8gICAgIH1cbi8vIH0gXG4vLyBjb25zdCBtYXJpYSA9IG5ldyBzdHVkZW50KCdNYXJpYScpO1xuLy8gbWFyaWEuaW50cm9kdWNlU2VsZigpO1xuXG5cblxuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDTEFTU1xuLy8gY2xhc3Mgc3R1ZGVudCB7XG4vLyAgICAgY29uc3RydWN0b3IobmFtZSkge1xuLy8gICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuLy8gICAgIH1cblxuLy8gICAgIHNheU5hbWUoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nIChcIkhpLCBteSBuYW1lIGlzIFwiK3RoaXMubmFtZSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBqb3NlID0gbmV3IHN0dWRlbnQoJ0pvc2UnKTtcbi8vIGpvc2Uuc2F5TmFtZSgpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVRUxcblxuLy8gY29uc3QgbXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4vLyAgICAgdmFyaWFibGVzIGFyZSBwcml2YXRlXG4vLyAgICAgY29uc3QgaSA9IDE7XG4vLyAgICAgY29uc3QgaiA9IDI7XG5cbi8vICAgICB0aGUgZnVuY3Rpb24gaXMgcHVibGljXG4vLyAgICAgY29uc3Qgc3VtID0gKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gaStqO1xuLy8gICAgIH1cblxuLy8gICAgIHdoYXQgaXMgcmV0dXJuZWQgYmVjb21lcyBwdWJsaWM7XG4vLyAgICAgcmV0dXJuIHtzdW19O1xuLy8gfSkoKTtcblxuLy8gY29uc29sZS5sb2cgKG15TW9kdWxlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=