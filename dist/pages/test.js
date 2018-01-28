'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return _default;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$repeat = { "groupList": { "com": "group", "props": "grouplist" } };
  this.$props = { "group": { "v-bind:grouplist.once": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "key" }, "v-bind:indexa.once": { "value": "index", "type": "index", "for": "groupList", "item": "item", "index": "index", "key": "key" } }, "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwiZ3JvdXAiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJteW51bSIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBcUlXO0FBQ1AsVUFBSUEsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLFFBQVYsRUFBb0I7QUFDM0MsWUFBSUEsUUFBSixFQUFjO0FBQ1pILGVBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDREgsYUFBS0ksV0FBTCxHQUFtQixRQUFuQjs7QUFFQUosYUFBS0ssZUFBTCxHQUF1QixXQUF2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QUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBYixjQUFRQyxHQUFSLENBQWUsT0FBS0UsS0FBcEIsaUJBQXFDUyxPQUFPMUIsSUFBNUMsY0FBeUQwQixPQUFPRSxNQUFQLENBQWNYLEtBQXZFO0FBQ0Q7QUFKTSxHIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7XG4gIGltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJztcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVyJztcbiAgaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnO1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnO1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0JztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfTtcbiAgICRyZXBlYXQgPSB7XCJncm91cExpc3RcIjp7XCJjb21cIjpcImdyb3VwXCIsXCJwcm9wc1wiOlwiZ3JvdXBsaXN0XCJ9fTtcclxuJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX0sXCJjb3VudGVyMVwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge1wiY291bnRlcjFcIjp7XCJ2LW9uOmluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH07XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBteW51bTogMjAsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwbHVzICgpIHtcbiAgICAgICAgdGhpcy5teW51bSsrO1xuICAgICAgfSxcbiAgICAgIHRvYXN0ICgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKTtcbiAgICAgIH0sXG4gICAgICBjb21tdW5pY2F0ZSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpO1xuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNik7XG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KTtcblxuICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpO1xuICAgICAgfSxcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpID0gMTA7XG4gICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXTtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJztcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm87XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknO1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hic7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuIl19