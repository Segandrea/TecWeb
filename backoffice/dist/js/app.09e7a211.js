/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/backoffice/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "0f67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageNotFound_vue_vue_type_style_index_0_id_06c891fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageNotFound_vue_vue_type_style_index_0_id_06c891fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageNotFound_vue_vue_type_style_index_0_id_06c891fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "145c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1683":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nolonoloplus-dark.fccde65f.png";

/***/ }),

/***/ "2b3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Signin_vue_vue_type_style_index_0_id_e90a6c2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4962");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Signin_vue_vue_type_style_index_0_id_e90a6c2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Signin_vue_vue_type_style_index_0_id_e90a6c2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4962":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=43f8a59e


function render(_ctx, _cache) {
  const _component_router_view = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-view")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_router_view))
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=43f8a59e

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/App.vue

const script = {}


const __exports__ = /*#__PURE__*/exportHelper_default()(script, [['render',render]])

/* harmony default export */ var App = (__exports__);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__("6c02");

// CONCATENATED MODULE: ./src/http.js
function send(method, url, headers, body) {
  return fetch(url, {
    headers,
    method,
    body,
  })
    .catch((err) => {
      return Promise.reject([err, undefined]);
    })
    .then((res) => {
      return res.ok ? Promise.resolve(res) : Promise.reject([undefined, res]);
    });
}

const JSON_CONTENT = { "Content-Type": "application/json" };

function postJSON(url, object, parse = true) {
  const promise = send("POST", url, JSON_CONTENT, JSON.stringify(object));
  return parse ? promise.then((res) => res.json()) : promise;
}

function putJSON(url, object, parse = true) {
  const promise = send("PUT", url, JSON_CONTENT, JSON.stringify(object));
  return parse ? promise.then((res) => res.json()) : promise;
}

function getJSON(url, parse = true) {
  const promise = send("GET", url);
  return parse ? promise.then((res) => res.json()) : promise;
}

function deleteJSON(url, parse = true) {
  const promise = send("DELETE", url);
  return parse ? promise.then((res) => res.json()) : promise;
}

function onStatus(status, callback) {
  return ([err, res]) => {
    if (res && res.status === status) {
      return callback(res);
    } else {
      return Promise.reject([err, res]);
    }
  };
}

function redirectOnStatus(status, router, location) {
  return ([err, res]) => {
    if (res && res.status === status) {
      router.push(location);
    } else {
      return Promise.reject([err, res]);
    }
  };
}

// CONCATENATED MODULE: ./src/utils.js
function signinRoute(returnTo) {
  return {
    name: "Signin",
    params: { returnTo },
  };
}

function readBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(btoa(reader.result));
    reader.onerror = (err) => reject(err);

    reader.readAsBinaryString(file);
  });
}

function toUploads(files) {
  const uploads = Array.from(files).map((file) => {
    return readBase64(file).then((data) => {
      const type = file.type;
      return { type, data };
    });
  });

  return Promise.all(uploads);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

// EXTERNAL MODULE: ./src/assets/nolonoloplus-light.png
var nolonoloplus_light = __webpack_require__("bc1f");
var nolonoloplus_light_default = /*#__PURE__*/__webpack_require__.n(nolonoloplus_light);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Navbar.vue?vue&type=script&setup=true&lang=js




const _hoisted_1 = { class: "navbar navbar-expand-lg navbar-dark bg-dark" }
const _hoisted_2 = { class: "container-fluid" }
const _hoisted_3 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("img", {
  src: nolonoloplus_light_default.a,
  width: "30",
  height: "30",
  alt: ""
}, null, -1)
const _hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
  class: "navbar-toggler",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "navbar-toggler-icon" })
], -1)
const _hoisted_5 = {
  class: "collapse navbar-collapse",
  id: "navbarNav"
}
const _hoisted_6 = { class: "navbar-nav flex-fill" }
const _hoisted_7 = { class: "nav-item" }
const _hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Orders")
const _hoisted_9 = { class: "nav-item" }
const _hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Products")
const _hoisted_11 = { class: "nav-item" }
const _hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Coupons")
const _hoisted_13 = { class: "nav-item" }
const _hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Customers")
const _hoisted_15 = { class: "nav-item" }
const _hoisted_16 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Employees")
const _hoisted_17 = {
  key: 0,
  class: "nav-item"
}
const _hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  class: "nav-link",
  href: "/dashboard"
}, "Dashboard", -1)
const _hoisted_19 = [
  _hoisted_18
]
const _hoisted_20 = ["onSubmit"]
const _hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
  class: "btn btn-outline-warning",
  type: "submit"
}, " Sign out ", -1)
const _hoisted_22 = [
  _hoisted_21
]




/* harmony default export */ var Navbarvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();

async function signout() {
  await fetch("/api/backoffice/signout", { method: "POST" });
  sessionStorage.removeItem("user");
  router.push({ name: "Signin" });
}

function userRole() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role;
}

function isAdmin() {
  return userRole() === "admin";
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("header", null, [
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", _hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_2, [
        Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
          to: { name: 'Home' },
          class: "navbar-brand"
        }, {
          default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        _hoisted_4,
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_5, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", _hoisted_6, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_7, [
              Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                to: { name: 'ListOrders' },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_9, [
              Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                to: { name: 'ListProducts' },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_11, [
              Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                to: { name: 'ListCoupons' },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_13, [
              Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                to: { name: 'ListCustomers' },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_15, [
              Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                to: { name: 'ListEmployees' },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            (isAdmin())
              ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("li", _hoisted_17, _hoisted_19))
              : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
            onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(signout, ["prevent"])
          }, _hoisted_22, 40, _hoisted_20)
        ])
      ])
    ])
  ]))
}
}

});
// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/components/Navbar.vue



const Navbar_exports_ = Navbarvue_type_script_setup_true_lang_js;

/* harmony default export */ var Navbar = (Navbar_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Alert.vue?vue&type=script&setup=true&lang=js





/* harmony default export */ var Alertvue_type_script_setup_true_lang_js = ({
  setup(__props, { expose }) {

const INFO = "info";
const ERROR = "error";

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])({
  type: undefined,
  message: undefined,
  visible: false,
  timeout: undefined,
});

const alertClass = Object(vue_runtime_esm_bundler["c" /* computed */])(() => {
  const error = alert.value.type === ERROR;
  return {
    "alert-danger": error,
    "alert-success": !error,
  };
});

function error(message, duration = 5000) {
  clearTimeout(alert.value.timeout);
  alert.value = {
    type: ERROR,
    message,
    visible: true,
    timeout: setTimeout(() => {
      alert.value.visible = false;
    }, duration),
  };
}

function info(message, duration = 5000) {
  clearTimeout(alert.value.timeout);
  alert.value = {
    type: INFO,
    message,
    visible: true,
    timeout: setTimeout(() => {
      alert.value.visible = false;
    }, duration),
  };
}

expose({ error, info });

return (_ctx, _cache) => {
  return (alert.value.visible)
    ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", {
        key: 0,
        class: Object(vue_runtime_esm_bundler["r" /* normalizeClass */])(["alert", Object(vue_runtime_esm_bundler["H" /* unref */])(alertClass)]),
        role: "alert"
      }, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(alert.value.message), 3))
    : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
}
}

});
// CONCATENATED MODULE: ./src/components/Alert.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/components/Alert.vue



const Alert_exports_ = Alertvue_type_script_setup_true_lang_js;

/* harmony default export */ var Alert = (Alert_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/UpdateEmployee.vue?vue&type=script&setup=true&lang=js


const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_4 = { class: "breadcrumb-item" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Employees")
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "breadcrumb-item active",
  "aria-current": "page"
}
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_7 = ["onSubmit"]
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_8 = { class: "row g-4" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_9 = { class: "col-md-4" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "email",
  class: "form-label"
}, "Email", -1)
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_11 = ["disabled"]
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_12 = { class: "d-flex col-md-2 align-items-end" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_13 = { class: "form-check form-switch pb-1" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_14 = ["disabled"]
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_15 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  class: "form-check-label",
  for: "blocked"
}, "Blocked", -1)
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_16 = { class: "col-12" }
const UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_17 = ["disabled"]











/* harmony default export */ var UpdateEmployeevue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();

const employeeId = route.params.id;
const employee = Object(vue_runtime_esm_bundler["A" /* ref */])({});

function userRole() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role;
}

function isAdmin() {
  return userRole() === "admin";
}

getJSON(`/api/backoffice/employees/${employeeId}`)
  .then((body) => (employee.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateEmployee() {
  putJSON(`/api/backoffice/employees/${employeeId}`, employee.value)
    .then((body) => {
      employee.value = body;
      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_3, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_4, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'ListEmployees' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_5
              ]),
              _: 1
            })
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_6, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(employee.value._id), 1)
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(updateEmployee, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_8, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_9, [
            UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_10,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((employee.value.email) = $event)),
              class: "form-control",
              type: "email",
              id: "email",
              required: "",
              disabled: !isAdmin()
            }, null, 8, UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_11), [
              [vue_runtime_esm_bundler["K" /* vModelText */], employee.value.email]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_12, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_13, [
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((employee.value.blocked) = $event)),
                class: "form-check-input",
                type: "checkbox",
                id: "blocked",
                disabled: !isAdmin()
              }, null, 8, UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_14), [
                [vue_runtime_esm_bundler["I" /* vModelCheckbox */], employee.value.blocked]
              ]),
              UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_15
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_16, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
              type: "submit",
              class: "btn btn-danger",
              disabled: !isAdmin()
            }, " Update ", 8, UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_17)
          ])
        ])
      ], 40, UpdateEmployeevue_type_script_setup_true_lang_js_hoisted_7)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/UpdateEmployee.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/UpdateEmployee.vue



const UpdateEmployee_exports_ = UpdateEmployeevue_type_script_setup_true_lang_js;

/* harmony default export */ var UpdateEmployee = (UpdateEmployee_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/ListEmployees.vue?vue&type=script&setup=true&lang=js


const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", {
  class: "mb-4",
  "aria-label": "breadcrumb"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", { class: "breadcrumb fw-bold" }, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "breadcrumb-item active",
      "aria-current": "page"
    }, "Employees")
  ])
], -1)
const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_3 = { class: "table-responsive" }
const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_4 = { class: "table table-hover" }
const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "email"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "blocked")
  ])
], -1)
const ListEmployeesvue_type_script_setup_true_lang_js_hoisted_6 = { scope: "row" }











/* harmony default export */ var ListEmployeesvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const employees = Object(vue_runtime_esm_bundler["A" /* ref */])([]);

