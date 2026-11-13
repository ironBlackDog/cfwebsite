// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const entitiesV4 = path.resolve(__dirname, "node_modules/entities");
const entitiesV7Decode = path.resolve(
  __dirname,
  "node_modules/entities-html5/dist/esm/decode.js",
);
const entitiesV7Escape = path.resolve(
  __dirname,
  "node_modules/entities-html5/dist/esm/escape.js",
);

// htmlparser2@10 imports `entities/decode` (entities v6+). Older htmlparser2
// imports `entities/lib/decode.js` (entities v4). A string alias of `entities`
// prefix-matches the v6 path and points it at v4, which has no `decode` file.
function entitiesDualVersion(): Plugin {
  return {
    name: "entities-dual-version",
    enforce: "pre",
    resolveId(id) {
      if (id === "entities/decode") return entitiesV7Decode;
      if (id === "entities/escape") return entitiesV7Escape;
      return null;
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  plugins: [entitiesDualVersion()],
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
  },
  vite: {
    resolve: {
      alias: [
        { find: /^entities\/decode$/, replacement: entitiesV7Decode },
        { find: /^entities\/escape$/, replacement: entitiesV7Escape },
        {
          find: "entities/lib/decode.js",
          replacement: path.resolve(entitiesV4, "lib/decode.js"),
        },
        {
          find: "entities/lib/encode.js",
          replacement: path.resolve(entitiesV4, "lib/encode.js"),
        },
        { find: /^entities$/, replacement: entitiesV4 },
      ],
    },
  },
});
