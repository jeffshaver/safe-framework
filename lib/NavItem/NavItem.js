'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _mediaQueries = require('../styles/media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  base: _defineProperty({
    display: 'block',
    fontSize: '1.2rem',
    height: 'auto',
    lineHeight: 'normal',
    opacity: 0,
    textAlign: 'left',
    transition: 'opacity .25s, visibility 0s .25s',
    verticalAlign: 'middle',
    visibility: 'hidden'
  }, _mediaQueries.large, {
    display: 'inline-block',
    lineHeight: '2em',
    opacity: 1,
    visibility: 'visible'
  }),
  open: {
    opacity: 1,
    transition: 'opacity .25s',
    visibility: 'visible'
  },
  a: {
    base: _defineProperty({
      display: 'block',
      padding: '.5em 1em',
      textAlign: 'center'
    }, _mediaQueries.large, {
      padding: '0 .5em',
      textAlign: 'left'
    })
  }
};

var NavItem = exports.NavItem = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(NavItem, _Component);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavItem).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: 'handleClick',
    value: function handleClick(event) {
      this.props.handleClick(event);
      /* let href = event.target.getAttribute('href')
      let {dispatch} = this.props
       dispatch(toggleNav(false))
       event.preventDefault()
      scrollToElementForPath(href, 750)
      setTitle(getTitleFromPath(href))
      setPath(href)*/
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { style: [style.base, this.props.navIsOpen && style.open] },
        _react2.default.createElement(
          'a',
          { href: '/' + this.props.section.title.toLowerCase(),
            style: [style.a.base],
            onClick: this.handleClick.bind(this)
          },
          this.props.section.navTitle
        )
      );
    }
  }]);

  return NavItem;
}(_react.Component), _class2.propTypes = {
  handleClick: _react.PropTypes.func.isRequired,
  navIsOpen: _react.PropTypes.bool.isRequired,
  section: _react.PropTypes.object
}, _temp)) || _class;