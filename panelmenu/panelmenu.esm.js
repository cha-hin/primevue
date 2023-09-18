import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import { ObjectUtils, DomHandler, UniqueComponentId } from 'primevue/utils';
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';
import Ripple from 'primevue/ripple';
import { mergeProps, resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, Fragment, renderList, createElementVNode, createBlock, withCtx, withDirectives, resolveDynamicComponent, createCommentVNode, toDisplayString, createVNode, Transition, vShow, renderSlot } from 'vue';

var styles = "\n.p-panelmenu .p-panelmenu-header-action {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n}\n\n.p-panelmenu .p-panelmenu-header-action:focus {\n    z-index: 1;\n}\n\n.p-panelmenu .p-submenu-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.p-panelmenu .p-menuitem-link {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-panelmenu .p-menuitem-text {\n    line-height: 1;\n}\n";
var classes = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-highlight': instance.isItemActive(item),
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerAction: function headerAction(_ref2) {
    var instance = _ref2.instance,
      isActive = _ref2.isActive,
      isExactActive = _ref2.isExactActive;
    return ['p-panelmenu-header-action', {
      'router-link-active': isActive,
      'router-link-active-exact': instance.exact && isExactActive
    }];
  },
  headerIcon: 'p-menuitem-icon',
  headerLabel: 'p-menuitem-text',
  toggleableContent: 'p-toggleable-content',
  menuContent: 'p-panelmenu-content',
  menu: 'p-panelmenu-root-list',
  menuitem: function menuitem(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menuitem', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: function action(_ref4) {
    var props = _ref4.props,
      isActive = _ref4.isActive,
      isExactActive = _ref4.isExactActive;
    return ['p-menuitem-link', {
      'router-link-active': isActive,
      'router-link-active-exact': props.exact && isExactActive
    }];
  },
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator'
};
var _useStyle = useStyle(styles, {
    name: 'panelmenu',
    manual: true
  }),
  loadStyle = _useStyle.load;
var script$3 = {
  name: 'BasePanelMenu',
  "extends": BaseComponent,
  props: {
    model: {
      type: Array,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  css: {
    classes: classes,
    loadStyle: loadStyle
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};

var script$2 = {
  name: 'PanelMenuSub',
  hostName: 'PanelMenu',
  "extends": BaseComponent,
  emits: ['item-toggle'],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    templates: {
      type: Object,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": -1
    }
  },
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.panelId, "_").concat(processedItem.key);
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp: function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    },
    getPTOptions: function getPTOptions(key, processedItem, index) {
      return this.ptm(key, {
        context: {
          item: processedItem,
          index: index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem)
        }
      });
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function (path) {
        return path.key === processedItem.key;
      });
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    },
    isItemFocused: function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup: function isItemGroup(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items);
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit('item-toggle', {
        processedItem: processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    },
    onItemToggle: function onItemToggle(event) {
      this.$emit('item-toggle', event);
    },
    onItemActionClick: function onItemActionClick(event, navigate) {
      navigate && navigate(event);
    },
    getAriaSetSize: function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function (processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, 'separator');
      }).length;
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function (processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, 'separator');
      }).length + 1;
    },
    getMenuItemProps: function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx('action'),
          tabindex: -1,
          'aria-hidden': true
        }, this.getPTOptions('action', processedItem, index)),
        icon: mergeProps({
          "class": [this.cx('icon'), this.getItemProp(processedItem, 'icon')]
        }, this.getPTOptions('icon', processedItem, index)),
        label: mergeProps({
          "class": this.cx('label')
        }, this.getPTOptions('label', processedItem, index)),
        submenuicon: mergeProps({
          "class": this.cx('submenuIcon')
        }, this.getPTOptions('submenuicon', processedItem, index))
      };
    }
  },
  components: {
    ChevronRightIcon: ChevronRightIcon,
    ChevronDownIcon: ChevronDownIcon
  },
  directives: {
    ripple: Ripple
  }
};

