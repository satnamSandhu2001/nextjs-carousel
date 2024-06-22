"use strict";
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Carousel;
require("./style.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var IconNavigatePrev = function IconNavigatePrev() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#000000",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 6l-6 6l6 6"
  }));
};
var IconNavigateNext = function IconNavigateNext() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#000000",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 6l6 6l-6 6"
  }));
};
function Carousel(_ref) {
  var children = _ref.children,
    _ref$previewCardId = _ref.previewCardId,
    previewCardId = _ref$previewCardId === void 0 ? 0 : _ref$previewCardId;
  var _useState = (0, _react.useState)(previewCardId),
    _useState2 = _slicedToArray(_useState, 2),
    activeId = _useState2[0],
    setactiveId = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    slideWidth = _useState4[0],
    setslideWidth = _useState4[1];
  var contRef = (0, _react.useRef)(null);
  var scrollRef = (0, _react.useRef)(null);
  var scrollTrack = function scrollTrack(id, instant) {
    var _scrollRef$current;
    scrollRef === null || scrollRef === void 0 || (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.scrollTo({
      left: slideWidth * (id - 1),
      behavior: instant ? 'instant' : 'smooth'
    });
  };
  function handlePrev() {
    if (activeId === 0) {
      setactiveId(children.length - 1);
    } else {
      setactiveId(function (prevActiveId) {
        return prevActiveId - 1;
      });
    }
  }
  function handleNext() {
    if (activeId < children.length) {
      setactiveId(function (prevActiveId) {
        return prevActiveId + 1;
      });
    } else {
      setactiveId(0);
    }
  }
  (0, _react.useEffect)(function () {
    setslideWidth(contRef.current ? contRef.current.offsetWidth : 0);
  }, [contRef.current]);

  // to handle track scroll without transitition after getting slideWidth
  (0, _react.useEffect)(function () {
    scrollTrack(activeId, true);
  }, [slideWidth]);
  (0, _react.useEffect)(function () {
    scrollTrack(activeId);
  }, [activeId]);
  (0, _react.useEffect)(function () {
    var autoPlay = setTimeout(function () {
      handleNext();
    }, 3500);
    return function () {
      return clearInterval(autoPlay);
    };
  }, [activeId]);
  if (!children) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: contRef,
    className: "nextjs_carousel_wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: scrollRef,
    className: "nextjs_carousel_container"
  }, children === null || children === void 0 ? void 0 : children.map(function (child, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        width: "".concat(slideWidth, "px")
      },
      className: "nextjs_carousel_slide"
    }, child);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nextjs_carousel_arrows_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePrev
  }, /*#__PURE__*/_react["default"].createElement(IconNavigatePrev, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nextjs_carousel_dots"
  }, children.map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: i,
      onClick: function onClick() {
        setactiveId(i);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleNext
  }, /*#__PURE__*/_react["default"].createElement(IconNavigateNext, null))));
}