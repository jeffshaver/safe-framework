'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnChart = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighcharts = require('react-highcharts');

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseConfig = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Browser market shares. January, 2015 to May, 2015'
  },
  subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total percent market share'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  }
};

var ColumnChart = exports.ColumnChart = (_temp = _class = function (_Component) {
  _inherits(ColumnChart, _Component);

  function ColumnChart() {
    _classCallCheck(this, ColumnChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ColumnChart).apply(this, arguments));
  }

  _createClass(ColumnChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var drilldown = _props.drilldown;
      var series = _props.series;
      var title = _props.title;

      var config = _extends({}, baseConfig, {
        drilldown: drilldown,
        series: series,
        title: { text: title }
      });

      console.log(config);
      return _react2.default.createElement(_reactHighcharts2.default, {
        config: config,
        drilldown: this.props.drilldown,
        series: this.props.series
      });
    }
  }]);

  return ColumnChart;
}(_react.Component), _class.propTypes = {
  drilldown: _react.PropTypes.object,
  series: _react.PropTypes.array.isRequired,
  title: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
  drilldown: {}
}, _temp);