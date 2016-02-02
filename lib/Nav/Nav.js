'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../styles/colors');

var _mediaQueries = require('../styles/mediaQueries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// import NavItem from '../NavItem'

var style = {
  button: {
    base: _defineProperty({
      borderBottom: '1px solid ' + _colors.accentColor,
      borderTop: '1px solid ' + _colors.accentColor,
      display: 'inline-block',
      height: '15px',
      position: 'absolute',
      right: '25px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '30px'
    }, _mediaQueries.large, {
      display: 'none'
    }),
    before: {
      background: _colors.accentColor,
      height: '1px',
      left: 0,
      position: 'absolute',
      top: '50%',
      width: '100%',
      transform: 'translateY(-50%)'
    }
  },
  ul: {
    base: _defineProperty({
      position: 'absolute',
      right: '-9999px',
      top: '100%',
      transition: 'background .25s, right 0s .25s',
      width: '100%'
    }, _mediaQueries.large, {
      float: 'right',
      position: 'static',
      right: 'auto',
      width: 'auto',
      top: 'auto'
    }),
    open: {
      background: _colors.fadedBody,
      right: 0,
      transition: 'background .25s'
    }
  }
};

var Nav = exports.Nav = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'handleNavButtonClick',
    value: function handleNavButtonClick(event) {
      this.props.toggleNav();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        '/*',
        _react2.default.createElement(
          'a',
          { href: '#',
            style: [style.button.base],
            onClick: this.handleNavButtonClick.bind(this)
          },
          _react2.default.createElement('div', { style: [style.button.before] })
        ),
        '*/',
        _react2.default.createElement('ul', { style: [style.ul.base, this.props.navIsOpen && style.ul.open] })
      );
    }
  }]);

  return Nav;
}(_react.Component), _class2.propTypes = {
  navIsOpen: _react.PropTypes.bool.isRequired,
  sections: _react.PropTypes.array.isRequired,
  toggleNav: _react.PropTypes.func.isRequired
}, _temp)) || _class;