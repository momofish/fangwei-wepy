'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '主页'
    }, _this.components = {}, _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.computed = {}, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJoaWRlSW5wdXQiLCJjbGVhcklucHV0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsbUJBQWEsS0FEUjtBQUVMQyxnQkFBVTtBQUZMLEssUUFLUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixhQUFLSixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsT0FITztBQUlSSyxlQUpRLHVCQUlJO0FBQ1YsYUFBS0osUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUtELFdBQUwsR0FBbUIsS0FBbkI7QUFDRCxPQVBPO0FBUVJNLGdCQVJRLHdCQVFLO0FBQ1gsYUFBS0wsUUFBTCxHQUFnQixFQUFoQjtBQUNELE9BVk87QUFXUk0saUJBWFEsdUJBV0lDLENBWEosRUFXTztBQUNiLGFBQUtQLFFBQUwsR0FBZ0JPLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDRDtBQWJPLEssUUFnQlZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBakMwQixlQUFLQyxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Li76aG1JyxcbiAgICB9O1xuXG4gICAgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcbiAgICAgIGlucHV0VmFsOiAnJ1xuICAgIH07XG5cbiAgICBjb21wdXRlZCA9IHt9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IHRydWU7XG4gICAgICB9LFxuICAgICAgaGlkZUlucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gJyc7XG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcoZSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGV2ZW50cyA9IHt9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19