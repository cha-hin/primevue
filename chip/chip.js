this.primevue = this.primevue || {};
this.primevue.chip = (function (TimesCircleIcon, BaseComponent, usestyle, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var TimesCircleIcon__default = /*#__PURE__*/_interopDefaultLegacy(TimesCircleIcon);
    var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

    var styles = "\n.p-chip {\n    display: inline-flex;\n    align-items: center;\n}\n\n.p-chip-text {\n    line-height: 1.5;\n}\n\n.p-chip-icon.pi {\n    line-height: 1.5;\n}\n\n.p-chip-remove-icon {\n    line-height: 1.5;\n    cursor: pointer;\n}\n\n.p-chip img {\n    border-radius: 50%;\n}\n";
    var classes = {
      root: function root(_ref) {
        var props = _ref.props;
        return ['p-chip p-component', {
          'p-chip-image': props.image != null
        }];
      },
      icon: 'p-chip-icon',
      label: 'p-chip-text',
      removeIcon: 'p-chip-remove-icon'
    };
    var _useStyle = usestyle.useStyle(styles, {
        name: 'chip',
        manual: true
      }),
      loadStyle = _useStyle.load;
    var script$1 = {
      name: 'BaseChip',
      "extends": BaseComponent__default["default"],
      props: {
        label: {
          type: String,
          "default": null
        },
        icon: {
          type: String,
          "default": null
        },
        image: {
          type: String,
          "default": null
        },
        removable: {
          type: Boolean,
          "default": false
        },
        removeIcon: {
          type: String,
          "default": undefined
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
      name: 'Chip',
      "extends": script$1,
      emits: ['remove'],
      data: function data() {
        return {
          visible: true
        };
      },
      methods: {
        onKeydown: function onKeydown(event) {
          if (event.key === 'Enter' || event.key === 'Backspace') {
            this.close(event);
          }
        },
        close: function close(event) {
          this.visible = false;
          this.$emit('remove', event);
        }
      },
      components: {
        TimesCircleIcon: TimesCircleIcon__default["default"]
      }
    };

    var _hoisted_1 = ["aria-label"];
    var _hoisted_2 = ["src"];
    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return $data.visible ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
        key: 0,
        "class": _ctx.cx('root'),
        "aria-label": _ctx.label
      }, _ctx.ptm('root'), {
        "data-pc-name": "chip"
      }), [vue.renderSlot(_ctx.$slots, "default", {}, function () {
        return [_ctx.image ? (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({
          key: 0,
          src: _ctx.image
        }, _ctx.ptm('image')), null, 16, _hoisted_2)) : _ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.$slots.icon), vue.mergeProps({
          key: 1,
          "class": _ctx.cx('icon')
        }, _ctx.ptm('icon')), null, 16, ["class"])) : _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
          key: 2,
          "class": [_ctx.cx('icon'), _ctx.icon]
        }, _ctx.ptm('icon')), null, 16)) : vue.createCommentVNode("", true), _ctx.label ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
          key: 3,
          "class": _ctx.cx('label')
        }, _ctx.ptm('label')), vue.toDisplayString(_ctx.label), 17)) : vue.createCommentVNode("", true)];
      }), _ctx.removable ? vue.renderSlot(_ctx.$slots, "removeicon", {
        key: 0,
        onClick: $options.close,
        onKeydown: $options.onKeydown
      }, function () {
        return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.removeIcon ? 'span' : 'TimesCircleIcon'), vue.mergeProps({
          tabindex: "0",
          "class": [_ctx.cx('removeIcon'), _ctx.removeIcon],
          onClick: $options.close,
          onKeydown: $options.onKeydown
        }, _ctx.ptm('removeIcon')), null, 16, ["class", "onClick", "onKeydown"]))];
      }) : vue.createCommentVNode("", true)], 16, _hoisted_1)) : vue.createCommentVNode("", true);
    }

    script.render = render;

    return script;

})(primevue.icons.timescircle, primevue.basecomponent, primevue.usestyle, Vue);
