import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Components from "unplugin-vue-components/vite"
import Markdown from "vite-plugin-md"
import matter from "gray-matter"
import fm from "front-matter"
import yaml, { dump } from "js-yaml"
import AutoImport from "unplugin-auto-import/vite"
import { resolve } from "path"
import { readFileSync } from "fs"
import commonjsExternals from 'vite-plugin-commonjs-externals';

const bundledWorker = require(resolve(__dirname, './plugins/vite-plugin-bundled-worker'));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  define: {
    "process.env": process.env,
  },
  plugins: [
    bundledWorker(),
    commonjsExternals({ externals: require('./external-packages').default }),
    Vue({
      include: [/\.vue$/, /\.ftml$/, /\.md$/],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperComponent: "post",
      include: [/\.ftml$/, /\.md$/],
      transforms: {
        before: (content) => {
          const res = fm(content)
          const mdencodecontent = encodeURIComponent(res.body)
          const mdfrontmatterstr = "---\n"+dump(res.attributes,{forceQuotes: true})+"---\n"
          const mdcontent = mdfrontmatterstr+mdencodecontent
          return mdcontent
          }
        }
      }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: [
        {
          dir: "src/pages",
          baseRoute: "",
        },
        {
          dir: "public/wdfiles",
          baseRoute: "wdfiles",
        },
        {
          dir: "src/pages/user",
          baseRoute: "user:info",
          template: "src/pages/user/user.html",
        }
      ],
      extensions: ["vue", "ftml", "md"],
      extendRoute(route) {
        // Get inspired from anthony fu"s personal website
        // https://github.com/antfu/antfu.me
        const path = resolve(__dirname, route.component.slice(1))
        const md = readFileSync(path, "utf-8")
        const { data } = matter(md)
        if (path.split(".").pop() == "md") {
          route.meta = Object.assign(route.meta || {}, { frontmatter: data})
        }
      },
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue", "ftml", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.ftml$/, /\.md$/],
      dts: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "@vueuse/core", "@vueuse/head", "vue-router"],
      dts: true,
    }),
  ],
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
})