getJSON("/api/backoffice/employees")
  .then((body) => (employees.value = body.employees))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", ListEmployeesvue_type_script_setup_true_lang_js_hoisted_1, [
      ListEmployeesvue_type_script_setup_true_lang_js_hoisted_2,
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", ListEmployeesvue_type_script_setup_true_lang_js_hoisted_3, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", ListEmployeesvue_type_script_setup_true_lang_js_hoisted_4, [
          ListEmployeesvue_type_script_setup_true_lang_js_hoisted_5,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(employees.value, (employee) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: employee._id
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", ListEmployeesvue_type_script_setup_true_lang_js_hoisted_6, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: { name: 'UpdateEmployee', params: { id: employee._id } }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(employee._id), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(employee.email), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(employee.blocked), 1)
              ]))
            }), 128))
          ])
        ])
      ])
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/ListEmployees.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/ListEmployees.vue



const ListEmployees_exports_ = ListEmployeesvue_type_script_setup_true_lang_js;

/* harmony default export */ var ListEmployees = (ListEmployees_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/UpdateCustomer.vue?vue&type=script&setup=true&lang=js


const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_4 = { class: "breadcrumb-item" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Customers")
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "breadcrumb-item active",
  "aria-current": "page"
}
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_7 = ["onSubmit"]
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_8 = { class: "row g-4" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_9 = { class: "col-md-2" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "username",
  class: "form-label"
}, "Username", -1)
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_11 = { class: "col-md-4" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "email",
  class: "form-label"
}, "Email", -1)
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_13 = { class: "col-md-4" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "billingAddress",
  class: "form-label"
}, "Billing Address", -1)
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_15 = { class: "d-flex col-md-2 align-items-end" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_16 = { class: "form-check form-switch pb-1" }
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  class: "form-check-label",
  for: "blocked"
}, "Blocked", -1)
const UpdateCustomervue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "col-12" }, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
    type: "submit",
    class: "btn btn-danger"
  }, "Update")
], -1)











/* harmony default export */ var UpdateCustomervue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();

const customerId = route.params.id;
const customer = Object(vue_runtime_esm_bundler["A" /* ref */])({});

getJSON(`/api/backoffice/customers/${customerId}`)
  .then((body) => (customer.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateCustomer() {
  putJSON(`/api/backoffice/customers/${customerId}`, customer.value)
    .then((body) => {
      customer.value = body;
      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_3, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_4, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'ListCustomers' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                UpdateCustomervue_type_script_setup_true_lang_js_hoisted_5
              ]),
              _: 1
            })
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_6, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(customer.value._id), 1)
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(updateCustomer, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_8, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_9, [
            UpdateCustomervue_type_script_setup_true_lang_js_hoisted_10,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((customer.value.username) = $event)),
              class: "form-control",
              type: "text",
              id: "username",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], customer.value.username]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_11, [
            UpdateCustomervue_type_script_setup_true_lang_js_hoisted_12,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((customer.value.email) = $event)),
              class: "form-control",
              type: "email",
              id: "email",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], customer.value.email]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_13, [
            UpdateCustomervue_type_script_setup_true_lang_js_hoisted_14,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((customer.value.billingAddress) = $event)),
              class: "form-control",
              type: "text",
              id: "billingAddress"
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], customer.value.billingAddress]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_15, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCustomervue_type_script_setup_true_lang_js_hoisted_16, [
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((customer.value.blocked) = $event)),
                class: "form-check-input",
                type: "checkbox",
                id: "blocked"
              }, null, 512), [
                [vue_runtime_esm_bundler["I" /* vModelCheckbox */], customer.value.blocked]
              ]),
              UpdateCustomervue_type_script_setup_true_lang_js_hoisted_17
            ])
          ]),
          UpdateCustomervue_type_script_setup_true_lang_js_hoisted_18
        ])
      ], 40, UpdateCustomervue_type_script_setup_true_lang_js_hoisted_7)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/UpdateCustomer.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/UpdateCustomer.vue



const UpdateCustomer_exports_ = UpdateCustomervue_type_script_setup_true_lang_js;

/* harmony default export */ var UpdateCustomer = (UpdateCustomer_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/ListCustomers.vue?vue&type=script&setup=true&lang=js


const ListCustomersvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const ListCustomersvue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", {
  class: "mb-4",
  "aria-label": "breadcrumb"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", { class: "breadcrumb fw-bold" }, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "breadcrumb-item active",
      "aria-current": "page"
    }, "Customers")
  ])
], -1)
const ListCustomersvue_type_script_setup_true_lang_js_hoisted_3 = { class: "table-responsive" }
const ListCustomersvue_type_script_setup_true_lang_js_hoisted_4 = { class: "table table-hover" }
const ListCustomersvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "username"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "email"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "blocked")
  ])
], -1)
const ListCustomersvue_type_script_setup_true_lang_js_hoisted_6 = { scope: "row" }











/* harmony default export */ var ListCustomersvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const customers = Object(vue_runtime_esm_bundler["A" /* ref */])([]);

getJSON("/api/backoffice/customers")
  .then((body) => (customers.value = body.customers))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", ListCustomersvue_type_script_setup_true_lang_js_hoisted_1, [
      ListCustomersvue_type_script_setup_true_lang_js_hoisted_2,
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", ListCustomersvue_type_script_setup_true_lang_js_hoisted_3, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", ListCustomersvue_type_script_setup_true_lang_js_hoisted_4, [
          ListCustomersvue_type_script_setup_true_lang_js_hoisted_5,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(customers.value, (customer) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: customer._id
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", ListCustomersvue_type_script_setup_true_lang_js_hoisted_6, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: { name: 'UpdateCustomer', params: { id: customer._id } }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(customer._id), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(customer.username), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(customer.email), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(customer.blocked), 1)
              ]))
            }), 128))
          ])
        ])
      ])
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/ListCustomers.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/ListCustomers.vue



const ListCustomers_exports_ = ListCustomersvue_type_script_setup_true_lang_js;

/* harmony default export */ var ListCustomers = (ListCustomers_exports_);
// EXTERNAL MODULE: ./node_modules/v-calendar/lib/esm/index.js + 65 modules
var esm = __webpack_require__("7b37");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/UpdateCoupon.vue?vue&type=script&setup=true&lang=js


const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_4 = { class: "breadcrumb-item" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Coupons")
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "breadcrumb-item active",
  "aria-current": "page"
}
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_7 = ["onSubmit"]
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_8 = { class: "row g-4" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_9 = { class: "col-md-3" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponCode",
  class: "form-label"
}, "Code", -1)
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_11 = { class: "col-md-3" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponValue",
  class: "form-label"
}, "Value", -1)
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_13 = { class: "input-group" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_15 = { class: "col-md-3" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_16 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponCustomerId",
  class: "form-label"
}, "Customer Id", -1)
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_17 = { class: "col-md-3" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "form-label" }, "Validity Dates", -1)
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_19 = { class: "input-group" }
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_20 = ["value"]
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_21 = ["value"]
const UpdateCouponvue_type_script_setup_true_lang_js_hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
  type: "submit",
  class: "btn btn-danger"
}, "Update", -1)













/* harmony default export */ var UpdateCouponvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();

const couponId = route.params.id;
const coupon = Object(vue_runtime_esm_bundler["A" /* ref */])({});

getJSON(`/api/backoffice/coupons/${couponId}`)
  .then((body) => (coupon.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateCoupon() {
  const data = coupon.value;

  if (!(data.customerId || "").trim()) {
    delete data.customerId;
  }

  if (data.validity && (!data.validity.start || !data.validity.end)) {
    delete data.validity;
  }

  putJSON(`/api/backoffice/coupons/${couponId}`, data)
    .then((body) => {
      coupon.value = body;
      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

function deleteCoupon() {
  deleteJSON(`/api/backoffice/coupons/${couponId}`, false)
    .then(() => router.replace({ name: "ListCoupons" }))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch(onStatus(422, () => alert.value.error("Unable to delete coupon")))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_3, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_4, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'ListCoupons' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                UpdateCouponvue_type_script_setup_true_lang_js_hoisted_5
              ]),
              _: 1
            })
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_6, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.value._id), 1)
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(updateCoupon, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_8, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_9, [
            UpdateCouponvue_type_script_setup_true_lang_js_hoisted_10,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((coupon.value.code) = $event)),
              type: "text",
              class: "form-control",
              id: "couponCode",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.code]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_11, [
            UpdateCouponvue_type_script_setup_true_lang_js_hoisted_12,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_13, [
              UpdateCouponvue_type_script_setup_true_lang_js_hoisted_14,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((coupon.value.value) = $event)),
                type: "number",
                class: "form-control",
                id: "couponValue",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.value]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_15, [
            UpdateCouponvue_type_script_setup_true_lang_js_hoisted_16,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((coupon.value.customerId) = $event)),
              class: "form-control",
              type: "text",
              id: "couponCustomerId"
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.customerId]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_17, [
            UpdateCouponvue_type_script_setup_true_lang_js_hoisted_18,
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(Object(vue_runtime_esm_bundler["H" /* unref */])(esm["a" /* DatePicker */]), {
              modelValue: coupon.value.validity,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((coupon.value.validity) = $event)),
              "is-range": ""
            }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(({ inputValue, inputEvents }) => [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateCouponvue_type_script_setup_true_lang_js_hoisted_19, [
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.start
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.start), { "aria-label": "Start date" }), null, 16, UpdateCouponvue_type_script_setup_true_lang_js_hoisted_20),
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.end
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.end), { "aria-label": "End date" }), null, 16, UpdateCouponvue_type_script_setup_true_lang_js_hoisted_21)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "col-12" }, [
            UpdateCouponvue_type_script_setup_true_lang_js_hoisted_22,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
              type: "button",
              class: "btn btn-warning ms-2",
              onClick: deleteCoupon
            }, " Delete ")
          ])
        ])
      ], 40, UpdateCouponvue_type_script_setup_true_lang_js_hoisted_7)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/UpdateCoupon.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/UpdateCoupon.vue



const UpdateCoupon_exports_ = UpdateCouponvue_type_script_setup_true_lang_js;

