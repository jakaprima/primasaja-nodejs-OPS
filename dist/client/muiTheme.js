'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getMuiTheme2.default)({
  fontSize: 14,
  fontFamily: 'Comfortaa',
  palette: {
    primary1Color: _colors.teal700,
    primary2Color: _colors.teal500,
    primary3Color: _colors.teal300,
    accent1Color: _colors.green600
  },
  toolbar: {
    backgroundColor: _colors.teal700
  },
  flatButton: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    buttonFilterColor: _colors.green600
  },
  button: {
    height: 36
  }
});