var _hoisted_1$1 = ["tabindex"];
var _hoisted_2$1 = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4$1 = ["href", "onClick"];
var _hoisted_5$1 = ["href", "target"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", {
    "class": normalizeClass(_ctx.cx('submenu')),
    tabindex: $props.tabindex
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function (processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, 'separator') ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx('menuitem', {
        processedItem: processedItem
      }), $options.getItemProp(processedItem, 'class')],
      style: $options.getItemProp(processedItem, 'style'),
      role: "treeitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : undefined,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize(),
      "aria-posinset": $options.getAriaPosInset(index)
    }, $options.getPTOptions('menuitem', processedItem, index), {
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx('content'),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      }
    }, $options.getPTOptions('content', processedItem, index)), [!$props.templates.item ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$options.getItemProp(processedItem, 'to') && !$options.isItemDisabled(processedItem) ? (openBlock(), createBlock(_component_router_link, {
      key: 0,
      to: $options.getItemProp(processedItem, 'to'),
      custom: ""
    }, {
      "default": withCtx(function (_ref) {
        var navigate = _ref.navigate,
          href = _ref.href,
          isActive = _ref.isActive,
          isExactActive = _ref.isExactActive;
        return [withDirectives((openBlock(), createElementBlock("a", mergeProps({
          href: href,
          "class": _ctx.cx('action', {
            isActive: isActive,
            isExactActive: isExactActive
          }),
          tabindex: "-1",
          "aria-hidden": "true",
          onClick: function onClick($event) {
            return $options.onItemActionClick($event, navigate);
          }
        }, $options.getPTOptions('action', processedItem, index)), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
          key: 0,
          item: processedItem.item,
          "class": normalizeClass([_ctx.cx('icon'), $options.getItemProp(processedItem, 'icon')])
        }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, 'icon') ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx('icon'), $options.getItemProp(processedItem, 'icon')]
        }, $options.getPTOptions('icon', processedItem, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
          "class": _ctx.cx('label')
        }, $options.getPTOptions('label', processedItem, index)), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_4$1)), [[_directive_ripple]])];
      }),
      _: 2
    }, 1032, ["to"])) : withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 1,
      href: $options.getItemProp(processedItem, 'url'),
      "class": _ctx.cx('action'),
      target: $options.getItemProp(processedItem, 'target'),
      tabindex: "-1",
      "aria-hidden": "true"
    }, $options.getPTOptions('action', processedItem, index)), [$options.isItemGroup(processedItem) ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
      key: 0,
      "class": _ctx.cx('submenuIcon'),
      active: $options.isItemActive(processedItem)
    }, $options.getPTOptions('submenuIcon', processedItem, index)), null, 16, ["class", "active"])) : (openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(processedItem) ? 'ChevronDownIcon' : 'ChevronRightIcon'), mergeProps({
      key: 1,
      "class": _ctx.cx('submenuIcon')
    }, $options.getPTOptions('submenuIcon', processedItem, index)), null, 16, ["class"]))], 64)) : createCommentVNode("", true), $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 1,
      item: processedItem.item,
      "class": normalizeClass([_ctx.cx('icon'), $options.getItemProp(processedItem, 'icon')])
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, 'icon') ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx('icon'), $options.getItemProp(processedItem, 'icon')]
    }, $options.getPTOptions('icon', processedItem, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx('label')
    }, $options.getPTOptions('label', processedItem, index)), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_5$1)), [[_directive_ripple]])], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      hasSubmenu: $options.isItemGroup(processedItem),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "hasSubmenu", "label", "props"]))], 16, _hoisted_3$1), createVNode(Transition, mergeProps({
      name: "p-toggleable-content"
    }, _ctx.ptm('transition')), {
      "default": withCtx(function () {
        return [withDirectives(createElementVNode("div", mergeProps({
          "class": _ctx.cx('toggleableContent')
        }, _ctx.ptm('toggleableContent')), [$options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + '_list',
          role: "group",
          panelId: $props.panelId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          level: $props.level + 1,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          exact: $props.exact,
          onItemToggle: $options.onItemToggle,
          pt: _ctx.pt,
          unstyled: _ctx.unstyled
        }, _ctx.ptm('submenu')), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "exact", "onItemToggle", "pt", "unstyled"])) : createCommentVNode("", true)], 16), [[vShow, $options.isItemActive(processedItem)]])];
      }),
      _: 2
    }, 1040)], 16, _hoisted_2$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, 'separator') ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      style: $options.getItemProp(processedItem, 'style'),
      "class": [_ctx.cx('separator'), $options.getItemProp(processedItem, 'class')],
      role: "separator"
    }, _ctx.ptm('separator')), null, 16)) : createCommentVNode("", true)], 64);
  }), 128))], 10, _hoisted_1$1);
}