/* harmony default export */ var UpdateCoupon = (UpdateCoupon_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/CreateCoupon.vue?vue&type=script&setup=true&lang=js


const CreateCouponvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", {
  class: "mb-4",
  "aria-label": "breadcrumb"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", { class: "breadcrumb fw-bold" }, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "breadcrumb-item active",
      "aria-current": "page"
    }, "Coupons")
  ])
], -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_3 = ["onSubmit"]
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_4 = { class: "row g-4" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_5 = { class: "col-md-3" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponCode",
  class: "form-label"
}, "Code", -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_7 = { class: "col-md-3" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponValue",
  class: "form-label"
}, "Value", -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_9 = { class: "input-group" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_11 = { class: "col-md-3" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "couponCustomerId",
  class: "form-label"
}, "Customer Id", -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_13 = { class: "col-md-3" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "form-label" }, "Validity Dates", -1)
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_15 = { class: "input-group" }
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_16 = ["value"]
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_17 = ["value"]
const CreateCouponvue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "col-12" }, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
    type: "submit",
    class: "btn btn-danger"
  }, "Create")
], -1)













/* harmony default export */ var CreateCouponvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const coupon = Object(vue_runtime_esm_bundler["A" /* ref */])({
  code: "",
  value: 0,
  customerId: "",
  validity: {},
});

function createCoupon() {
  const data = coupon.value;

  if (!(data.customerId || "").trim()) {
    delete data.customerId;
  }

  if (data.validity && (!data.validity.start || !data.validity.end)) {
    delete data.validity;
  }

  postJSON("/api/backoffice/coupons", data)
    .then((body) =>
      router.replace({ name: "UpdateCoupon", params: { id: body._id } })
    )
    .catch(onStatus(400, () => alert.value.error("Invalid data supplied")))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", CreateCouponvue_type_script_setup_true_lang_js_hoisted_1, [
      CreateCouponvue_type_script_setup_true_lang_js_hoisted_2,
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(createCoupon, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_4, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_5, [
            CreateCouponvue_type_script_setup_true_lang_js_hoisted_6,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((coupon.value.code) = $event)),
              class: "form-control",
              type: "text",
              id: "couponCode",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.code]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_7, [
            CreateCouponvue_type_script_setup_true_lang_js_hoisted_8,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_9, [
              CreateCouponvue_type_script_setup_true_lang_js_hoisted_10,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((coupon.value.value) = $event)),
                class: "form-control",
                type: "number",
                id: "couponValue",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.value]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_11, [
            CreateCouponvue_type_script_setup_true_lang_js_hoisted_12,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((coupon.value.customerId) = $event)),
              class: "form-control",
              type: "text",
              id: "couponCustomerId"
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], coupon.value.customerId]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_13, [
            CreateCouponvue_type_script_setup_true_lang_js_hoisted_14,
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(Object(vue_runtime_esm_bundler["H" /* unref */])(esm["a" /* DatePicker */]), {
              modelValue: coupon.value.validity,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((coupon.value.validity) = $event)),
              "is-range": ""
            }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(({ inputValue, inputEvents }) => [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateCouponvue_type_script_setup_true_lang_js_hoisted_15, [
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.start
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.start), { "aria-label": "Start date" }), null, 16, CreateCouponvue_type_script_setup_true_lang_js_hoisted_16),
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.end
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.end), { "aria-label": "End date" }), null, 16, CreateCouponvue_type_script_setup_true_lang_js_hoisted_17)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          CreateCouponvue_type_script_setup_true_lang_js_hoisted_18
        ])
      ], 40, CreateCouponvue_type_script_setup_true_lang_js_hoisted_3)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/CreateCoupon.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/CreateCoupon.vue



const CreateCoupon_exports_ = CreateCouponvue_type_script_setup_true_lang_js;

/* harmony default export */ var CreateCoupon = (CreateCoupon_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/ListCoupons.vue?vue&type=script&setup=true&lang=js


const ListCouponsvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "breadcrumb-item active",
  "aria-current": "page"
}, "Coupons", -1)
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_5 = { class: "breadcrumb-item" }
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("small", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("i", { class: "bi bi-plus-circle" })
], -1)
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_7 = { class: "table-responsive" }
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_8 = { class: "table table-hover" }
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "customer"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "code"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "value"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "validity start"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "validity end")
  ])
], -1)
const ListCouponsvue_type_script_setup_true_lang_js_hoisted_10 = { scope: "row" }











/* harmony default export */ var ListCouponsvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const coupons = Object(vue_runtime_esm_bundler["A" /* ref */])([]);

getJSON("/api/backoffice/coupons")
  .then((body) => (coupons.value = body.coupons))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", ListCouponsvue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", ListCouponsvue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", ListCouponsvue_type_script_setup_true_lang_js_hoisted_3, [
          ListCouponsvue_type_script_setup_true_lang_js_hoisted_4,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", ListCouponsvue_type_script_setup_true_lang_js_hoisted_5, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'CreateCoupon' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                ListCouponsvue_type_script_setup_true_lang_js_hoisted_6
              ]),
              _: 1
            })
          ])
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", ListCouponsvue_type_script_setup_true_lang_js_hoisted_7, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", ListCouponsvue_type_script_setup_true_lang_js_hoisted_8, [
          ListCouponsvue_type_script_setup_true_lang_js_hoisted_9,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(coupons.value, (coupon) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: coupon._id
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", ListCouponsvue_type_script_setup_true_lang_js_hoisted_10, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: { name: 'UpdateCoupon', params: { id: coupon._id } }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon._id), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, [
                  (!!coupon.customerId)
                    ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_router_link, {
                        key: 0,
                        to: {
                  name: 'UpdateCustomer',
                  params: { id: coupon.customerId },
                }
                      }, {
                        default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                          Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.customerId), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]))
                    : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.code), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.value.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.validity && coupon.validity.start
                  ? Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(coupon.validity.start)
                  : ""), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.validity && coupon.validity.end
                  ? Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(coupon.validity.end)
                  : ""), 1)
              ]))
            }), 128))
          ])
        ])
      ])
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/ListCoupons.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/ListCoupons.vue



const ListCoupons_exports_ = ListCouponsvue_type_script_setup_true_lang_js;

/* harmony default export */ var ListCoupons = (ListCoupons_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/UpdateProduct.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => (Object(vue_runtime_esm_bundler["y" /* pushScopeId */])("data-v-38ede352"),n=n(),Object(vue_runtime_esm_bundler["w" /* popScopeId */])(),n)
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_4 = { class: "breadcrumb-item" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Products")
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "breadcrumb-item active",
  "aria-current": "page"
}
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_7 = {
  key: 0,
  class: "row"
}
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_8 = { class: "col" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_9 = {
  id: "carouselControls",
  class: "carousel carousel-dark slide my-2",
  "data-bs-touch": "false",
  "data-bs-interval": "false"
}
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_10 = { class: "carousel-inner h-100 text-center" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_11 = ["src", "alt"]
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_12 = ["onClick"]
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_13 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselControls\" data-bs-slide=\"prev\" data-v-38ede352><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\" data-v-38ede352></span><span class=\"visually-hidden\" data-v-38ede352>Previous</span></button><button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselControls\" data-bs-slide=\"next\" data-v-38ede352><span class=\"carousel-control-next-icon\" aria-hidden=\"true\" data-v-38ede352></span><span class=\"visually-hidden\" data-v-38ede352>Next</span></button>", 2)
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_15 = ["onSubmit"]
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_16 = { class: "row g-4" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_17 = { class: "col-md-3" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "name",
  class: "form-label"
}, "Name", -1))
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_19 = { class: "col-md-2" }
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_20 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productCategory",
  class: "form-label"
}, "Category", -1))
const UpdateProductvue_type_script_setup_true_lang_js_hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<option value=\"party\" data-v-38ede352>Party</option><option value=\"cards\" data-v-38ede352>Cards</option><option value=\"mistery\" data-v-38ede352>Mistery</option><option value=\"puzzle\" data-v-38ede352>Puzzle</option><option value=\"dices\" data-v-38ede352>Dices</option>", 5)
const _hoisted_26 = [
  UpdateProductvue_type_script_setup_true_lang_js_hoisted_21
]
const _hoisted_27 = { class: "col-md-2" }
const _hoisted_28 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productStatus",
  class: "form-label"
}, "Status", -1))
const _hoisted_29 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "brand-new" }, "Brand-new", -1))
const _hoisted_30 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "refurbished" }, "Refurbished", -1))
const _hoisted_31 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "damaged" }, "Damaged", -1))
const _hoisted_32 = [
  _hoisted_29,
  _hoisted_30,
  _hoisted_31
]
const _hoisted_33 = { class: "col-md-4" }
const _hoisted_34 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "form-label" }, "Unavailability", -1))
const _hoisted_35 = { class: "input-group" }
const _hoisted_36 = ["value"]
const _hoisted_37 = ["value"]
const _hoisted_38 = { class: "d-flex col-md-1 align-items-end" }
const _hoisted_39 = { class: "form-check form-switch pb-1" }
const _hoisted_40 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  class: "form-check-label",
  for: "productVisible"
}, "Visible", -1))
const _hoisted_41 = { class: "col-md-12" }
const _hoisted_42 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDescription",
  class: "form-label"
}, "Description", -1))
const _hoisted_43 = { class: "col-md-3" }
const _hoisted_44 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productImage",
  class: "form-label"
}, "Image", -1))
const _hoisted_45 = { class: "col-md-3" }
const _hoisted_46 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDiscountPrice",
  class: "form-label"
}, "Discount price", -1))
const _hoisted_47 = { class: "input-group" }
const _hoisted_48 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1))
const _hoisted_49 = { class: "col-md-3" }
const _hoisted_50 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productBasePrice",
  class: "form-label"
}, "Base price", -1))
const _hoisted_51 = { class: "input-group" }
const _hoisted_52 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1))
const _hoisted_53 = { class: "col-md-3" }
const _hoisted_54 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDailyPrice",
  class: "form-label"
}, "Daily price", -1))
const _hoisted_55 = { class: "input-group" }
const _hoisted_56 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1))
const _hoisted_57 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
  type: "submit",
  class: "btn btn-danger"
}, "Update", -1))
const _hoisted_58 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", { class: "mt-4 text-center" }, "Reviews", -1))
const _hoisted_59 = { class: "table-responsive" }
const _hoisted_60 = { class: "table table-hover mb-4" }
const _hoisted_61 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "username"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "content"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "rating")
  ])
], -1))














/* harmony default export */ var UpdateProductvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const imageInput = Object(vue_runtime_esm_bundler["A" /* ref */])();

const productId = route.params.id;
const product = Object(vue_runtime_esm_bundler["A" /* ref */])({
  unavailability: {},
});

function deserializeProduct(body) {
  const unavailability = body.unavailability || {};

  unavailability.start = unavailability.start
    ? new Date(unavailability.start)
    : null;

  unavailability.end = unavailability.end ? new Date(unavailability.end) : null;

  body.unavailability = unavailability;
  return body;
}

