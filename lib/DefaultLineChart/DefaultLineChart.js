'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultLineChart = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _index = require('../LineChart/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../DataTable/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLineChart = exports.DefaultLineChart = (_temp = _class = function (_Component) {
  _inherits(DefaultLineChart, _Component);

  function DefaultLineChart() {
    _classCallCheck(this, DefaultLineChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultLineChart).apply(this, arguments));
  }

  _createClass(DefaultLineChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.size },
        _react2.default.createElement(
          _materialUi.Tabs,
          null,
          _react2.default.createElement(
            _materialUi.Tab,
            { label: 'Chart' },
            _react2.default.createElement(_index2.default, {
              drilldown: this.props.drilldown,
              series: this.props.series,
              title: this.props.title
            })
          ),
          _react2.default.createElement(
            _materialUi.Tab,
            { label: 'Data' },
            _react2.default.createElement(_index4.default, {
              columns: this.props.columns,
              data: this.props.data
            })
          )
        )
      );
    }
  }]);

  return DefaultLineChart;
}(_react.Component), _class.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  data: _react.PropTypes.array.isRequired,
  drilldown: _react.PropTypes.object,
  series: _react.PropTypes.array.isRequired,
  size: _react.PropTypes.string,
  title: _react.PropTypes.string.isRequired
}, _temp);