script$2.render = render$2;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var script$1 = {
  name: 'PanelMenuList',
  hostName: 'PanelMenu',
  "extends": BaseComponent,
  emits: ['item-toggle', 'header-focus'],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    templates: {
      type: Object,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      focused: false,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.autoUpdateActiveItemPath(newValue);
    }
  },
  mounted: function mounted() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function (path) {
        return path.key === processedItem.parentKey;
      });
    },
    isItemGroup: function isItemGroup(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedItem = this.focusedItem || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.focusedItem = null;
      this.searchValue = '';
    },
    onKeyDown: function onKeyDown(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
        case 'Tab':
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: processedItem,
        selfCheck: true
      });
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this = this;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var matched = this.activeItemPath.some(function (p) {
          return p.key === _this.focusedItem.key;
        });
        if (matched) {
          this.activeItemPath = this.activeItemPath.filter(function (p) {
            return p.key !== _this.focusedItem.key;
          });
        } else {
          this.focusedItem = ObjectUtils.isNotEmpty(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem;
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var _this2 = this;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var grouped = this.isItemGroup(this.focusedItem);
        if (grouped) {
          var matched = this.activeItemPath.some(function (p) {
            return p.key === _this2.focusedItem.key;
          });
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            this.activeItemPath = this.activeItemPath.filter(function (p) {
              return p.parentKey !== _this2.focusedItem.parentKey;
            });
            this.activeItemPath.push(this.focusedItem);
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var element = DomHandler.findSingle(this.$el, "li[id=\"".concat("".concat(this.focusedItemId), "\"]"));
        var anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, 'a,button'));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onItemToggle: function onItemToggle(event) {
      var processedItem = event.processedItem,
        expanded = event.expanded;
      if (this.expandedKeys) {
        this.$emit('item-toggle', {
          item: processedItem.item,
          expanded: expanded
        });
      } else {
        this.activeItemPath = this.activeItemPath.filter(function (p) {
          return p.parentKey !== processedItem.parentKey;
        });
        expanded && this.activeItemPath.push(processedItem);
      }
      this.focusedItem = processedItem;
      DomHandler.focus(this.$el);
    },
    isElementInPanel: function isElementInPanel(event, element) {
      var panel = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel && panel.contains(element);
    },
    isItemMatched: function isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    },
    isVisibleItem: function isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem);
    },
    findFirstItem: function findFirstItem() {
      var _this3 = this;
      return this.visibleItems.find(function (processedItem) {
        return _this3.isValidItem(processedItem);
      });
    },
    findLastItem: function findLastItem() {
      var _this4 = this;
      return ObjectUtils.findLast(this.visibleItems, function (processedItem) {
        return _this4.isValidItem(processedItem);
      });
    },
    findNextItem: function findNextItem(processedItem) {
      var _this5 = this;
      var index = this.visibleItems.findIndex(function (item) {
        return item.key === processedItem.key;
      });
      var matchedItem = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).find(function (pItem) {
        return _this5.isValidItem(pItem);
      }) : undefined;
      return matchedItem || processedItem;
    },
    findPrevItem: function findPrevItem(processedItem) {
      var _this6 = this;
      var index = this.visibleItems.findIndex(function (item) {
        return item.key === processedItem.key;
      });
      var matchedItem = index > 0 ? ObjectUtils.findLast(this.visibleItems.slice(0, index), function (pItem) {
        return _this6.isValidItem(pItem);
      }) : undefined;
      return matchedItem || processedItem;
    },
    searchItems: function searchItems(event, _char) {
      var _this7 = this;
      this.searchValue = (this.searchValue || '') + _char;
      var matchedItem = null;
      var matched = false;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var focusedItemIndex = this.visibleItems.findIndex(function (processedItem) {
          return processedItem.key === _this7.focusedItem.key;
        });
        matchedItem = this.visibleItems.slice(focusedItemIndex).find(function (processedItem) {
          return _this7.isItemMatched(processedItem);
        });
        matchedItem = ObjectUtils.isEmpty(matchedItem) ? this.visibleItems.slice(0, focusedItemIndex).find(function (processedItem) {
          return _this7.isItemMatched(processedItem);
        }) : matchedItem;
      } else {
        matchedItem = this.visibleItems.find(function (processedItem) {
          return _this7.isItemMatched(processedItem);
        });
      }
      if (ObjectUtils.isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(this.focusedItem)) {
        matchedItem = this.findFirstItem();
      }
      if (ObjectUtils.isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function () {
        _this7.searchValue = '';
        _this7.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItem: function changeFocusedItem(event) {
      var originalEvent = event.originalEvent,
        processedItem = event.processedItem,
        focusOnNext = event.focusOnNext,
        selfCheck = event.selfCheck,
        _event$allowHeaderFoc = event.allowHeaderFocus,
        allowHeaderFocus = _event$allowHeaderFoc === void 0 ? true : _event$allowHeaderFoc;
      if (ObjectUtils.isNotEmpty(this.focusedItem) && this.focusedItem.key !== processedItem.key) {
        this.focusedItem = processedItem;
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.$emit('header-focus', {
          originalEvent: originalEvent,
          focusOnNext: focusOnNext,
          selfCheck: selfCheck
        });
      }
    },
    scrollInView: function scrollInView() {
      var element = DomHandler.findSingle(this.$el, "li[id=\"".concat("".concat(this.focusedItemId), "\"]"));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    },
    autoUpdateActiveItemPath: function autoUpdateActiveItemPath(expandedKeys) {
      var _this8 = this;
      this.activeItemPath = Object.entries(expandedKeys || {}).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];
        if (val) {
          var processedItem = _this8.findProcessedItemByItemKey(key);
          processedItem && acc.push(processedItem);
        }
        return acc;
      }, []);
    },
    findProcessedItemByItemKey: function findProcessedItemByItemKey(key, processedItems) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      processedItems = processedItems || level === 0 && this.processedItems;
      if (!processedItems) return null;
      for (var i = 0; i < processedItems.length; i++) {
        var processedItem = processedItems[i];
        if (this.getItemProp(processedItem, 'key') === key) return processedItem;
        var matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem) return matchedItem;
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this9 = this;
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var processedItems = [];
      items && items.forEach(function (item, index) {
        var key = (parentKey !== '' ? parentKey + '_' : '') + index;
        var newItem = {
          item: item,
          index: index,
          level: level,
          key: key,
          parent: parent,
          parentKey: parentKey
        };
        newItem['items'] = _this9.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    },
    flatItems: function flatItems(processedItems) {
      var _this10 = this;
      var processedFlattenItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      processedItems && processedItems.forEach(function (processedItem) {
        if (_this10.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          _this10.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function visibleItems() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function focusedItemId() {
      return ObjectUtils.isNotEmpty(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: script$2
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub");
  return openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
    id: $props.panelId + '_list',
    "class": _ctx.cx('menu'),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": $data.focused ? $options.focusedItemId : undefined,
    panelId: $props.panelId,
    focusedItemId: $data.focused ? $options.focusedItemId : undefined,
    items: $options.processedItems,
    templates: $props.templates,
    activeItemPath: $data.activeItemPath,
    exact: $props.exact,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemToggle: $options.onItemToggle,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.ptm('menu')), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "exact", "onFocus", "onBlur", "onKeydown", "onItemToggle", "pt", "unstyled"]);
}

script$1.render = render$1;

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var script = {
  name: 'PanelMenu',
  "extends": script$3,
  emits: ['update:expandedKeys', 'panel-open', 'panel-close'],
  data: function data() {
    return {
      id: this.$attrs.id,
      activeItem: null
    };
  },
  watch: {
    '$attrs.id': function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  beforeMount: function beforeMount() {
    if (!this.$slots.item) {
      console.warn('In future versions, vue-router support will be removed. Item templating should be used.');
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    getItemProp: function getItemProp(item, name) {
      return item ? ObjectUtils.getItemValue(item[name]) : undefined;
    },
    getItemLabel: function getItemLabel(item) {
      return this.getItemProp(item, 'label');
    },
    getPTOptions: function getPTOptions(key, item, index) {
      return this.ptm(key, {
        context: {
          index: index,
          active: this.isItemActive(item),
          focused: this.isItemFocused(item)
        }
      });
    },
    isItemActive: function isItemActive(item) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(item, 'key')] : ObjectUtils.equals(item, this.activeItem);
    },
    isItemVisible: function isItemVisible(item) {
      return this.getItemProp(item, 'visible') !== false;
    },
    isItemDisabled: function isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    },
    isItemFocused: function isItemFocused(item) {
      return ObjectUtils.equals(item, this.activeItem);
    },
    getPanelId: function getPanelId(index) {
      return "".concat(this.id, "_").concat(index);
    },
    getPanelKey: function getPanelKey(index) {
      return this.getPanelId(index);
    },
    getHeaderId: function getHeaderId(index) {
      return "".concat(this.getPanelId(index), "_header");
    },
    getContentId: function getContentId(index) {
      return "".concat(this.getPanelId(index), "_content");
    },
    onHeaderClick: function onHeaderClick(event, item) {
      if (this.isItemDisabled(item)) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }
      this.changeActiveItem(event, item);
      DomHandler.focus(event.currentTarget);
    },
    onHeaderKeyDown: function onHeaderKeyDown(event, item) {
      switch (event.code) {
        case 'ArrowDown':
          this.onHeaderArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onHeaderArrowUpKey(event);
          break;
        case 'Home':
          this.onHeaderHomeKey(event);
          break;
        case 'End':
          this.onHeaderEndKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.onHeaderEnterKey(event, item);
          break;
      }
    },
    onHeaderArrowDownKey: function onHeaderArrowDownKey(event) {
      var rootList = DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onHeaderArrowUpKey: function onHeaderArrowUpKey(event) {
      var prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      var rootList = DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    },
    onHeaderHomeKey: function onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    },
    onHeaderEndKey: function onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    },
    onHeaderEnterKey: function onHeaderEnterKey(event, item) {
      var headerAction = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
      headerAction ? headerAction.click() : this.onHeaderClick(event, item);
      event.preventDefault();
    },
    onHeaderActionClick: function onHeaderActionClick(event, navigate) {
      navigate && navigate(event);
    },
    findNextHeader: function findNextHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      var headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    },
    findPrevHeader: function findPrevHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      var headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    },
    findFirstHeader: function findFirstHeader() {
      return this.findNextHeader(this.$el.firstElementChild, true);
    },
    findLastHeader: function findLastHeader() {
      return this.findPrevHeader(this.$el.lastElementChild, true);
    },
    updateFocusedHeader: function updateFocusedHeader(event) {
      var originalEvent = event.originalEvent,
        focusOnNext = event.focusOnNext,
        selfCheck = event.selfCheck;
      var panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      var header = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    },
    changeActiveItem: function changeActiveItem(event, item) {
      var selfActive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.isItemDisabled(item)) {
        var active = this.isItemActive(item);
        var eventName = !active ? 'panel-open' : 'panel-close';
        this.activeItem = selfActive ? item : this.activeItem && ObjectUtils.equals(item, this.activeItem) ? null : item;
        this.changeExpandedKeys({
          item: item,
          expanded: !active
        });
        this.$emit(eventName, {
          originalEvent: event,
          item: item
        });
      }
    },
    changeExpandedKeys: function changeExpandedKeys(_ref) {
      var item = _ref.item,
        _ref$expanded = _ref.expanded,
        expanded = _ref$expanded === void 0 ? false : _ref$expanded;
      if (this.expandedKeys) {
        var _keys = _objectSpread({}, this.expandedKeys);
        if (expanded) _keys[item.key] = true;else delete _keys[item.key];
        this.$emit('update:expandedKeys', _keys);
      }
    },
    changeFocusedHeader: function changeFocusedHeader(event, element) {
      element && DomHandler.focus(element);
    }
  },
  components: {
    PanelMenuList: script$1,
    ChevronRightIcon: ChevronRightIcon,
    ChevronDownIcon: ChevronDownIcon
  }
};

