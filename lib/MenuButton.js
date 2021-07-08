"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var MenuButton = function MenuButton(props) {
  var icon = props.icon === 'string' ? /*#__PURE__*/_react.default.createElement("i", {
    className: props.icon
  }) : props.icon;
  var active = props.id === props.selected && !props.collapsed ? ' active' : '';
  var glowing = props.id === props.glowing ? ' glowing' : '';
  var disabled = props.disabled ? ' disabled' : '';
  return /*#__PURE__*/_react.default.createElement("li", {
    className: active + disabled + glowing,
    key: props.id
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#" + props.id,
    role: "tab",
    onClick: function onClick(e) {
      return props.disabled || (props.collapsed ? props.onOpen(props.id) : props.selected === props.id ? props.onClose() : props.onOpen(props.id));
    }
  }, ' ', icon));
};

MenuButton.propTypes = {
  id: _propTypes.PropTypes.string.isRequired,
  icon: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.element]).isRequired,
  disabled: _propTypes.PropTypes.bool,
  selected: _propTypes.PropTypes.string,
  glowing: _propTypes.PropTypes.string,
  onOpen: _propTypes.PropTypes.func,
  onClose: _propTypes.PropTypes.func,
  collapsed: _propTypes.PropTypes.bool
};
var _default = MenuButton;
exports.default = _default;