getJSON(`/api/backoffice/products/${productId}`)
  .then((body) => {
    product.value = deserializeProduct(body);
  })
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function deleteProduct() {
  deleteJSON(`/api/backoffice/products/${productId}`, false)
    .then(() => router.replace({ name: "ListProducts" }))
    .catch(onStatus(404, () => alert.value.error("Product Not Found")))
    .catch(
      onStatus(409, () =>
        alert.value.error("Products already ordered can't be removed")
      )
    )
    .catch((err) => {
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

function updateProduct() {
  if (
    product.value.visible &&
    (product.value.images || []).length + imageInput.value.files.length <= 0
  ) {
    return alert.value.error("Visible products must have at least an image");
  }

  if (product.value.discountPrice > product.value.basePrice) {
    return alert.value.error("Discount price must be lesser than base price");
  }

  const unavailability = product.value.unavailability || {};
  if ((unavailability.start || -Infinity) > (unavailability.end || Infinity)) {
    return alert.value.error("Unavailability start must be lesser than end");
  }

  toUploads(imageInput.value.files)
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something wrong with image files!");
    })
    .then((uploads) =>
      putJSON(`/api/backoffice/products/${productId}`, {
        ...product.value,
        uploads,
      })
    )
    .then((body) => {
      product.value = deserializeProduct(body);

      // clear the HTML input element
      imageInput.value.value = null;

      // set the focus on last item of the carousel
      if (carouselItems.length > 0) {
        carouselItems.forEach((item) => item.classList.remove("active"));
        carouselItems.at(-1).classList.add("active");
      }

      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
        console.error(err);
      alert.value.error("Something went wrong!");
    });
}

const carouselItems = [];

function setCarouselItem(element) {
  if (element) {
    carouselItems.push(element);
  }
}

function removeImage(index) {
  product.value.images.splice(index, 1);
  carouselItems.splice(index, 1);

  if (carouselItems.length > 0) {
    carouselItems[0].classList.add("active");
  }
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", UpdateProductvue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", UpdateProductvue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", UpdateProductvue_type_script_setup_true_lang_js_hoisted_3, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateProductvue_type_script_setup_true_lang_js_hoisted_4, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'ListProducts' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                UpdateProductvue_type_script_setup_true_lang_js_hoisted_5
              ]),
              _: 1
            })
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateProductvue_type_script_setup_true_lang_js_hoisted_6, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.value._id), 1)
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      (product.value.images && product.value.images.length > 0)
        ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_7, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_8, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_9, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_10, [
                  (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(product.value.images, (image, index) => {
                    return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", {
                      key: image._id,
                      class: Object(vue_runtime_esm_bundler["r" /* normalizeClass */])(["carousel-item h-100", { active: 0 === index }]),
                      ref_for: true,
                      ref: setCarouselItem
                    }, [
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("img", {
                        src: image.url,
                        class: "d-block mx-auto h-75",
                        alt: `${product.value.name} image ${index}`
                      }, null, 8, UpdateProductvue_type_script_setup_true_lang_js_hoisted_11),
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
                        class: "btn btn-link",
                        onClick: $event => (removeImage(index))
                      }, " remove image ", 8, UpdateProductvue_type_script_setup_true_lang_js_hoisted_12)
                    ], 2))
                  }), 128))
                ]),
                UpdateProductvue_type_script_setup_true_lang_js_hoisted_13
              ])
            ])
          ]))
        : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(updateProduct, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_16, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_17, [
            UpdateProductvue_type_script_setup_true_lang_js_hoisted_18,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((product.value.name) = $event)),
              class: "form-control",
              type: "text",
              id: "productName",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], product.value.name]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateProductvue_type_script_setup_true_lang_js_hoisted_19, [
            UpdateProductvue_type_script_setup_true_lang_js_hoisted_20,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((product.value.category) = $event)),
              class: "form-select",
              id: "productCategory",
              required: ""
            }, _hoisted_26, 512), [
              [vue_runtime_esm_bundler["J" /* vModelSelect */], product.value.category]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_27, [
            _hoisted_28,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((product.value.status) = $event)),
              class: "form-select",
              id: "productStatus",
              required: ""
            }, _hoisted_32, 512), [
              [vue_runtime_esm_bundler["J" /* vModelSelect */], product.value.status]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_33, [
            _hoisted_34,
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(Object(vue_runtime_esm_bundler["H" /* unref */])(esm["a" /* DatePicker */]), {
              modelValue: product.value.unavailability,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((product.value.unavailability) = $event)),
              clearable: true,
              "is-range": ""
            }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(({ inputValue, inputEvents }) => [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_35, [
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.start
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.start), { "aria-label": "Start" }), null, 16, _hoisted_36),
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.end
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.end), { "aria-label": "End date" }), null, 16, _hoisted_37)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_38, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_39, [
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((product.value.visible) = $event)),
                class: "form-check-input",
                type: "checkbox",
                id: "productVisible"
              }, null, 512), [
                [vue_runtime_esm_bundler["I" /* vModelCheckbox */], product.value.visible]
              ]),
              _hoisted_40
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_41, [
            _hoisted_42,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("textarea", {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((product.value.description) = $event)),
              class: "form-control",
              id: "productDescription",
              rows: "5",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], product.value.description]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_43, [
            _hoisted_44,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              id: "productImage",
              ref_key: "imageInput",
              ref: imageInput,
              type: "file",
              class: "form-control",
              accept: ".png,.jpg,.jpeg",
              multiple: ""
            }, null, 512)
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_45, [
            _hoisted_46,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_47, [
              _hoisted_48,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((product.value.discountPrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productDiscountPrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.discountPrice]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_49, [
            _hoisted_50,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_51, [
              _hoisted_52,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((product.value.basePrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productBasePrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.basePrice]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_53, [
            _hoisted_54,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_55, [
              _hoisted_56,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((product.value.dailyPrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productDailyPrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.dailyPrice]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "col-12" }, [
            _hoisted_57,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
              type: "button",
              class: "btn btn-danger ms-3",
              onClick: deleteProduct
            }, " Delete Product ")
          ])
        ])
      ], 40, UpdateProductvue_type_script_setup_true_lang_js_hoisted_15),
      (product.value.reviews && product.value.reviews.length > 0)
        ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], { key: 1 }, [
            _hoisted_58,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_59, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", _hoisted_60, [
                _hoisted_61,
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
                  (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(product.value.reviews, (review) => {
                    return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                      key: review._id
                    }, [
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(review.username), 1),
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(review.content), 1),
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(review.rating), 1)
                    ]))
                  }), 128))
                ])
              ])
            ])
          ], 64))
        : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/UpdateProduct.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./src/views/UpdateProduct.vue?vue&type=style&index=0&id=38ede352&scoped=true&lang=css
var UpdateProductvue_type_style_index_0_id_38ede352_scoped_true_lang_css = __webpack_require__("7654");

// CONCATENATED MODULE: ./src/views/UpdateProduct.vue






const UpdateProduct_exports_ = /*#__PURE__*/exportHelper_default()(UpdateProductvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-38ede352"]])

/* harmony default export */ var UpdateProduct = (UpdateProduct_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/CreateProduct.vue?vue&type=script&setup=true&lang=js


const CreateProductvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", {
  class: "mb-4",
  "aria-label": "breadcrumb"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", { class: "breadcrumb fw-bold" }, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "breadcrumb-item active",
      "aria-current": "page"
    }, "Products")
  ])
], -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_3 = ["onSubmit"]
const CreateProductvue_type_script_setup_true_lang_js_hoisted_4 = { class: "row g-4" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_5 = { class: "col-md-3" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "name",
  class: "form-label"
}, "Name", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_7 = { class: "col-md-2" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productCategory",
  class: "form-label"
}, "Category", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<option value=\"party\" selected>Party</option><option value=\"cards\">Cards</option><option value=\"mistery\">Mistery</option><option value=\"puzzle\">Puzzle</option><option value=\"dices\">Dices</option>", 5)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_14 = [
  CreateProductvue_type_script_setup_true_lang_js_hoisted_9
]
const CreateProductvue_type_script_setup_true_lang_js_hoisted_15 = { class: "col-md-2" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_16 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productStatus",
  class: "form-label"
}, "Status", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", {
  value: "brand-new",
  selected: ""
}, "Brand-new", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "refurbished" }, "Refurbished", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "damaged" }, "Damaged", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_20 = [
  CreateProductvue_type_script_setup_true_lang_js_hoisted_17,
  CreateProductvue_type_script_setup_true_lang_js_hoisted_18,
  CreateProductvue_type_script_setup_true_lang_js_hoisted_19
]
const CreateProductvue_type_script_setup_true_lang_js_hoisted_21 = { class: "col-md-4" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "form-label" }, "Unavailability", -1)
const _hoisted_23 = { class: "input-group" }
const _hoisted_24 = ["value"]
const _hoisted_25 = ["value"]
const CreateProductvue_type_script_setup_true_lang_js_hoisted_26 = { class: "d-flex col-md-1 align-items-end" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_27 = { class: "form-check form-switch pb-1" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_28 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  class: "form-check-label",
  for: "productVisible"
}, "Visible", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_29 = { class: "col-md-12" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_30 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDescription",
  class: "form-label"
}, "Description", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_31 = { class: "col-md-3" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_32 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productImage",
  class: "form-label"
}, "Image", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_33 = { class: "col-md-3" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_34 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDiscountPrice",
  class: "form-label"
}, "Discount price", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_35 = { class: "input-group" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_36 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_37 = { class: "col-md-3" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_38 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productBasePrice",
  class: "form-label"
}, "Base price", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_39 = { class: "input-group" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_40 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_41 = { class: "col-md-3" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_42 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "productDailyPrice",
  class: "form-label"
}, "Daily price", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_43 = { class: "input-group" }
const CreateProductvue_type_script_setup_true_lang_js_hoisted_44 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const CreateProductvue_type_script_setup_true_lang_js_hoisted_45 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "col-12" }, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
    type: "submit",
    class: "btn btn-danger"
  }, "Create")
], -1)













/* harmony default export */ var CreateProductvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const imageInput = Object(vue_runtime_esm_bundler["A" /* ref */])();

const product = Object(vue_runtime_esm_bundler["A" /* ref */])({
  visible: false,
  category: "party",
  status: "brand-new",
  basePrice: 0,
  dailyPrice: 0,
  discountPrice: 0,
  unavailability: {},
});