var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-highlight", "data-p-disabled"];
var _hoisted_3 = ["href", "onClick"];
var _hoisted_4 = ["href"];
var _hoisted_5 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  var _component_PanelMenuList = resolveComponent("PanelMenuList");
  return openBlock(), createElementBlock("div", mergeProps({
    id: $data.id,
    "class": _ctx.cx('root')
  }, _ctx.ptm('root'), {
    "data-pc-name": "panelmenu"
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function (item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getPanelKey(index)
    }, [$options.isItemVisible(item) ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      style: $options.getItemProp(item, 'style'),
      "class": [_ctx.cx('panel'), $options.getItemProp(item, 'class')]
    }, _ctx.ptm('panel')), [createElementVNode("div", mergeProps({
      id: $options.getHeaderId(index),
      "class": [_ctx.cx('header', {
        item: item
      }), $options.getItemProp(item, 'headerClass')],
      tabindex: $options.isItemDisabled(item) ? -1 : _ctx.tabindex,
      role: "button",
      "aria-label": $options.getItemLabel(item),
      "aria-expanded": $options.isItemActive(item),
      "aria-controls": $options.getContentId(index),
      "aria-disabled": $options.isItemDisabled(item),
      onClick: function onClick($event) {
        return $options.onHeaderClick($event, item);
      },
      onKeydown: function onKeydown($event) {
        return $options.onHeaderKeyDown($event, item);
      }
    }, $options.getPTOptions('header', item, index), {
      "data-p-highlight": $options.isItemActive(item),
      "data-p-disabled": $options.isItemDisabled(item)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx('headerContent')
    }, $options.getPTOptions('headerContent', item, index)), [!_ctx.$slots.item ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$options.getItemProp(item, 'to') && !$options.isItemDisabled(item) ? (openBlock(), createBlock(_component_router_link, {
      key: 0,
      to: $options.getItemProp(item, 'to'),
      custom: ""
    }, {
      "default": withCtx(function (_ref) {
        var navigate = _ref.navigate,
          href = _ref.href,
          isActive = _ref.isActive,
          isExactActive = _ref.isExactActive;
        return [createElementVNode("a", mergeProps({
          href: href,
          "class": _ctx.cx('headerAction', {
            isActive: isActive,
            isExactActive: isExactActive
          }),
          tabindex: -1,
          onClick: function onClick($event) {
            return $options.onHeaderActionClick($event, navigate);
          }
        }, $options.getPTOptions('headerAction', item, index)), [_ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
          key: 0,
          item: item,
          "class": normalizeClass([_ctx.cx('headerIcon'), $options.getItemProp(item, 'icon')])
        }, null, 8, ["item", "class"])) : $options.getItemProp(item, 'icon') ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx('headerIcon'), $options.getItemProp(item, 'icon')]
        }, $options.getPTOptions('headerIcon', item, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
          "class": _ctx.cx('headerLabel')
        }, $options.getPTOptions('headerLabel', item, index)), toDisplayString($options.getItemLabel(item)), 17)], 16, _hoisted_3)];
      }),
      _: 2
    }, 1032, ["to"])) : (openBlock(), createElementBlock("a", mergeProps({
      key: 1,
      href: $options.getItemProp(item, 'url'),
      "class": _ctx.cx('headerAction'),
      tabindex: -1
    }, $options.getPTOptions('headerAction', item, index)), [$options.getItemProp(item, 'items') ? renderSlot(_ctx.$slots, "submenuicon", {
      key: 0,
      active: $options.isItemActive(item)
    }, function () {
      return [(openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(item) ? 'ChevronDownIcon' : 'ChevronRightIcon'), mergeProps({
        "class": _ctx.cx('submenuIcon')
      }, $options.getPTOptions('submenuIcon', item, index)), null, 16, ["class"]))];
    }) : createCommentVNode("", true), _ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
      key: 1,
      item: item,
      "class": normalizeClass([_ctx.cx('headerIcon'), $options.getItemProp(item, 'icon')])
    }, null, 8, ["item", "class"])) : $options.getItemProp(item, 'icon') ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx('headerIcon'), $options.getItemProp(item, 'icon')]
    }, $options.getPTOptions('headerIcon', item, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx('headerLabel')
    }, $options.getPTOptions('headerLabel', item, index)), toDisplayString($options.getItemLabel(item)), 17)], 16, _hoisted_4))], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item
    }, null, 8, ["item"]))], 16)], 16, _hoisted_2), createVNode(Transition, mergeProps({
      name: "p-toggleable-content"
    }, _ctx.ptm('transition')), {
      "default": withCtx(function () {
        return [withDirectives(createElementVNode("div", mergeProps({
          id: $options.getContentId(index),
          "class": _ctx.cx('toggleableContent'),
          role: "region",
          "aria-labelledby": $options.getHeaderId(index)
        }, _ctx.ptm('toggleableContent')), [$options.getItemProp(item, 'items') ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          "class": _ctx.cx('menuContent')
        }, _ctx.ptm('menuContent')), [createVNode(_component_PanelMenuList, {
          panelId: $options.getPanelId(index),
          items: $options.getItemProp(item, 'items'),
          templates: _ctx.$slots,
          expandedKeys: _ctx.expandedKeys,
          onItemToggle: $options.changeExpandedKeys,
          onHeaderFocus: $options.updateFocusedHeader,
          exact: _ctx.exact,
          pt: _ctx.pt,
          unstyled: _ctx.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "exact", "pt", "unstyled"])], 16)) : createCommentVNode("", true)], 16, _hoisted_5), [[vShow, $options.isItemActive(item)]])];
      }),
      _: 2
    }, 1040)], 16)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1);
}

script.render = render;

export { script as default };
