'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Counter = function (_Component) {_inherits(Counter, _Component);
  function Counter(props) {_classCallCheck(this, Counter);var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this,
    props));
    _this.incrementAsync = _this.incrementAsync.bind(_this);
    _this.incrementIfOdd = _this.incrementIfOdd.bind(_this);return _this;
  }_createClass(Counter, [{ key: 'incrementIfOdd', value: function incrementIfOdd()

    {
      if (this.props.value % 2 !== 0) {
        this.props.onIncrement();
      }
    } }, { key: 'incrementAsync', value: function incrementAsync()

    {
      setTimeout(this.props.onIncrement, 1000);
    } }, { key: 'render', value: function render()

    {var _props =
      this.props,value = _props.value,onIncrement = _props.onIncrement,onDecrement = _props.onDecrement;
      return (
        _react2.default.createElement('p', null, 'Clicked: ',
          value, ' times',
          ' ',
          _react2.default.createElement('button', { onClick: onIncrement }, '+'),


          ' ',
          _react2.default.createElement('button', { onClick: onDecrement }, '-'),


          ' ',
          _react2.default.createElement('button', { onClick: this.incrementIfOdd }, 'Increment if odd'),


          ' ',
          _react2.default.createElement('button', { onClick: this.incrementAsync }, 'Increment async')));




    } }]);return Counter;}(_react.Component);


Counter.propTypes = {
  value: _propTypes2.default.number.isRequired,
  onIncrement: _propTypes2.default.func.isRequired,
  onDecrement: _propTypes2.default.func.isRequired };var _default =


Counter;exports.default = _default;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Counter, 'Counter', 'src/client/components/Counter.js');__REACT_HOT_LOADER__.register(_default, 'default', 'src/client/components/Counter.js');}();;