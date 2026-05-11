import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkSmartypants from "remark-smartypants";

import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const base_layout = join(__dirname, "./src/lib/layouts/base.svelte");
const blog_layout = join(__dirname, "./src/lib/layouts/blog.svelte");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],

  preprocess: [
    mdsvex({
      extensions: [".md", ".svx"],

      layout: {
        _: base_layout,
        blog: blog_layout,
      },

      remarkPlugins: [
        remarkGfm,
        remarkBreaks,
        remarkSmartypants,
      ],

      rehypePlugins: [
        rehypeSlug,

        [
          {
            behavior: "append",
          }
        ],

        [
          rehypePrettyCode,
          {
            theme: "rose-pine",
            keepBackground: false,
          },
        ],
      ],
    }),
  ],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: true,
      strict: true,
    }),

    prerender: {
      handleHttpError: "warn",
      entries: ["*"],
    },

  },
};

export default config;