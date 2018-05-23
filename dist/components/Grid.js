'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = require('./AbstractWidget');

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Grid.__proto__ || Object.getPrototypeOf(Grid)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          collectionId = _this$props.collectionId,
          onLoad = _this$props.onLoad;

      // Options and dataSource must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createGridFromCollection(collectionId, element).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Grid, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('collectionId');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  collectionId: _propTypes2.default.string.isRequired,
  onLoad: _propTypes2.default.func
};
Grid.defaultProps = {
  onLoad: function onLoad() {}
};
exports.default = Grid;