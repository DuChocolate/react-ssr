"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _koa = _interopRequireDefault(require("koa2"));

var _app = _interopRequireDefault(require("./app"));

var _server = require("react-dom/server");

var app = new _koa.default();
app.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ctx) {
    var html;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html = (0, _server.renderToString)(_react.default.createElement(_app.default, null));
            ctx.body = "<html>\n    <head>\n      <title>hello</title>\n    </head>\n    <body>\n      <div id=\"root\">".concat(html, "</div>\n    </body>\n  </html>");

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(9001, function () {
  console.log('9001 is listening...');
});