'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accentColor = 'hsl(191, 69%, 42%)';
var body = 'hsl(360, 100%, 100%)';
var bodyText = 'hsl(191, 69%, 20%)';
var fadedBody = (0, _color2.default)(body).alpha(0.98).hslString();

exports.default = {
  accentColor: accentColor,
  body: body,
  bodyText: bodyText,
  fadedBody: fadedBody
};
module.exports = exports['default'];