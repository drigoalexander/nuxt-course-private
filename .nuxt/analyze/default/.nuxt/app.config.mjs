
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/drigoalexander/Documents/Practice/NUXT/nuxt-course/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "42d95357-df41-4454-a112-da29d5dc8d8f"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
