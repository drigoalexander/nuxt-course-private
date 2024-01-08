import { u as useRoute, a as useSupabaseClient, b as useSupabaseUser, n as navigateTo, _ as __nuxt_component_0 } from '../server.mjs';
import { defineComponent, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'animejs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm",
  __ssrInlineRender: true,
  setup(__props) {
    const { query } = useRoute();
    useSupabaseClient();
    const user = useSupabaseUser();
    watch(
      user,
      () => {
        if (user.value) {
          navigateTo(query.redirectTo, {
            replace: true
          });
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLoader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageLoader, { loginProcess: true }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confirm-67ff099c.mjs.map
