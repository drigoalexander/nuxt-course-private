import { e as useSupabaseClient, u as useSupabaseUser, a as useRoute } from "../server.mjs";
import { useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "cookie-es";
import "ohash";
import "@supabase/supabase-js";
import "@vue/devtools-api";
import "animejs";
import "vue/server-renderer";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    useSupabaseUser();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex flex-col gap-10 items-center justify-center min-h-screen w-full bg-black"><h3 class="text-white text-[5vw] -tracking-tight">Welcome,</h3><div class="overflow-hidden bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7] relative flex items-center gap-10 text-[7vw] duration-300 transition-all ease-in-out w-[60vw] cursor-pointer hover:w-[64vw] group rounded-full text-white"><div class="flex h-full w-full items-center justify-center bg-black px-24 py-4 m-[4px] rounded-full"><span class="text-white text-transparent bg-clip-text w-full"> Git It Started</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[7vw] absolute right-10 translate-y-[150%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg></div></div></div><div class=""></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-807e08c9.js.map
