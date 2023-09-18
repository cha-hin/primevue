'use strict';

var utils = require('primevue/utils');
var BaseDirective = require('primevue/basedirective');
var usestyle = require('primevue/usestyle');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseDirective__default = /*#__PURE__*/_interopDefaultLegacy(BaseDirective);

var styles = "\n.p-badge {\n    display: inline-block;\n    border-radius: 10px;\n    text-align: center;\n    padding: 0 .5rem;\n}\n\n.p-overlay-badge {\n    position: relative;\n}\n\n.p-overlay-badge .p-badge {\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(50%,-50%);\n    transform-origin: 100% 0;\n    margin: 0;\n}\n\n.p-badge-dot {\n    width: .5rem;\n    min-width: .5rem;\n    height: .5rem;\n    border-radius: 50%;\n    padding: 0;\n}\n\n.p-badge-no-gutter {\n    padding: 0;\n    border-radius: 50%;\n}\n";
var classes = {
  root: 'p-badge p-component'
};
var _useStyle = usestyle.useStyle(styles, {
    name: 'badge',
    manual: true
  }),
  loadStyle = _useStyle.load;
var BaseBadgeDirective = BaseDirective__default["default"].extend({
  css: {
    classes: classes,
    loadStyle: loadStyle
  }
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BadgeDirective = BaseBadgeDirective.extend('badge', {
  mounted: function mounted(el, binding) {
    var _binding$instance$$pr, _binding$value;
    var id = utils.UniqueComponentId() + '_badge';
    el.unstyled = ((_binding$instance$$pr = binding.instance.$primevue) === null || _binding$instance$$pr === void 0 || (_binding$instance$$pr = _binding$instance$$pr.config) === null || _binding$instance$$pr === void 0 ? void 0 : _binding$instance$$pr.unstyled) || ((_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.unstyled) || false;
    var badge = utils.DomHandler.createElement('span', {
      id: id,
      "class": !el.unstyled && this.cx('root'),
      'p-bind': this.ptm('root', {
        context: _objectSpread(_objectSpread({}, binding.modifiers), {}, {
          nogutter: String(binding.value).length === 1,
          dot: binding.value == null
        })
      })
    });
    el.$_pbadgeId = badge.getAttribute('id');
    for (var modifier in binding.modifiers) {
      !el.unstyled && utils.DomHandler.addClass(badge, 'p-badge-' + modifier);
    }
    if (binding.value != null) {
      if (_typeof(binding.value) === 'object') el.$_badgeValue = binding.value.value;else el.$_badgeValue = binding.value;
      badge.appendChild(document.createTextNode(el.$_badgeValue));
      if (String(el.$_badgeValue).length === 1 && !el.unstyled) {
        !el.unstyled && utils.DomHandler.addClass(badge, 'p-badge-no-gutter');
      }
    } else {
      !el.unstyled && utils.DomHandler.addClass(badge, 'p-badge-dot');
    }
    el.setAttribute('data-pd-badge', true);
    !el.unstyled && utils.DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    el.appendChild(badge);
    this.$el = badge;
  },
  updated: function updated(el, binding) {
    !el.unstyled && utils.DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    if (binding.oldValue !== binding.value) {
      var badge = document.getElementById(el.$_pbadgeId);
      if (_typeof(binding.value) === 'object') el.$_badgeValue = binding.value.value;else el.$_badgeValue = binding.value;
      if (!el.unstyled) {
        if (el.$_badgeValue) {
          if (utils.DomHandler.hasClass(badge, 'p-badge-dot')) utils.DomHandler.removeClass(badge, 'p-badge-dot');
          if (el.$_badgeValue.length === 1) utils.DomHandler.addClass(badge, 'p-badge-no-gutter');else utils.DomHandler.removeClass(badge, 'p-badge-no-gutter');
        } else if (!el.$_badgeValue && !utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
          utils.DomHandler.addClass(badge, 'p-badge-dot');
        }
      }
      badge.innerHTML = '';
      badge.appendChild(document.createTextNode(el.$_badgeValue));
    }
  }
});

module.exports = BadgeDirective;
