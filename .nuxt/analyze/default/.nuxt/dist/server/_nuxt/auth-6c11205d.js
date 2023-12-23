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
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value || to.params.chapterSession == "1-chapter-1") {
    return;
  }
  return navigateTo(`/login?redirectTo=${to.path}`);
});
export {
  auth as default
};
//# sourceMappingURL=auth-6c11205d.js.map
