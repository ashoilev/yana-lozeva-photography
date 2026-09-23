import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://ashoilev.github.io",
  base: process.env.GITHUB_ACTIONS ? "/yana-lozeva-photography" : "/"
});
