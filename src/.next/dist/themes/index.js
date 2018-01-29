"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  @import url(\"https://fonts.googleapis.com/css?family=Nunito|PT+Sans\");\n\n  body {\n    ", "\n    line-height: 1.5;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: ", ";\n    font-weight: ", ";\n  }\n\n  h1 {\n    font-size: 2.5em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  h3 {\n    font-size: 1.4em;\n  }\n\n  h4 {\n    font-size: 1.1em;\n  }\n"], ["\n  @import url(\"https://fonts.googleapis.com/css?family=Nunito|PT+Sans\");\n\n  body {\n    ", "\n    line-height: 1.5;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: ", ";\n    font-weight: ", ";\n  }\n\n  h1 {\n    font-size: 2.5em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  h3 {\n    font-size: 1.4em;\n  }\n\n  h4 {\n    font-size: 1.1em;\n  }\n"]);

var _styledComponents = require("styled-components");

var _colors = require("./colors");

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require("./fonts");

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// eslint-disable-next-line no-unused-expressions
(0, _styledComponents.injectGlobal)(_templateObject, (0, _keys2.default)(_fonts2.default.body).map(function (propName) {
  return propName + ": " + _fonts2.default.body[propName] + ";";
}), _fonts2.default.headline["font-family"], _fonts2.default.headline["font-weight"]);

exports.default = {
  colors: _colors2.default,
  fonts: _fonts2.default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYm9keSIsIm1hcCIsInByb3BOYW1lIiwiaGVhZGxpbmUiLCJjb2xvcnMiLCJmb250cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSx5RUFJa0IsZ0JBQVosQUFBa0IsTUFBbEIsQUFDRCxJQUFJLG9CQUFBO1NBQUEsQUFBZSxrQkFBYSxnQkFBQSxBQUFNLEtBQWxDLEFBQTRCLEFBQVcsWUFBdkM7QUFMVCxBQUlNLENBQUEsR0FNYSxnQkFBQSxBQUFNLFNBVnpCLEFBVW1CLEFBQWUsZ0JBQ2YsZ0JBQUEsQUFBTSxTQVh6QixBQVdtQixBQUFlOzs7bUJBb0JuQixBQUViO2lCQUZhLEE7QUFBQSxBQUNiIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtvYi9wcm9qZWN0cy92b2ljZS5saW5rLWFtcCJ9