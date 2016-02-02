'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  base: {
    overflow: 'hidden',
    padding: '15vh 25px',
    position: 'relative',
    width: '100%'
  },
  oddChildren: {
    backgroundColor: _colors.accentColor,
    backgroundImage: 'linear-gradient(145deg, ' + _colors.accentColor + ', hsl(176, 69%, 42%))',
    color: _colors.body
  },
  overlay: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transform: 'none',
    width: '100%'
  },
  before: {
    background: _colors.body,
    height: '84px',
    left: 0,
    position: 'absolute',
    top: '-42px',
    transform: 'skewY(-1deg)',
    width: '100%'
  },
  after: {
    background: _colors.body,
    bottom: '-42px',
    height: '84px',
    left: 0,
    position: 'absolute',
    transform: 'skewY(-1deg)',
    width: '100%'
  }
};

var Section = exports.Section = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'getOverlay',
    value: function getOverlay() {
      return this.props.overlay ? _react2.default.createElement('div', { style: [style.overlay] }) : undefined;
    }
  }, {
    key: 'getBefore',
    value: function getBefore() {
      return this.props.skewTop ? _react2.default.createElement('div', { style: [style.before] }) : undefined;
    }
  }, {
    key: 'getAfter',
    value: function getAfter() {
      return this.props.skewBottom ? _react2.default.createElement('div', { style: [style.after] }) : undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: this.props.className,
          style: [style.base, this.props.styles && this.props.styles, this.props.isOdd && style.oddChildren] },
        this.getOverlay(),
        this.getBefore(),
        this.props.children,
        this.getAfter()
      );
    }
  }]);

  return Section;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.array,
  className: _react.PropTypes.string,
  isOdd: _react.PropTypes.bool.isRequired,
  overlay: _react.PropTypes.bool.isRequired,
  skewBottom: _react.PropTypes.bool.isRequired,
  skewTop: _react.PropTypes.bool.isRequired,
  styles: _react.PropTypes.object
}, _class2.defaultProps = {
  children: [],
  className: '',
  isOdd: false,
  overlay: false,
  skewBottom: true,
  skewTop: true,
  styles: {}
}, _temp)) || _class;