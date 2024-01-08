import { _ as __nuxt_component_0 } from './nuxt-link-1316bcc5.mjs';
import { u as useRoute, b as useSupabaseUser, a as useSupabaseClient } from '../server.mjs';
import { useSSRContext, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, defineComponent, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import __nuxt_component_2 from './page-1218e96a.mjs';
import { u as useCourse } from './useCourse-74bb5d62.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserCard",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    useSupabaseClient();
    const name = computed(() => {
      var _a;
      return (_a = user.value) == null ? void 0 : _a.user_metadata.full_name;
    });
    const avatar = computed(() => {
      var _a;
      return (_a = user.value) == null ? void 0 : _a.user_metadata.avatar_url;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(user)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4" }, _attrs))}><label class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabindex="0"><div class="flex flex-row gap-4 p-4"><div class="avatar avatar-md"><img${ssrRenderAttr("src", unref(avatar))} alt="avatar"></div><div class="flex flex-col"><span>Welcome Back,</span><span class="text-xs font-normal text-content2">${ssrInterpolate(unref(name))}</span></div></div></label><div class="dropdown-menu dropdown-menu-right-top ml-2"><button tabindex="-1" class="dropdown-item text-sm"> Log out </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "LoginCard",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-body"><h2 class="card-header">Login to your account</h2><p class="text-content2">Start your course in a glance</p><div class="card-footer">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/login?redirectTo=${unref(route).fullPath}`,
        class: "btn-primary btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "course",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const user = useSupabaseUser();
    const course = ([__temp, __restore] = withAsyncContext(() => useCourse()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserCard = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_LoginCard = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row sm:gap-10" }, _attrs))}><div class="sm:w-full sm:max-w-[18rem]"><input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state"><label for="sidebar-mobile-fixed" class="sidebar-overlay"></label><aside class="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"><section class="sidebar-title items-center p-4"><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-4xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`NuxtInsight`);
          } else {
            return [
              createTextVNode("NuxtInsight")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="sidebar-content"><nav class="menu rounded-md"><section class="menu-section px-4"><span class="menu-title">Course menu</span><ul class="menu-items gap-8"><!--[-->`);
      ssrRenderList(unref(course).data.chapters, (el, idx) => {
        _push(`<li class="menu-item flex flex-col items-start gap-3"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>${ssrInterpolate(el.title)}</span></div><ul class="w-full flex flex-col gap-3 list-disc"><!--[-->`);
        ssrRenderList(el.lessons, (element, index) => {
          _push(`<li class="${ssrRenderClass({
            "text-gray-400": element.path !== _ctx.$route.fullPath,
            "text-transparent": element.path === _ctx.$route.fullPath,
            "bg-clip-text": element.path === _ctx.$route.fullPath,
            "bg-gradient-to-r": element.path === _ctx.$route.fullPath,
            "from-[#FCF84A]": element.path === _ctx.$route.fullPath,
            "via-[#FE2857]": element.path === _ctx.$route.fullPath,
            "to-[#6B57FF]": element.path === _ctx.$route.fullPath
          })}">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: element.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(element.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(element.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></section><div class="divider my-0"></div></nav></section><section class="sidebar-footer h-fit justify-end bg-gray-2 pt-2">`);
      _push(ssrRenderComponent(_component_UserCard, null, null, _parent));
      _push(`</section></aside></div><div class="flex w-full flex-col p-4"><div class="w-fit"><label for="sidebar-mobile-fixed" class="btn-primary btn sm:hidden">Open Sidebar</label></div><div class="my-4 grid grid-cols-1 gap-4 h-screen w-full"><div class="flex h-full w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">`);
      if (unref(user)) {
        _push(`<!--[-->`);
        if (unref(route).fullPath !== "/course") {
          _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(unref(course).data.title)}</span>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_LoginCard, null, null, _parent));
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=course-dd2cd733.mjs.map
