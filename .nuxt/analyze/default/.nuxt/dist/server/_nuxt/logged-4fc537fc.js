import "vue";
import "hookable";
import { p as defineNuxtRouteMiddleware, u as useSupabaseUser, n as navigateTo } from "../server.mjs";
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
const logged = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value && to.path === "/login") {
    return navigateTo("/course");
  }
});
export {
  logged as default
};
//# sourceMappingURL=logged-4fc537fc.js.map
