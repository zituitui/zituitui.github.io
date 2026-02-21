import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repo.endsWith(".github.io");

export default defineConfig({
  site: "https://zituitui.github.io",
  base: repo ? (isUserSite ? "/" : `/${repo}/`) : "/"
});
