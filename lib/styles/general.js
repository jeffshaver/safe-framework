'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = undefined;

var _mediaQueries = require('./media-queries');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wrapper = exports.wrapper = _defineProperty({
  width: '100%',
  margin: '0 auto'
}, _mediaQueries.medium, {
  width: '75%'
});