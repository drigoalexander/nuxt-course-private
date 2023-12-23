import { defineComponent, mergeProps, useSSRContext, ref, createElementBlock, withAsyncContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "destr";
import { d as defineStore, u as useSupabaseUser, a as useRoute, b as useHead } from "../server.mjs";
import { u as useLessonWithCache, a as useCourse } from "./useCourse-74bb5d62.js";
import "hookable";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    videoID: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        src: `https://player.vimeo.com/video/${props.videoID}`,
        width: "100%",
        height: "100%",
        frameborder: "0",
        title: "{video_title}",
        webkitallowfullscreen: "",
        mozallowfullscreen: "",
        allowfullscreen: ""
      }, _attrs))}></iframe>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useLesson = async (chapterSlug, lessonSlug) => {
  const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`;
  return await useLessonWithCache(url);
};
const useCourseProgress = defineStore("courseProgress", () => {
  useSupabaseUser();
  const progress = ref({});
  const initialized = ref(false);
  async function initialize() {
    if (initialized.value)
      return;
    initialized.value = true;
  }
  const toggleComplete = async (chapter, lesson) => {
    var _a;
    const user2 = useSupabaseUser();
    if (!user2.value)
      return;
    if (!chapter || !lesson) {
      const {
        params: { chapterSession, lessonSlug }
      } = useRoute();
      chapter = chapterSession;
      lesson = lessonSlug;
    }
    const currentProgress = (_a = progress.value[chapter]) == null ? void 0 : _a[lesson];
    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress
    };
    try {
      await $fetch(`/api/course/chapter/${chapter}/lesson/${lesson}/progress`, {
        method: "POST",
        body: {
          completed: !currentProgress,
          userEmail: user2.value.email
        }
      });
    } catch (error) {
      console.error(error);
      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress
      };
    }
  };
  return {
    initialize,
    progress,
    toggleComplete
  };
});
const _sfc_main = {
  __name: "[lessonSlug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useCourseProgress();
    const { initialize, toggleComplete } = store;
    const user = useSupabaseUser();
    console.log(user.value.email);
    initialize();
    const course = ([__temp, __restore] = withAsyncContext(() => useCourse()), __temp = await __temp, __restore(), __temp);
    const { params } = useRoute();
    const lesson = ([__temp, __restore] = withAsyncContext(() => useLesson(params.chapterSession, params.lessonSlug)), __temp = await __temp, __restore(), __temp);
    const currentChapter = computed(() => {
      return course.value.data.chapters.find(
        (element) => element.slug == params.chapterSession
      );
    });
    const currentLesson = computed(() => {
      return currentChapter.value.lessons.find(
        (element) => element.slug == params.lessonSlug
      );
    });
    computed(() => {
      var _a, _b;
      return ((_b = (_a = store.progress) == null ? void 0 : _a[params.chapterSession]) == null ? void 0 : _b[params.lessonSlug]) || false;
    });
    useHead({
      title: `${currentLesson.value.title}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VideoPlayer = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-3/4 mx-auto h-3/4 my-auto gap-6 flex flex-col" }, _attrs))}><h4 class="text-xl font-semibold"> Chapter ${ssrInterpolate(unref(currentChapter).number)} - Lesson ${ssrInterpolate(unref(lesson).data.number)}</h4><h1 class="text-4xl font-bold">${ssrInterpolate(unref(lesson).data.title)}</h1>`);
      _push(ssrRenderComponent(_component_VideoPlayer, {
        videoID: unref(lesson).data.videoId
      }, null, _parent));
      _push(`<p>${ssrInterpolate(unref(lesson).data.text)}</p>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/chapter/[chapterSession]/lesson/[lessonSlug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_lessonSlug_-bfb5d5b4.js.map
