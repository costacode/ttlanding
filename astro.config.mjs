import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: "https://astro-moon-landing.netlify.app/",
=======
  site: "https://costacode.github.io",
  base: '/',
>>>>>>> parent of f21a926... change base with repo name
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
