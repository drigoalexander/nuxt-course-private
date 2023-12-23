import { p as defineNuxtRouteMiddleware, u as useSupabaseUser, n as navigateTo } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const logged = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value && to.path === "/login") {
    return navigateTo("/course");
  }
});

export { logged as default };
//# sourceMappingURL=logged-4fc537fc.mjs.map
