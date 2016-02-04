'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Nav = require('../Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _colors = require('../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  nav: {
    base: {
      position: 'fixed',
      width: '100%',
      transition: 'background .25s',
      zIndex: 2
    },
    scrolled: {
      background: _colors.fadedBody
    },
    open: {
      background: _colors.fadedBody
    }
  },
  wrapper: {
    base: {
      margin: '0 auto',
      padding: '1em',
      position: 'relative',
      width: '100%'
    },
    after: {
      clear: 'both',
      display: 'table',
      overflow: 'hidden',
      width: '100%'
    }
  }
};

var Header = exports.Header = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { style: [style.nav.base // ,
          // this.props.navIsOpen && style.nav.open,
          // this.props.pageIsScrolled && style.nav.scrolled
          ] },
        _react2.default.createElement(
          'div',
          { style: [style.wrapper.base] },
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement('div', { style: [style.wrapper.after] })
        )
      );
    }
  }]);

  return Header;
}(_react.Component), _class2.propTypes = {
  navIsOpen: _react.PropTypes.bool.isRequired,
  pageIsScrolled: _react.PropTypes.bool.isRequired
}, _temp)) || _class;