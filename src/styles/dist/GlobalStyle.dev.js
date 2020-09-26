"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _styledModernNormalize = _interopRequireDefault(require("styled-modern-normalize"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n    // Import normalize.css\n    ", "\n    * {\n        box-sizing: border-box;\n    }\n    html {\n        width: 100%;\n        height: 100%;\n    }\n    body {\n        background-color: ", ";\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        font-size: 1rem;\n        font-family: 'VT323', monospace;\n        line-height: 1.5rem;\n        font-weight: 400;\n        text-rendering: optimizeLegibility;\n        &.blur {\n            overflow: hidden;\n                #___gatsby #main-content > * {\n                    filter: blur(5px) ;\n                    transition: all .3s ease-out;\n                    pointer-events: none;\n                    user-select: none;\n                }\n            }\n        }\n        &.splashScreen {\n            position: fixed;\n            overflow: hidden;\n        }\n    a {\n        display: inline-block;\n        text-decoration: none;\n        text-decoration-skip-ink: auto;\n        color: inherit;\n        cursor: pointer;\n        &:hover,\n        &:focus {\n            outline: 0;\n        }\n    }\n    h1 {\n        font-weight: 700;\n        font-size: 2rem;\n        line-height: 2.375rem;\n    }\n    h2 {\n        font-weight: 700;\n        font-size: 1.25rem;\n        line-height: 1.5rem;\n    }\n    h3 {\n        font-weight: 700;\n        font-size: 1.75rem;\n        line-height: 2.25rem;\n        margin-bottom: 3rem;\n    }\n    h4 {\n        font-size: 1rem;\n        line-height: 1.5rem;\n        font-weight: 400;\n    }\n    hr {\n        margin: 3rem auto;\n        border-width: .05rem;\n        opacity: 0.1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _styledModernNormalize["default"], function (props) {
  return props.theme === 'dark' ? "#121212" : "#FFFFFF";
});
var _default = GlobalStyle;
exports["default"] = _default;