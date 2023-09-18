import { DomHandler } from 'primevue/utils';
import { mergeProps, resolveComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createBlock, withCtx, toDisplayString, resolveDynamicComponent, createCommentVNode } from 'vue';
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

var styles = "\n.p-steps {\n    position: relative;\n}\n\n.p-steps .p-steps-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n}\n\n.p-steps-item {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n    overflow: hidden;\n}\n\n.p-steps-item .p-menuitem-link {\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: hidden;\n    text-decoration: none;\n}\n\n.p-steps.p-steps-readonly .p-steps-item {\n    cursor: auto;\n}\n\n.p-steps-item.p-steps-current .p-menuitem-link {\n    cursor: default;\n}\n\n.p-steps-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.p-steps-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-steps-title {\n    display: block;\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  menu: 'p-steps-list',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance,
      item = _ref2.item;
    return ['p-steps-item', {
      'p-highlight p-steps-current': instance.isActive(item),
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  action: function action(_ref3) {
    var props = _ref3.props,
      isActive = _ref3.isActive,
      isExactActive = _ref3.isExactActive;
    return ['p-menuitem-link', {
      'router-link-active': isActive,
      'router-link-active-exact': props.exact && isExactActive
    }];
  },
  step: 'p-steps-number',
  label: 'p-steps-title'
};
var _useStyle = useStyle(styles, {
    name: 'steps',
    manual: true
  }),
  loadStyle = _useStyle.load;
var script$1 = {
  name: 'BaseSteps',
  "extends": BaseComponent,
  props: {
    id: {
      type: String
    },
    model: {
      type: Array,
      "default": null
    },
    readonly: {
      type: Boolean,
      "default": true
    },
    exact: {
      type: Boolean,
      "default": true
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

var script = {
  name: 'Steps',
  "extends": script$1,
  beforeMount: function beforeMount() {
    if (!this.$slots.item) {
      console.warn('In future versions, vue-router support will be removed. Item templating should be used.');
    }
  },
  mounted: function mounted() {
    var firstItem = this.findFirstItem();
    firstItem.tabIndex = '0';
  },
  methods: {
    getPTOptions: function getPTOptions(key, item, index) {
      return this.ptm(key, {
        context: {
          item: item,
          index: index,
          active: this.isActive(item),
          disabled: this.isItemDisabled(item)
        }
      });
    },
    onItemClick: function onItemClick(event, item, navigate) {
      if (this.disabled(item) || this.readonly) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }
      if (item.to && navigate) {
        navigate(event);
      }
    },
    onItemKeydown: function onItemKeydown(event, item, navigate) {
      switch (event.code) {
        case 'ArrowRight':
          {
            this.navigateToNextItem(event.target);
            event.preventDefault();
            break;
          }
        case 'ArrowLeft':
          {
            this.navigateToPrevItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Home':
          {
            this.navigateToFirstItem(event.target);
            event.preventDefault();
            break;
          }
        case 'End':
          {
            this.navigateToLastItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Tab':
          //no op
          break;
        case 'Enter':
        case 'Space':
          {
            this.onItemClick(event, item, navigate);
            event.preventDefault();
            break;
          }
      }
    },
    navigateToNextItem: function navigateToNextItem(target) {
      var nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    },
    navigateToPrevItem: function navigateToPrevItem(target) {
      var prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    },
    navigateToFirstItem: function navigateToFirstItem(target) {
      var firstItem = this.findFirstItem(target);
      firstItem && this.setFocusToMenuitem(target, firstItem);
    },
    navigateToLastItem: function navigateToLastItem(target) {
      var lastItem = this.findLastItem(target);
      lastItem && this.setFocusToMenuitem(target, lastItem);
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.parentElement.nextElementSibling;
      return nextItem ? nextItem.children[0] : null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.parentElement.previousElementSibling;
      return prevItem ? prevItem.children[0] : null;
    },
    findFirstItem: function findFirstItem() {
      var firstSibling = DomHandler.findSingle(this.$refs.list, '[data-pc-section="menuitem"]');
      return firstSibling ? firstSibling.children[0] : null;
    },
    findLastItem: function findLastItem() {
      var siblings = DomHandler.find(this.$refs.list, '[data-pc-section="menuitem"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    },
    setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = '-1';
      focusableItem.tabIndex = '0';
      focusableItem.focus();
    },
    isActive: function isActive(item) {
      return item.to ? this.$router.resolve(item.to).path === this.$route.path : false;
    },
    isItemDisabled: function isItemDisabled(item) {
      return this.disabled(item) || this.readonly && !this.isActive(item);
    },
    visible: function visible(item) {
      return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
    },
    disabled: function disabled(item) {
      return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
    },
    label: function label(item) {
      return typeof item.label === 'function' ? item.label() : item.label;
    },
    getMenuItemProps: function getMenuItemProps(item, index) {
      var _this = this;
      return {
        action: mergeProps({
          "class": this.cx('action'),
          onClick: function onClick($event) {
            return _this.onItemClick($event, item);
          },
          onKeyDown: function onKeyDown($event) {
            return _this.onItemKeydown($event, item);
          }
        }, this.getPTOptions('action', item, index)),
        step: mergeProps({
          "class": this.cx('step')
        }, this.getPTOptions('step', item, index)),
        label: mergeProps({
          "class": this.cx('label')
        }, this.getPTOptions('label', item, index))
      };
    }
  }
};

var _hoisted_1 = ["id"];
var _hoisted_2 = ["data-p-highlight", "data-p-disabled"];
var _hoisted_3 = ["href", "aria-current", "onClick", "onKeydown"];
var _hoisted_4 = ["onKeydown"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("nav", mergeProps({
    id: _ctx.id,
    "class": _ctx.cx('root')
  }, _ctx.ptm('root'), {
    "data-pc-name": "steps"
  }), [createElementVNode("ol", mergeProps({
    ref: "list",
    "class": _ctx.cx('menu')
  }, _ctx.ptm('menu')), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function (item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: item.to
    }, [$options.visible(item) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      "class": [_ctx.cx('menuitem', {
        item: item
      }), item["class"]],
      style: item.style
    }, $options.getPTOptions('menuitem', item, index), {
      "data-p-highlight": $options.isActive(item),
      "data-p-disabled": $options.isItemDisabled(item)
    }), [!_ctx.$slots.item ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [!$options.isItemDisabled(item) ? (openBlock(), createBlock(_component_router_link, {
      key: 0,
      to: item.to,
      custom: ""
    }, {
      "default": withCtx(function (_ref) {
        var navigate = _ref.navigate,
          href = _ref.href,
          isActive = _ref.isActive,
          isExactActive = _ref.isExactActive;
        return [createElementVNode("a", mergeProps({
          href: href,
          "class": _ctx.cx('action', {
            isActive: isActive,
            isExactActive: isExactActive
          }),
          tabindex: -1,
          "aria-current": isExactActive ? 'step' : undefined,
          onClick: function onClick($event) {
            return $options.onItemClick($event, item, navigate);
          },
          onKeydown: function onKeydown($event) {
            return $options.onItemKeydown($event, item, navigate);
          }
        }, $options.getPTOptions('action', item, index)), [createElementVNode("span", mergeProps({
          "class": _ctx.cx('step')
        }, $options.getPTOptions('step', item, index)), toDisplayString(index + 1), 17), createElementVNode("span", mergeProps({
          "class": _ctx.cx('label')
        }, $options.getPTOptions('label', item, index)), toDisplayString($options.label(item)), 17)], 16, _hoisted_3)];
      }),
      _: 2
    }, 1032, ["to"])) : (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": _ctx.cx('action'),
      onKeydown: function onKeydown($event) {
        return $options.onItemKeydown($event, item);
      }
    }, $options.getPTOptions('action', item, index)), [createElementVNode("span", mergeProps({
      "class": _ctx.cx('step')
    }, $options.getPTOptions('step', item, index)), toDisplayString(index + 1), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx('label')
    }, $options.getPTOptions('label', item, index)), toDisplayString($options.label(item)), 17)], 16, _hoisted_4))], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item,
      index: index,
      label: $options.label(item),
      props: $options.getMenuItemProps(item, index)
    }, null, 8, ["item", "index", "label", "props"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16)], 16, _hoisted_1);
}

script.render = render;

export { script as default };