function createProduct() {
  if (product.value.visible && imageInput.value.files.length <= 0) {
    return alert.value.error("Visible products must have at least an image");
  }

  if (product.value.discountPrice > product.value.basePrice) {
    return alert.value.error("Discount price must be lesser than base price");
  }

  const unavailability = product.value.unavailability || {};
  if ((unavailability.start || -Infinity) > (unavailability.end || Infinity)) {
    return alert.value.error("Unavailability start must be lesser than end");
  }

  toUploads(imageInput.value.files)
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something wrong with image files!");
    })
    .then((uploads) =>
      postJSON("/api/backoffice/products", {
        ...product.value,
        uploads,
      })
    )
    .then((body) =>
      router.replace({ name: "UpdateProduct", params: { id: body._id } })
    )
    .catch(onStatus(400, () => alert.value.error("Invalid data supplied")))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", CreateProductvue_type_script_setup_true_lang_js_hoisted_1, [
      CreateProductvue_type_script_setup_true_lang_js_hoisted_2,
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
        onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(createProduct, ["prevent"])
      }, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_4, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_5, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_6,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((product.value.name) = $event)),
              class: "form-control",
              type: "text",
              id: "productName",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], product.value.name]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_7, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_8,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((product.value.category) = $event)),
              class: "form-select",
              id: "productCategory",
              required: ""
            }, CreateProductvue_type_script_setup_true_lang_js_hoisted_14, 512), [
              [vue_runtime_esm_bundler["J" /* vModelSelect */], product.value.category]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_15, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_16,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((product.value.status) = $event)),
              class: "form-select",
              id: "productStatus",
              required: ""
            }, CreateProductvue_type_script_setup_true_lang_js_hoisted_20, 512), [
              [vue_runtime_esm_bundler["J" /* vModelSelect */], product.value.status]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_21, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_22,
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(Object(vue_runtime_esm_bundler["H" /* unref */])(esm["a" /* DatePicker */]), {
              modelValue: product.value.unavailability,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((product.value.unavailability) = $event)),
              clearable: true,
              "is-range": ""
            }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(({ inputValue, inputEvents }) => [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_23, [
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.start
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.start), { "aria-label": "Start" }), null, 16, _hoisted_24),
                  Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                    class: "form-control",
                    value: inputValue.end
                  }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.end), { "aria-label": "End date" }), null, 16, _hoisted_25)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_26, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_27, [
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((product.value.visible) = $event)),
                class: "form-check-input",
                type: "checkbox",
                id: "productVisible"
              }, null, 512), [
                [vue_runtime_esm_bundler["I" /* vModelCheckbox */], product.value.visible]
              ]),
              CreateProductvue_type_script_setup_true_lang_js_hoisted_28
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_29, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_30,
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("textarea", {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((product.value.description) = $event)),
              class: "form-control",
              id: "productDescription",
              rows: "5",
              required: ""
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], product.value.description]
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_31, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_32,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              id: "productImage",
              ref_key: "imageInput",
              ref: imageInput,
              type: "file",
              class: "form-control",
              accept: ".png,.jpg,.jpeg",
              multiple: ""
            }, null, 512)
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_33, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_34,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_35, [
              CreateProductvue_type_script_setup_true_lang_js_hoisted_36,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((product.value.discountPrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productDiscountPrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.discountPrice]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_37, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_38,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_39, [
              CreateProductvue_type_script_setup_true_lang_js_hoisted_40,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((product.value.basePrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productBasePrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.basePrice]
              ])
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_41, [
            CreateProductvue_type_script_setup_true_lang_js_hoisted_42,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", CreateProductvue_type_script_setup_true_lang_js_hoisted_43, [
              CreateProductvue_type_script_setup_true_lang_js_hoisted_44,
              Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((product.value.dailyPrice) = $event)),
                class: "form-control",
                type: "number",
                id: "productDailyPrice",
                value: "0",
                step: "0.01",
                min: "0",
                required: ""
              }, null, 512), [
                [vue_runtime_esm_bundler["K" /* vModelText */], product.value.dailyPrice]
              ])
            ])
          ]),
          CreateProductvue_type_script_setup_true_lang_js_hoisted_45
        ])
      ], 40, CreateProductvue_type_script_setup_true_lang_js_hoisted_3)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/CreateProduct.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/CreateProduct.vue



const CreateProduct_exports_ = CreateProductvue_type_script_setup_true_lang_js;

/* harmony default export */ var CreateProduct = (CreateProduct_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/ListProducts.vue?vue&type=script&setup=true&lang=js


const ListProductsvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const ListProductsvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const ListProductsvue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const ListProductsvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "breadcrumb-item active",
  "aria-current": "page"
}, "Products", -1)
const ListProductsvue_type_script_setup_true_lang_js_hoisted_5 = { class: "breadcrumb-item" }
const ListProductsvue_type_script_setup_true_lang_js_hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("small", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("i", { class: "bi bi-plus-circle" })
], -1)
const ListProductsvue_type_script_setup_true_lang_js_hoisted_7 = { class: "table-responsive" }
const ListProductsvue_type_script_setup_true_lang_js_hoisted_8 = { class: "table table-hover" }
const ListProductsvue_type_script_setup_true_lang_js_hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "name"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "status"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "visible"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "discount price"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "base price"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "daily price"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "rating")
  ])
], -1)
const ListProductsvue_type_script_setup_true_lang_js_hoisted_10 = { scope: "row" }











/* harmony default export */ var ListProductsvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const products = Object(vue_runtime_esm_bundler["A" /* ref */])([]);

getJSON("/api/backoffice/products")
  .then((body) => (products.value = body.products))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", ListProductsvue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", ListProductsvue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", ListProductsvue_type_script_setup_true_lang_js_hoisted_3, [
          ListProductsvue_type_script_setup_true_lang_js_hoisted_4,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", ListProductsvue_type_script_setup_true_lang_js_hoisted_5, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'CreateProduct' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                ListProductsvue_type_script_setup_true_lang_js_hoisted_6
              ]),
              _: 1
            })
          ])
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", ListProductsvue_type_script_setup_true_lang_js_hoisted_7, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", ListProductsvue_type_script_setup_true_lang_js_hoisted_8, [
          ListProductsvue_type_script_setup_true_lang_js_hoisted_9,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(products.value, (product) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: product._id
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", ListProductsvue_type_script_setup_true_lang_js_hoisted_10, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: { name: 'UpdateProduct', params: { id: product._id } }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product._id), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.name), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.status), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.visible), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.discountPrice.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.basePrice.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.dailyPrice.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.rating), 1)
              ]))
            }), 128))
          ])
        ])
      ])
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/ListProducts.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/ListProducts.vue



const ListProducts_exports_ = ListProductsvue_type_script_setup_true_lang_js;

/* harmony default export */ var ListProducts = (ListProducts_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/ListOrders.vue?vue&type=script&setup=true&lang=js


const ListOrdersvue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const ListOrdersvue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", {
  class: "mb-4",
  "aria-label": "breadcrumb"
}, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", { class: "breadcrumb fw-bold" }, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "breadcrumb-item active",
      "aria-current": "page"
    }, "Orders")
  ])
], -1)
const ListOrdersvue_type_script_setup_true_lang_js_hoisted_3 = { class: "table-responsive" }
const ListOrdersvue_type_script_setup_true_lang_js_hoisted_4 = { class: "table table-hover" }
const ListOrdersvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "customer"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "state"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "start date"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "end date"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "days"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "total")
  ])
], -1)
const ListOrdersvue_type_script_setup_true_lang_js_hoisted_6 = { scope: "row" }











/* harmony default export */ var ListOrdersvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();
const orders = Object(vue_runtime_esm_bundler["A" /* ref */])([]);

getJSON("/api/backoffice/orders")
  .then((body) => (orders.value = body.orders))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", ListOrdersvue_type_script_setup_true_lang_js_hoisted_1, [
      ListOrdersvue_type_script_setup_true_lang_js_hoisted_2,
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", ListOrdersvue_type_script_setup_true_lang_js_hoisted_3, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", ListOrdersvue_type_script_setup_true_lang_js_hoisted_4, [
          ListOrdersvue_type_script_setup_true_lang_js_hoisted_5,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(orders.value, (order) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: order._id
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", ListOrdersvue_type_script_setup_true_lang_js_hoisted_6, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: { name: 'UpdateOrder', params: { id: order._id } }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order._id), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: {
                  name: 'UpdateCustomer',
                  params: { id: order.customerId },
                }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.customerId), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.state), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(order.startDate)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(order.endDate)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.days), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.totalPrice.toFixed(2)), 1)
              ]))
            }), 128))
          ])
        ])
      ])
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/ListOrders.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/ListOrders.vue



const ListOrders_exports_ = ListOrdersvue_type_script_setup_true_lang_js;

