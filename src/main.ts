import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import routes from "virtual:generated-pages"
import "~/assets/styles/style.scss"

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager("./module/*.ts")).map((i) => i.install?.(ctx))
})
