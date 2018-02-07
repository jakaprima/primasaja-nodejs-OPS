'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _default = function _default() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var action = arguments[1];
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;}

};exports.default = _default;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(_default, 'default', 'src/client/reducers/index.jsx');}();;