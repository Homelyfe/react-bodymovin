var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var bodymovin;
//Use Bodymovin Light
if (typeof BODYMOVIN_EXPRESSION_SUPPORT === 'undefined' || BODYMOVIN_EXPRESSION_SUPPORT == null || BODYMOVIN_EXPRESSION_SUPPORT === false) {
  bodymovin = require('bodymovin/build/player/bodymovin_light.min');
  //Use Bodymovin w/ expressions
} else if (BODYMOVIN_EXPRESSION_SUPPORT === true) {
  bodymovin = require('bodymovin/build/player/bodymovin.min');
}

var ReactBodymovin = function (_React$Component) {
  _inherits(ReactBodymovin, _React$Component);

  function ReactBodymovin() {
    _classCallCheck(this, ReactBodymovin);

    return _possibleConstructorReturn(this, (ReactBodymovin.__proto__ || Object.getPrototypeOf(ReactBodymovin)).apply(this, arguments));
  }

  _createClass(ReactBodymovin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = Object.assign({}, this.props.options);
      options.wrapper = this.wrapper;
      options.renderer = 'svg';
      this.animation = bodymovin.loadAnimation(options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.animation.destroy();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var storeWrapper = function storeWrapper(el) {
        _this2.wrapper = el;
      };

      return React.createElement(
        'div',
        { className: 'react-bodymovin-container', ref: storeWrapper },
        this.props.children
      );
    }
  }]);

  return ReactBodymovin;
}(React.Component);

module.exports = ReactBodymovin;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(bodymovin, 'bodymovin', 'src/ReactBodymovin.js');

  __REACT_HOT_LOADER__.register(ReactBodymovin, 'ReactBodymovin', 'src/ReactBodymovin.js');
}();

;