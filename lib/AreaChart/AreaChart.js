'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AreaChart = undefined;

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
    type: 'area'
  },
  title: {
    text: 'US and USSR nuclear stockpiles'
  },
  subtitle: {
    text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' + 'thebulletin.metapress.com</a>'
  },
  xAxis: {
    allowDecimals: false,
    labels: {
      formatter: function formatter() {
        return this.value;
      }
    }
  },
  yAxis: {
    title: {
      text: 'Nuclear weapon states'
    },
    labels: {
      formatter: function formatter() {
        return this.value / 1000 + 'k';
      }
    }
  },
  tooltip: {
    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  },
  plotOptions: {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  }
};

var AreaChart = exports.AreaChart = (_temp = _class = function (_Component) {
  _inherits(AreaChart, _Component);

  function AreaChart() {
    _classCallCheck(this, AreaChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaChart).apply(this, arguments));
  }

  _createClass(AreaChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var drilldown = _props.drilldown;
      var series = _props.series;
      var title = _props.title;

      var config = _extends({}, baseConfig, {
        drilldown: drilldown,
        series: series,
        title: { title: title }
      });

      console.log(config);
      return _react2.default.createElement(_reactHighcharts2.default, {
        config: config,
        drilldown: this.props.drilldown,
        series: this.props.series
      });
    }
  }]);

  return AreaChart;
}(_react.Component), _class.propTypes = {
  drilldown: _react.PropTypes.object,
  series: _react.PropTypes.array.isRequired,
  title: _react.PropTypes.string.isRequired
}, _temp);