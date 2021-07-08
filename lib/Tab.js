"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var Tab = function Tab(props) {
  var active = props.active ? ' active' : '';
  var closeIcon = closeIconSelector(props);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    className: "sidebar-pane" + active
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "sidebar-header"
  }, props.header, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-close",
    role: "btn",
    onClick: props.onClose
  }, closeIcon)), props.children);
};

var closeIconSelector = function closeIconSelector(props) {
  switch (typeof props.closeIcon) {
    case 'string':
      return /*#__PURE__*/_react.default.createElement("i", {
        className: props.closeIcon
      });

    case 'object':
      return props.closeIcon;

    default:
      return props.position === 'right' ? /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-caret-right"
      }) : /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-caret-left"
      });
  }
};

closeIconSelector.propTypes = {
  closeIcon: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.element]),
  position: _propTypes.PropTypes.oneOf(['left', 'right'])
};
Tab.propTypes = {
  id: _propTypes.PropTypes.string.isRequired,
  header: _propTypes.PropTypes.string.isRequired,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.func, _propTypes.PropTypes.element, _propTypes.PropTypes.object]).isRequired,
  onClose: _propTypes.PropTypes.func,
  active: _propTypes.PropTypes.bool
};
var _default = Tab;
exports.default = _default;