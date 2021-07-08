"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _MenuButton = _interopRequireDefault(require("./MenuButton"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

describe('MenuButton', function () {
  it('is truthy', function () {
    expect(_MenuButton.default).toBeTruthy();
  });
  it('has not active class when selected not equals id', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
      key: "test",
      id: "test",
      icon: "fa fa-home",
      disabled: false,
      selected: "nottest",
      collapsed: true,
      onClose: function onClose() {},
      onOpen: function onOpen() {},
      glowing: ""
    }));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has active class when selected equals id', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
      key: "test",
      id: "test",
      icon: "fa fa-home",
      disabled: false,
      selected: "test",
      collapsed: false,
      onClose: function onClose() {},
      onOpen: function onOpen() {},
      glowing: ""
    }));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has disabled class disabled equals true', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
      key: "test",
      id: "test",
      icon: "fa fa-home",
      disabled: true,
      selected: "test",
      collapsed: false,
      onClose: function onClose() {},
      onOpen: function onOpen() {},
      glowing: ""
    }));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has glowing on', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_MenuButton.default, {
      key: "test",
      id: "test",
      icon: "fa fa-home",
      disabled: true,
      selected: "test",
      collapsed: false,
      onClose: function onClose() {},
      onOpen: function onOpen() {},
      glowing: "test"
    }));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Tab', function () {
  it('is truthy', function () {
    expect(_Tab.default).toBeTruthy();
  });
  it('has not active class without active prop', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      id: "home",
      header: "Home",
      icon: "fa fa-home"
    }, /*#__PURE__*/_react.default.createElement("p", null, "No place like home!")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has active class with active prop', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      id: "home",
      header: "Home",
      active: true,
      icon: "fa fa-home"
    }, /*#__PURE__*/_react.default.createElement("p", null, "No place like home!")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('makes closeIcon fa fa-caret-right when position is right', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      id: "home",
      header: "Home",
      active: true,
      position: "right",
      icon: "fa fa-home"
    }, /*#__PURE__*/_react.default.createElement("p", null, "No place like home!")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('makes closeIcon fa fa-caret-left when position is left', function () {
    var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      id: "home",
      header: "Home",
      active: true,
      position: "left",
      icon: "fa fa-home"
    }, /*#__PURE__*/_react.default.createElement("p", null, "No place like home!")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Sidebar', function () {
  it('is truthy', function () {
    expect(_Sidebar.default).toBeTruthy();
  });
});