"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Tab = _interopRequireDefault(require("./Tab"));

var _MenuButton = _interopRequireDefault(require("./MenuButton"));

require("../sidebar.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TabType = _propTypes.PropTypes.shape({
  type: _propTypes.PropTypes.oneOf([_Tab.default])
});

var Sidebar = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Sidebar, _Component);

  function Sidebar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Sidebar.prototype;

  _proto.onClose = function onClose(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClose && this.props.onClose(e);
  };

  _proto.onOpen = function onOpen(e, tabid) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onOpen && this.props.onOpen(tabid);
  };

  _proto.renderPanes = function renderPanes(children) {
    var _this = this;

    return _react.default.Children.map(children, function (p) {
      return /*#__PURE__*/_react.default.cloneElement(p, {
        onClose: _this.onClose.bind(_this),
        closeIcon: _this.props.closeIcon,
        active: p.props.id === _this.props.selected,
        position: _this.props.position || 'left'
      });
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var position = " sidebar-" + (this.props.position || 'left');
    var collapsed = this.props.collapsed ? ' collapsed' : '';

    var tabs = _react.default.Children.toArray(this.props.children);

    var bottomtabs = tabs.filter(function (t) {
      return t.props.anchor === 'bottom';
    });
    var toptabs = tabs.filter(function (t) {
      return t.props.anchor !== 'bottom';
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.props.id,
      className: "sidebar leaflet-touch" + position + collapsed,
      ref: function ref(el) {
        _this2.rootElement = el;
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-tabs"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      role: "tablist"
    }, toptabs.map(function (t) {
      return /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
        key: t.props.id,
        id: t.props.id,
        icon: t.props.icon,
        disabled: t.props.disabled,
        selected: _this2.props.selected,
        glowing: _this2.props.glowing,
        collapsed: _this2.props.collapsed,
        onClose: _this2.props.onClose,
        onOpen: _this2.props.onOpen
      });
    })), /*#__PURE__*/_react.default.createElement("ul", {
      role: "tablist"
    }, bottomtabs.map(function (t) {
      return /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
        key: t.props.id,
        id: t.props.id,
        icon: t.props.icon,
        disabled: t.props.disabled,
        selected: _this2.props.selected,
        glowing: _this2.props.glowing,
        collapsed: _this2.props.collapsed,
        onClose: _this2.props.onClose,
        onOpen: _this2.props.onOpen
      });
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-content"
    }, this.renderPanes(this.props.children)));
  };

  return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
  id: _propTypes.PropTypes.string.isRequired,
  collapsed: _propTypes.PropTypes.bool,
  position: _propTypes.PropTypes.oneOf(['left', 'right']),
  selected: _propTypes.PropTypes.string,
  glowing: _propTypes.PropTypes.string,
  closeIcon: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.element]),
  onClose: _propTypes.PropTypes.func,
  onOpen: _propTypes.PropTypes.func,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.arrayOf(TabType), TabType])
};
var _default = Sidebar;
exports.default = _default;