/* harmony default export */ var ListOrders = (ListOrders_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/UpdateOrder.vue?vue&type=script&setup=true&lang=js


const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_1 = { class: "container w-100 h-100 py-4" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "mb-4",
  "aria-label": "breadcrumb"
}
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_3 = { class: "breadcrumb fw-bold" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_4 = { class: "breadcrumb-item" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("Orders")
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "breadcrumb-item active",
  "aria-current": "page"
}
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", { class: "w-100 text-center" }, "Order", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_8 = ["onSubmit"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_9 = { class: "row g-4" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_10 = { class: "col-md-3" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_11 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", { class: "form-label" }, "Rental Period", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_12 = { class: "input-group" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_13 = ["value", "disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_14 = ["value", "disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_15 = { class: "col-md-3" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_16 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "orderPenaltyPrice",
  class: "form-label"
}, "Penalty price", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_17 = { class: "input-group" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", { class: "input-group-text" }, "€", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_19 = ["disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_20 = { class: "col-md-3" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "orderBillingAddress",
  class: "form-label"
}, "Billing Address", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_22 = ["disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_23 = { class: "col-md-3" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_24 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", {
  for: "orderState",
  class: "form-label"
}, "State", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_25 = ["disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_26 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", {
  value: "open",
  selected: ""
}, "Open", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_27 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("option", { value: "closed" }, "Closed", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_28 = [
  UpdateOrdervue_type_script_setup_true_lang_js_hoisted_26,
  UpdateOrdervue_type_script_setup_true_lang_js_hoisted_27
]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_29 = { class: "col-12" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_30 = ["disabled"]
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_31 = { class: "table-responsive" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_32 = { class: "table table-hover mb-5" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_33 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "customer", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_34 = {
  key: 0,
  scope: "col"
}
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_35 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "state", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_36 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "start date", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_37 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "end date", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_38 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "days", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_39 = { key: 0 }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_40 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", { class: "w-100 text-center" }, "Pricing", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_41 = { class: "table-responsive" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_42 = { class: "table table-hover mb-5" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_43 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "subtotal", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_44 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "discounts", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_45 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "coupons", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_46 = {
  key: 0,
  scope: "col"
}
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_47 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "total", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_48 = { key: 0 }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_49 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", { class: "w-100 text-center" }, "Products", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_50 = { class: "table-responsive" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_51 = { class: "table table-hover mb-5" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_52 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "#"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "name"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "base price"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "daily price"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "discount price")
  ])
], -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_53 = { scope: "row" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_54 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", { class: "w-100 text-center" }, "Coupons", -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_55 = { class: "table-responsive" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_56 = { class: "table table-hover" }
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_57 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "code"),
    /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", { scope: "col" }, "value")
  ])
], -1)
const UpdateOrdervue_type_script_setup_true_lang_js_hoisted_58 = { scope: "row" }













/* harmony default export */ var UpdateOrdervue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();

const orderId = route.params.id;
const order = Object(vue_runtime_esm_bundler["A" /* ref */])({
  products: [],
  coupons: [],
  startDate: "",
  endDate: "",
  subtotalPrice: 0,
  discountsPrice: 0,
  couponsPrice: 0,
  totalPrice: 0,
});

const updatePayload = Object(vue_runtime_esm_bundler["A" /* ref */])({});

function userRole() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role;
}

function isEmployee() {
  return userRole() === "employee";
}

getJSON(`/api/backoffice/orders/${orderId}`)
  .then((body) => {
    order.value = body;

    updatePayload.value = {
      billingAddress: body.billingAddress,
      state: body.state,
      range: {
        start: new Date(body.startDate),
        end: new Date(body.endDate),
      },
      penaltyPrice: body.penaltyPrice,
    };
  })
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function deleteOrder() {
  deleteJSON(`/api/backoffice/orders/${orderId}`, false)
    .then(() => router.replace({ name: "ListOrders" }))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch(onStatus(422, () => alert.value.error("Unable to delete order")))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

function updateOrder() {
  order.value.billingAddress = updatePayload.value.billingAddress;
  order.value.state = updatePayload.value.state;
  order.value.startDate = updatePayload.value.range.start;
  order.value.endDate = updatePayload.value.range.end;
  order.value.penaltyPrice =
    updatePayload.value.state === "closed"
      ? updatePayload.value.penaltyPrice
      : 0;

  putJSON(`/api/backoffice/orders/${orderId}`, order.value)
    .then((body) => {
      order.value = body;

      updatePayload.value = {
        billingAddress: body.billingAddress,
        state: body.state,
        range: {
          start: new Date(body.startDate),
          end: new Date(body.endDate),
        },
        penaltyPrice: body.penaltyPrice,
      };

      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [
    Object(vue_runtime_esm_bundler["k" /* createVNode */])(Navbar),
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_1, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("nav", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_2, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_3, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_4, [
            Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'ListOrders' } }, {
              default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_5
              ]),
              _: 1
            })
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_6, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value._id), 1)
        ])
      ]),
      Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
        ref_key: "alert",
        ref: alert
      }, null, 512),
      UpdateOrdervue_type_script_setup_true_lang_js_hoisted_7,
      (order.value.state === 'open')
        ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("form", {
            key: 0,
            class: "mb-5",
            onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(updateOrder, ["prevent"])
          }, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_9, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_10, [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_11,
                Object(vue_runtime_esm_bundler["k" /* createVNode */])(Object(vue_runtime_esm_bundler["H" /* unref */])(esm["a" /* DatePicker */]), {
                  modelValue: updatePayload.value.range,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((updatePayload.value.range) = $event)),
                  "is-range": ""
                }, {
                  default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(({ inputValue, inputEvents }) => [
                    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_12, [
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                        class: "form-control",
                        value: inputValue.start,
                        disabled: !isEmployee()
                      }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.start), { "aria-label": "Start date" }), null, 16, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_13),
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", Object(vue_runtime_esm_bundler["p" /* mergeProps */])({
                        class: "form-control",
                        value: inputValue.end,
                        disabled: !isEmployee()
                      }, Object(vue_runtime_esm_bundler["G" /* toHandlers */])(inputEvents.end), { "aria-label": "End date" }), null, 16, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_14)
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_15, [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_16,
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_17, [
                  UpdateOrdervue_type_script_setup_true_lang_js_hoisted_18,
                  Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((updatePayload.value.penaltyPrice) = $event)),
                    class: "form-control",
                    type: "number",
                    id: "orderPenaltyPrice",
                    value: "0",
                    step: "0.01",
                    min: "0",
                    required: "",
                    disabled: updatePayload.value.state !== 'closed' || !isEmployee()
                  }, null, 8, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_19), [
                    [vue_runtime_esm_bundler["K" /* vModelText */], updatePayload.value.penaltyPrice]
                  ])
                ])
              ]),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_20, [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_21,
                Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((updatePayload.value.billingAddress) = $event)),
                  class: "form-control",
                  type: "text",
                  id: "orderBillingAddress",
                  disabled: !isEmployee()
                }, null, 8, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_22), [
                  [vue_runtime_esm_bundler["K" /* vModelText */], updatePayload.value.billingAddress]
                ])
              ]),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_23, [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_24,
                Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((updatePayload.value.state) = $event)),
                  class: "form-select",
                  id: "orderState",
                  disabled: !isEmployee(),
                  required: ""
                }, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_28, 8, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_25), [
                  [vue_runtime_esm_bundler["J" /* vModelSelect */], updatePayload.value.state]
                ])
              ]),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_29, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
                  type: "submit",
                  class: "btn btn-danger",
                  disabled: !isEmployee()
                }, " Update ", 8, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_30),
                (new Date() < new Date(order.value.startDate))
                  ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("button", {
                      key: 0,
                      type: "button",
                      class: "btn btn-warning ms-2",
                      onClick: deleteOrder
                    }, " Delete "))
                  : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
              ])
            ])
          ], 40, UpdateOrdervue_type_script_setup_true_lang_js_hoisted_8))
        : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_31, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_32, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_33,
              (order.value.employeeId)
                ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("th", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_34, "employee"))
                : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_35,
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_36,
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_37,
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_38
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, [
                (order.value.customerId)
                  ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_router_link, {
                      key: 0,
                      to: {
                  name: 'UpdateCustomer',
                  params: { id: order.value.customerId },
                }
                    }, {
                      default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                        Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.customerId), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]))
                  : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
              ]),
              (order.value.employeeId)
                ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("td", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_39, [
                    (order.value.employeeId)
                      ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_router_link, {
                          key: 0,
                          to: {
                  name: 'UpdateEmployee',
                  params: { id: order.value.employeeId },
                }
                        }, {
                          default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                            Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.employeeId), 1)
                          ]),
                          _: 1
                        }, 8, ["to"]))
                      : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
                  ]))
                : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.state), 1),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(order.value.startDate)), 1),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(Object(vue_runtime_esm_bundler["H" /* unref */])(formatDate)(order.value.endDate)), 1),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.days), 1)
            ])
          ])
        ])
      ]),
      UpdateOrdervue_type_script_setup_true_lang_js_hoisted_40,
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_41, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_42, [
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("thead", null, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_43,
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_44,
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_45,
              (order.value.state === 'closed')
                ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("th", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_46, "penalty"))
                : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
              UpdateOrdervue_type_script_setup_true_lang_js_hoisted_47
            ])
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tr", null, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.subtotalPrice.toFixed(2)), 1),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.discountsPrice.toFixed(2)), 1),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.couponsPrice.toFixed(2)), 1),
              (order.value.state === 'closed')
                ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("td", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_48, " € " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.penaltyPrice.toFixed(2)), 1))
                : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true),
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(order.value.totalPrice.toFixed(2)), 1)
            ])
          ])
        ])
      ]),
      UpdateOrdervue_type_script_setup_true_lang_js_hoisted_49,
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_50, [
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_51, [
          UpdateOrdervue_type_script_setup_true_lang_js_hoisted_52,
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
            (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(order.value.products, (product) => {
              return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                key: product.productId
              }, [
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_53, [
                  Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
                    to: {
                  name: 'UpdateProduct',
                  params: { id: product.productId },
                }
                  }, {
                    default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
                      Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.productId), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.name), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.basePrice.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.dailyPrice.toFixed(2)), 1),
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(product.discountPrice.toFixed(2)), 1)
              ]))
            }), 128))
          ])
        ])
      ]),
      (order.value.coupons && order.value.coupons.length > 0)
        ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], { key: 1 }, [
            UpdateOrdervue_type_script_setup_true_lang_js_hoisted_54,
            Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_55, [
              Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("table", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_56, [
                UpdateOrdervue_type_script_setup_true_lang_js_hoisted_57,
                Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("tbody", null, [
                  (Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(order.value.coupons, (coupon) => {
                    return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("tr", {
                      key: coupon.code
                    }, [
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("th", UpdateOrdervue_type_script_setup_true_lang_js_hoisted_58, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.code), 1),
                      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("td", null, "€ " + Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(coupon.value.toFixed(2)), 1)
                    ]))
                  }), 128))
                ])
              ])
            ])
          ], 64))
        : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)
    ])
  ], 64))
}
}

});
// CONCATENATED MODULE: ./src/views/UpdateOrder.vue?vue&type=script&setup=true&lang=js
 
// CONCATENATED MODULE: ./src/views/UpdateOrder.vue



const UpdateOrder_exports_ = UpdateOrdervue_type_script_setup_true_lang_js;

/* harmony default export */ var UpdateOrder = (UpdateOrder_exports_);
// EXTERNAL MODULE: ./src/assets/nolonoloplus-dark.png
var nolonoloplus_dark = __webpack_require__("1683");
var nolonoloplus_dark_default = /*#__PURE__*/__webpack_require__.n(nolonoloplus_dark);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Signin.vue?vue&type=script&setup=true&lang=js




const Signinvue_type_script_setup_true_lang_js_withScopeId = n => (Object(vue_runtime_esm_bundler["y" /* pushScopeId */])("data-v-e90a6c2e"),n=n(),Object(vue_runtime_esm_bundler["w" /* popScopeId */])(),n)
const Signinvue_type_script_setup_true_lang_js_hoisted_1 = { class: "w-100 h-100 container" }
const Signinvue_type_script_setup_true_lang_js_hoisted_2 = { class: "row d-flex text-center align-items-center m-auto w-100 h-100" }
const Signinvue_type_script_setup_true_lang_js_hoisted_3 = { class: "col m-auto" }
const Signinvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/ Signinvue_type_script_setup_true_lang_js_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("img", {
  src: nolonoloplus_dark_default.a,
  alt: "Nolo Nolo Plus Logo"
}, null, -1))
const Signinvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/ Signinvue_type_script_setup_true_lang_js_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h1", { class: "my-4 fw-normal" }, "Backoffice", -1))
const Signinvue_type_script_setup_true_lang_js_hoisted_6 = ["onSubmit"]
const Signinvue_type_script_setup_true_lang_js_hoisted_7 = { class: "form-floating" }
const Signinvue_type_script_setup_true_lang_js_hoisted_8 = /*#__PURE__*/ Signinvue_type_script_setup_true_lang_js_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", { for: "email" }, "Email", -1))
const Signinvue_type_script_setup_true_lang_js_hoisted_9 = { class: "form-floating" }
const Signinvue_type_script_setup_true_lang_js_hoisted_10 = /*#__PURE__*/ Signinvue_type_script_setup_true_lang_js_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("label", { for: "password" }, "Password", -1))
const Signinvue_type_script_setup_true_lang_js_hoisted_11 = /*#__PURE__*/ Signinvue_type_script_setup_true_lang_js_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("button", {
  class: "btn btn-lg btn-info w-100 mt-4",
  type: "submit"
}, " Sign in ", -1))









/* harmony default export */ var Signinvue_type_script_setup_true_lang_js = ({
  setup(__props) {

const router = Object(vue_router_esm_bundler["d" /* useRouter */])();
const route = Object(vue_router_esm_bundler["c" /* useRoute */])();

const alert = Object(vue_runtime_esm_bundler["A" /* ref */])();

// https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs
const emailInput = Object(vue_runtime_esm_bundler["A" /* ref */])();

const employee = Object(vue_runtime_esm_bundler["A" /* ref */])({});

function signin() {
  postJSON("/api/backoffice/signin", employee.value)
    .then((body) => {
      const returnTo = route.params.returnTo || { name: "Home" };
      sessionStorage.setItem("user", JSON.stringify(body));
      router.push(returnTo);
    })
    .catch(
      onStatus(401, () => {
        employee.value = {};
        emailInput.value.focus();
        alert.value.error("Signin required");
      })
    )
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

return (_ctx, _cache) => {
  const _component_router_link = Object(vue_runtime_esm_bundler["D" /* resolveComponent */])("router-link")

  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("main", Signinvue_type_script_setup_true_lang_js_hoisted_1, [
    Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", Signinvue_type_script_setup_true_lang_js_hoisted_2, [
      Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", Signinvue_type_script_setup_true_lang_js_hoisted_3, [
        Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, { to: { name: 'Home' } }, {
          default: Object(vue_runtime_esm_bundler["M" /* withCtx */])(() => [
            Signinvue_type_script_setup_true_lang_js_hoisted_4
          ]),
          _: 1
        }),
        Signinvue_type_script_setup_true_lang_js_hoisted_5,
        Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("form", {
          onSubmit: Object(vue_runtime_esm_bundler["O" /* withModifiers */])(signin, ["prevent"])
        }, [
          Object(vue_runtime_esm_bundler["k" /* createVNode */])(Alert, {
            ref_key: "alert",
            ref: alert
          }, null, 512),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", Signinvue_type_script_setup_true_lang_js_hoisted_7, [
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              id: "email",
              type: "email",
              name: "email",
              autocomplete: "email",
              placeholder: "email@example.com",
              class: "form-control rounded-0 rounded-top",
              required: "",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((employee.value.email) = $event)),
              ref_key: "emailInput",
              ref: emailInput
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], employee.value.email]
            ]),
            Signinvue_type_script_setup_true_lang_js_hoisted_8
          ]),
          Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", Signinvue_type_script_setup_true_lang_js_hoisted_9, [
            Object(vue_runtime_esm_bundler["N" /* withDirectives */])(Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("input", {
              id: "password",
              type: "password",
              name: "password",
              autocomplete: "current-password",
              placeholder: "Password",
              class: "form-control rounded-0 rounded-bottom",
              minlength: "4",
              required: "",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((employee.value.password) = $event))
            }, null, 512), [
              [vue_runtime_esm_bundler["K" /* vModelText */], employee.value.password]
            ]),
            Signinvue_type_script_setup_true_lang_js_hoisted_10
          ]),
          Signinvue_type_script_setup_true_lang_js_hoisted_11
        ], 40, Signinvue_type_script_setup_true_lang_js_hoisted_6)
      ])
    ])
  ]))
}
}

});
// CONCATENATED MODULE: ./src/views/Signin.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./src/views/Signin.vue?vue&type=style&index=0&id=e90a6c2e&scoped=true&lang=css
var Signinvue_type_style_index_0_id_e90a6c2e_scoped_true_lang_css = __webpack_require__("2b3f");

// CONCATENATED MODULE: ./src/views/Signin.vue






const Signin_exports_ = /*#__PURE__*/exportHelper_default()(Signinvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-e90a6c2e"]])

/* harmony default export */ var Signin = (Signin_exports_);
// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/PageNotFound.vue?vue&type=template&id=06c891fb&scoped=true


const PageNotFoundvue_type_template_id_06c891fb_scoped_true_withScopeId = n => (Object(vue_runtime_esm_bundler["y" /* pushScopeId */])("data-v-06c891fb"),n=n(),Object(vue_runtime_esm_bundler["w" /* popScopeId */])(),n)
const PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_1 = { class: "w-100 h-100 container" }
const PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_2 = /*#__PURE__*/ PageNotFoundvue_type_template_id_06c891fb_scoped_true_withScopeId(() => /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", { class: "text-center" }, [
  /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h1", null, "Page not found!")
], -1))
const PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_3 = [
  PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_2
]

function PageNotFoundvue_type_template_id_06c891fb_scoped_true_render(_ctx, _cache) {
  return (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("main", PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_1, PageNotFoundvue_type_template_id_06c891fb_scoped_true_hoisted_3))
}
// CONCATENATED MODULE: ./src/views/PageNotFound.vue?vue&type=template&id=06c891fb&scoped=true

// EXTERNAL MODULE: ./src/views/PageNotFound.vue?vue&type=style&index=0&id=06c891fb&scoped=true&lang=css
var PageNotFoundvue_type_style_index_0_id_06c891fb_scoped_true_lang_css = __webpack_require__("0f67");

// CONCATENATED MODULE: ./src/views/PageNotFound.vue

const PageNotFound_script = {}




const PageNotFound_exports_ = /*#__PURE__*/exportHelper_default()(PageNotFound_script, [['render',PageNotFoundvue_type_template_id_06c891fb_scoped_true_render],['__scopeId',"data-v-06c891fb"]])

/* harmony default export */ var PageNotFound = (PageNotFound_exports_);
// CONCATENATED MODULE: ./src/router/index.js






















const routes = [
  {
    path: "/",
    redirect: { name: "ListOrders" },
    name: "Home",
    meta: {
      restricted: false,
    },
  },

  {
    path: "/orders/:id",
    name: "UpdateOrder",
    component: UpdateOrder,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/orders",
    name: "ListOrders",
    component: ListOrders,
    meta: {
      restricted: true,
    },
  },

  {
    path: "/products/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products",
    name: "ListProducts",
    component: ListProducts,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products",
    name: "CreateProduct",
    component: CreateProduct,
    meta: {
      restricted: true,
    },
  },

  {
    path: "/coupons/:id",
    name: "UpdateCoupon",
    component: UpdateCoupon,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/coupons",
    name: "ListCoupons",
    component: ListCoupons,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/coupons",
    name: "CreateCoupon",
    component: CreateCoupon,
    meta: {
      restricted: true,
    },
  },

  {
    path: "/customers/:id",
    name: "UpdateCustomer",
    component: UpdateCustomer,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/customers",
    name: "ListCustomers",
    component: ListCustomers,
    meta: {
      restricted: true,
    },
  },

  {
    path: "/employees/:id",
    name: "UpdateEmployee",
    component: UpdateEmployee,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/employees",
    name: "ListEmployees",
    component: ListEmployees,
    meta: {
      restricted: true,
    },
  },

  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: {
      restricted: false,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
    meta: {
      restricted: false,
    },
  },
];

const router_router = Object(vue_router_esm_bundler["a" /* createRouter */])({
  history: Object(vue_router_esm_bundler["b" /* createWebHistory */])("/backoffice/"),
  routes,
});

router_router.beforeEach((to, from, next) => {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const ROLES = ["employee", "admin"];

  if (to.meta.restricted && !ROLES.includes(user.role)) {
    next({ name: "Signin", params: { returnTo: to.fullPath } });
  } else {
    next();
  }
});

/* harmony default export */ var src_router = (router_router);

// CONCATENATED MODULE: ./src/main.js




Object(vue_runtime_esm_bundler["d" /* createApp */])(App).use(src_router).mount("#app");


/***/ }),

