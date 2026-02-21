import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your-github-username.github.io",
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
    : "/"
});
