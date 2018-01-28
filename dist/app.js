'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/card', 'pages/me', 'pages/test'],
      window: {
        navigationBarTextStyle: 'black',
        navigationBarTitleText: 'WeUI in WePY',
        navigationBarBackgroundColor: '#f8f8f8',
        backgroundColor: '#f8f8f8'
      },
      tabBar: {
        'color': '#8a8a8a',
        'selectedColor': '#28b1b0',
        'borderStyle': 'black',
        'backgroundColor': '#ffffff',
        'list': [{
          'pagePath': 'pages/index',
          'text': '主页'
        }, {
          'pagePath': 'pages/card',
          'text': '卡包'
        }, {
          'pagePath': 'pages/me',
          'text': '我的'
        }, {
          'pagePath': 'pages/test',
          'text': 'test'
        }]
      },
      'networkTimeout': {
        'request': 10000,
        'connectSocket': 10000,
        'uploadFile': 10000,
        'downloadFile': 10000
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo().then(function (res) {
        that.globalData.userInfo = res.userInfo;
        cb && cb(res.userInfo);
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwidGhlbiIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9ERSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBakRkQSxNQWlEYyxHQWpETDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLFlBRkssRUFHTCxVQUhLLEVBSUwsWUFKSyxDQURBO0FBT1BDLGNBQVE7QUFDTkMsZ0NBQXdCLE9BRGxCO0FBRU5DLGdDQUF3QixjQUZsQjtBQUdOQyxzQ0FBOEIsU0FIeEI7QUFJTkMseUJBQWlCO0FBSlgsT0FQRDtBQWFQQyxjQUFRO0FBQ04saUJBQVMsU0FESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLDJCQUFtQixTQUpiO0FBS04sZ0JBQVEsQ0FDTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBRE0sRUFLTjtBQUNFLHNCQUFZLFlBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBTE0sRUFTTjtBQUNFLHNCQUFZLFVBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBVE0sRUFhTjtBQUNFLHNCQUFZLFlBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBYk07QUFMRixPQWJEO0FBcUNQLHdCQUFrQjtBQUNoQixtQkFBVyxLQURLO0FBRWhCLHlCQUFpQixLQUZEO0FBR2hCLHNCQUFjLEtBSEU7QUFJaEIsd0JBQWdCO0FBSkE7QUFyQ1gsS0FpREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIWTtBQUliOzs7O2dDQUVXQyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtKLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLSSxXQUFMLEdBQW1CQyxJQUFuQixDQUF3QixVQUFVQyxHQUFWLEVBQWU7QUFDckNILGFBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTSxJQUFJTixRQUEvQjtBQUNBRSxjQUFNQSxHQUFHSSxJQUFJTixRQUFQLENBQU47QUFDRCxPQUhEO0FBSUQ7Ozs7RUFqRTBCLGVBQUtPLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ3BhZ2VzL2NhcmQnLFxuICAgICAgICAncGFnZXMvbWUnLFxuICAgICAgICAncGFnZXMvdGVzdCcsXG4gICAgICBdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZVVJIGluIFdlUFknLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2Y4ZjhmOCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY4ZjgnXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgICdjb2xvcic6ICcjOGE4YThhJyxcbiAgICAgICAgJ3NlbGVjdGVkQ29sb3InOiAnIzI4YjFiMCcsXG4gICAgICAgICdib3JkZXJTdHlsZSc6ICdibGFjaycsXG4gICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnI2ZmZmZmZicsXG4gICAgICAgICdsaXN0JzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgICAndGV4dCc6ICfkuLvpobUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvY2FyZCcsXG4gICAgICAgICAgICAndGV4dCc6ICfljaHljIUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbWUnLFxuICAgICAgICAgICAgJ3RleHQnOiAn5oiR55qEJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL3Rlc3QnLFxuICAgICAgICAgICAgJ3RleHQnOiAndGVzdCdcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ25ldHdvcmtUaW1lb3V0Jzoge1xuICAgICAgICAncmVxdWVzdCc6IDEwMDAwLFxuICAgICAgICAnY29ubmVjdFNvY2tldCc6IDEwMDAwLFxuICAgICAgICAndXBsb2FkRmlsZSc6IDEwMDAwLFxuICAgICAgICAnZG93bmxvYWRGaWxlJzogMTAwMDBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvO1xuICAgICAgfVxuICAgICAgd2VweS5nZXRVc2VySW5mbygpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiJdfQ==