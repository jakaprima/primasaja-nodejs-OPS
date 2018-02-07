'use strict';var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _os = require('os');
var _winston = require('winston');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Console = _winston.transports.Console,File = _winston.transports.File;

var LOG_FILE_NAME = '.application.log';
var LOG_FILE_PATH =
process.env.NODE_ENV === 'production' ?
_path2.default.join((0, _os.homedir)(), LOG_FILE_NAME) :
_path2.default.join(__dirname, '..', '..', LOG_FILE_NAME);
var LOG_LEVEL = process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'verbose' : 'debug');

var logger = new _winston.Logger({
  transports: [
  new Console({
    level: LOG_LEVEL,
    colorize: true,
    timestamp: true,
    prettyPrint: true }),

  new File({
    level: LOG_LEVEL,
    filename: LOG_FILE_PATH,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    tailable: true,
    maxsize: 10 * 1024 * 1024,
    maxFiles: 10,
    json: false })] });




logger.expressMiddleware = function expressMiddleware(req, res, next) {
  if (req.url.includes('__webpack') && process.env.NODE_ENV === 'development') {
    return next();
  }

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var defaultMessage = ip + ' - ' + req.method + ' ' + req.url;
  var startTimestemp = Date.now();
  var waitingTimePrintInterval = 5000;

  var waitingTime = 0;
  var intervalId = setInterval(function () {
    waitingTime += waitingTimePrintInterval;
    logger.verbose(defaultMessage + ' - wait for ' + waitingTime / 1000 + 's...');
  }, waitingTimePrintInterval);

  var printExecutionTime = function printExecutionTime() {var statusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = defaultMessage + ' - ' + statusCode + ' - ' + (Date.now() - startTimestemp) / 1000 + 's';
    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.warn(message);
    }
    clearInterval(intervalId);
  };

  req.on('end', function () {return printExecutionTime(res.statusCode);});
  req.on('close', function () {return printExecutionTime('[closed by user]');});

  return next();
};

logger.info('Application logs file: ' + LOG_FILE_PATH);

module.exports = logger;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Console, 'Console', 'src/logger.js');__REACT_HOT_LOADER__.register(File, 'File', 'src/logger.js');__REACT_HOT_LOADER__.register(LOG_FILE_NAME, 'LOG_FILE_NAME', 'src/logger.js');__REACT_HOT_LOADER__.register(LOG_FILE_PATH, 'LOG_FILE_PATH', 'src/logger.js');__REACT_HOT_LOADER__.register(LOG_LEVEL, 'LOG_LEVEL', 'src/logger.js');__REACT_HOT_LOADER__.register(logger, 'logger', 'src/logger.js');}();;