/***/ "7654":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_UpdateProduct_vue_vue_type_style_index_0_id_38ede352_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("145c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_UpdateProduct_vue_vue_type_style_index_0_id_38ede352_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_UpdateProduct_vue_vue_type_style_index_0_id_38ede352_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a4f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc1f":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABgCAYAAAGh5oayAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpaItDnbQIpKhOlkQFXHUKhShQqgVWnUwufRDaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIm5uToouU+L+00CLGg+N+vLv3uHsHCLUS06yOMUDTbTOViIuZ7IoYeEUPhhBCBAMys4xZSUrCc3zdw8fXuxjP8j735wipOYsBPpF4hhmmTbxOPLVpG5z3icOsKKvE58SjJl2Q+JHrSoPfOBdcFnhm2Eyn5ojDxGKhjZU2ZkVTI54kjqqaTvlCpsEq5y3OWqnCmvfkLwzm9OUlrtMcRAILWIQEEQoq2EAJNmK06qRYSNF+3MMfcf0SuRRybYCRYx5laJBdP/gf/O7Wyk+MN5KCcaDzxXE+hoHALlCvOs73sePUTwD/M3Clt/zlGjD9SXq1pUWPgN5t4OK6pSl7wOUO0P9kyKbsSn6aQj4PvJ/RN2WBvluge7XRW3Mfpw9AmrpK3gAHh8BIgbLXPN7d1d7bv2ea/f0Ac19yp+8hN8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAA3DSURBVHja7V1rkBXFFf76AlEQNETxBan4KKJiLLm7WGBCkIAPVECiMYmYCGolFpYxpCpKlPgqH1illVKiRilCjPL4oW4hoBAVgbsgKUGoJJLEB5Ioa4yIlrzJ7t4vP+hhe3tPz/TMnb27Qn9Vt+5MP06f06cfp3vO9AAdCpJMEx5LSMpkhzeXiiwYkXcDgFJKAdhol2yGN5eKFFnUBTTq641SePtVHskv+VReVweNvQBUlEHL24ZQwQq8HUBPfV1vZ4oLtyvtSv1/o6kqO/yLCJJDSPa3VeFqpmKb1VhE8g6z4vR/6/AVxWEwdQlgA4DTlVKKJPX/JqXUicY9y/U10wDcYpZ8jcSqvi1JPap9BgXfyis46NSaGXRzHBmrBZIfkdyVeWiy2jeTwgNSN42/kZxA8kNbGSR7kdxKcoaP0uLSJ7ZJqY2SHGHdPyC1YVd63Zveby4Vd7ha1F9IDhEIkeRZ1v2VMQW3St8+3fhAanQ01DCT5DrPPJvyKHgVybMNBnpII0vMfWx6V6HjBMlJ8qUUBcemDwg4sAeKAUlN3rTy8iy4RHKeETeb5FZHniVCuJjep2CS7GlcbyH5smNgOF4IE9Pbs1NXkj309e9ITtLm3Q6Sw/V1H9eIo5T60Cg0MX2rvCTnAPiqUmqYaVeS/ATAV5RShYiQufwR7p3pxXlYV88AR5V/pq/7eY7J7vSvndm3VVVrCf8uVKMSrGvRZFIacenZ1GUWEOaHTjaa9dYqUz7dI8/R7FmSk0m+mMZyyGsYPVIw8o+1FuUbErpZbPpUqwuSR+jrcyxD7lpH/xbT+6xXryW5R1gtLLLuG0k2x6wuFqUteCXJCY5lyr3W/aSEZc29vgU/LGQWW7AVtSUpfUBAQEB6KNfY5tqaF3fZK5grs9LLCvNZzH36cqq+Nwf+m/Xlzsw1awBAkw4ud/hikWSNY6+dJK+w8rxJN87wKGtSAk+Z6JvLNOdGorVw2aZvD7PjBKYfscLvjJt1SQ71mZWz0t8vbH3NQ5LAXTWRH1jpzwewGsAykr8UmJlhNNUbrOheCRU/y6O1pabPlcVB5TLWGETEBXlUwOe60m4WavgF/X+fEPdqjGZWJmjuIQ/tpqZvN2cuO71nm1FaGoFJLgdwDoDPAPS24tYDGKhvGwA8DuBcnR4AmpRS3TxG69sBNBravL9S+vua88DrQfUoAHQZtl7ZDJzm6KOHJlnBJKeS3ExyF8kVJAd5DpC3kvzUGoQm50U/IFhaFVpOXySrrJCRoQn6cqm+v9yIG5eDIm4xfp93hk2v3XqgGS1YZR/poDutPIeQ3C5YTK97GiAPJaTLRD+VGSpZYR57Id2N8J0Js0CflFZZKvq+wg60BL5O3z5hbtoZ6SfHeJb9JEHgBUkMV0LfV+C1msZMoYb/oP+fE+L+JdBq0nHbEzS3xEO7qemnXVUdYoRFRsRb+r+3o7mZed720B7tyk1ozqno+wjbzdFHa+OsMpL3OJZ4NQnlfcOR74k86AcEBAQEBAQEBLTXGvdj1xYoyfd0+MMZaV/lMP1md6TAPs/2R2akPd8h8OWdQeC9MQKrHMrpJi3WqwVpT2uLK7FSyrXI/of2adlA8sKEMi826O32qKC09L1q/USj1p/V/xfouF6OZt4v5snepzFlzfLctslEP0JzqfiJftyyRdLwGP2/HcBcfT3RirPxgXH9RwDT0OJi2Dtm9/ISTz1kpR/hSF1zdVJtvqJrbi7JyHWyWcfN1fdLjfSLk96AJFlKGCvWxGg3M31Dw2wuFdlYqrlA0vAI/b/I6KcFq88tNPKN0v+LY8pM2k9eEBOXB30AQNdvr3up1X00fkQCC3kOj2FwXkxZixN4ed6DX2/6rif95fpiubkUCanmF6xReJu+fEc3nwFG3HsCvbo0ApE81aD3Vw+B6yqssNbCK92fhb3kX0cPyIW4wTH9qyZhn3mKx05lZvqGttfqPtzGaaYQudJbeEr/nyDEmTv7Pay4VxIqeZiHIiqhH6FW99OX2vRpAGP19Sajub2vK3GIbYwopZYbFbyT5OMAtgG4yRgLah2MfGoI8wKAeiPuQaVUU4X0W7cIpcQp6R3dSqbH2NYzrbg5MUbBz2Kaa3dXpjzo21MSl9UeFTcvnm+FNxpxlwj5+pJ8VT9JbCB5v6dVdzjJ1STLCZv3megHBAQEBOj3TSL81opbkvQQO4H2WY7paE1n2f/aZsVFT92vz0h7mkPg2/LgPRc/KvtlTH35VaXU5gy0JwI41giapv/P9FxwtKuGP8905ox/Oafm/cZTIQMTZp5oGXm0Rz6XW0L/mGyXpOArC30vwqMMYnfp/yk6bpDDNt7IeHR1lPWa54ZfJvq+Aj+qiawlebK+/qeOi9zzNxvpL5K86Uh+xwifldB1tsXwk5m+r8AfmK6FlpNa5MP1mJH+fzpsR4xAqxIEnh3DTyr6WZxL+8Xsf9UKG36R5/r0GJpvVLD/lQf95BHauG/WQV2MGi0ItVwbo4ERQpz5SOZQjxkjFf1KBH5GB31fiDsmZr17SML+1ziP/a/U9AsphT0uZv9L2nYZGENuSkJxYzxYqoS+l8DXmU8lLK3/XtBwX6NZmaeTFD1e91nqoeHM9H0FXiQtDKw5rz4mjr7vjJOc6Ln/lYm+r8DRwuCGmEJvsi0zknsEXlZ7lNfgIXBm+gEBAQEBAQEBAQEBAQEBAQEHJKxH3XQ99hbyLbHSL6ky32cxHdYc6LosCJXUG8C3HOknuN7w0N+MOdcKXlBleS5NmX7Bga5g6XnpWOt+KfQ3TLDv0K7vAXhGyHcRgC4dXIFvIfquTFv8CsARVtjzONhgvL2z/3gr4yA1RicgC/lmWvnWdSKZThWG500Hgz7tD2UVYLwvpvEutMuKxoUO15XRaXqvfoh5j+OYIAmvV+CWIrnEPF9ho6km/7m19FECY0caLjo0XXWMfIN8j0bRpxJtZHZsSOuKY7oAVeoK0BH8tyq/VOwTuflHv6b6YsnXyLKftL+hlNqKlif7Ea5O6L0NSql1QuVcBOA/AE6yoh4G0ENZwL635HZZaQcAmJFCIX0AnG0Fb1dKvZpBuVXn30aZqo0hqajqfBVsG1iLAEAptRHAa0b4KSTPTjM869eO5lvBOwF8WSk1WXp9WCm1TBtvNk5JUSdj87CeO5B/i2bblUKh4FZwV0OAgWhxM2ulYI2nAHzTuJ8IYDXJY9HWZ2ehUNZP0eI2FmG6UirpvdCvC2FpXMvymn+rwj/X1vYo7yzL3/JUVATPs0I/LjeXxzevKLalpfhR15iW/l+l1FrjfjaAx4xe/2Pt5m4bZXsB/Elg7zIh7LmMCprv2eu6AbAPCSg7GmASqsJ/8+7yZUrt94K3NSwFHg1HegU1rZA0PBvDzU60fn+3uxZ6qJXvBaVU2aroY4R0/1ZKvZFkqaLl7fAIO1LMnxcLa/2XlVJ7Ug7PVeO/IMyxmZdIBdRFJ6QfJwyzkjfwU3qjI0ItgP4e85vkAvm2B49ThM2T6SlkHJPT8Fw1/gvD1n3X2btLNdsAmifEv99l2Pqv+ayDxwrD2GLBaFiIfQemRzgKQB8PBb8phJ1Hcp551KbR8osk3wZwlxW1Sik1NYViThDCajMouKP434/GUnGkpVwArPPd6BgjDGN7HXmeNq6vsYyIlUqpz4SG0QDgRwKtHwLYI3iKrhNGhp8rpYamrJenhbBrE9apWzoR/6ai2szlhXIhWcHaEBnlMTybw7QLC9zmvZqjh6t7tSHmgz8DqNXLyulpK0Up9SSAMwB8mCJbXWfh3zKJN4C4bf8Paooavq4eAQEBAQEBAQEBAQFfZFjnNtP3vVbjTGdWcrZzBXxflfKZ7+yDUblDEiqlvyPfACHtyCrzPj+lgi8/GBV8n1UJt0bnc8d9udw8LzQ6kiOPs7tzkqmbdR4i9cEW3TtLvReqWJa9HdqA1ueRX+3IZzsTLJTOKhcqv5c+X3y2PmN8q1bGVu02MyOH88ZdT6t259B4qsF/bi39RMlnS/DgvEAQ0sYVMeX0S/gKs/OMdZ8vNAvlzRJoTaqgnqrKf54KvlE6J4/kpVb4PCvfeEGYno4yFrkeHpB8kuQdepp42T4G1sC4lHJtFWgcn7GOqs5/ngp+xWJkrg5XxufIo/nrMCPfXCvfUgf9xYKwjyTwdKeQp5RCpqF5vQrTEfznqdweQosbb8Q/5hriLId71zemhwuCvujB1wgh38IUcj2Qx8ma7c1/NYysMWjrTGQ788E2tkgOQ8v3FCJIjyPHC2HzPA0kG4tTyJWXM19H8Z9bD56TNIyYH03VGEDybivsTQf9T6x0ZXOYj+HrXaEH9PWUKbdXYdqb/2r04NExvdfVi0cDqEnqvSQHI/qgTguWawfBuMqpAXCyFbxKe25UrfdWg/9CO/fe4cIw66PgE9DWR1sanqUNhaLwbY9WSxHI3/r4RQrRpG+NZDGw2p1/1c4K/o1V8Cal1EmOtMsBnKNv12slR9/c3qKUOtqRbz1kr8cG7PN/bsC+114Ha8XYMjcBGCy9ahMj19OQfbRexD43nUZH1geVUk0dzX+eCn7HmiOmx6S9JmYhPzPlPO+DRp/vuTjK657hBbRSZ+E/L+WeJjB1fkz6Q4V9Xec3bxw0+pKcqr9Vs1l/r2aXPudzBcn7SQ7KUcbD9Z76ar2bVI5RyOTOxn9AQEBAQEBAQEBAgIT/A/3kGaRip9a0AAAAAElFTkSuQmCC"

/***/ })

/******/ });
//# sourceMappingURL=app.09e7a211.js.map