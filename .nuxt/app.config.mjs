
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/drigoalexander/Documents/Practice/NUXT/nuxt-course/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "496a94a9-7808-4f7c-8727-5f1ffb600ecc"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
