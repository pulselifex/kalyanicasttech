import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => {
  const isNetlify = process.env.NETLIFY === "true" || process.env.DEPLOY_TARGET?.trim() === "netlify";

  return {
    resolve: {
      alias: {
        "@": "/src",
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        server: { entry: "server" },
      }),
      ...(isNetlify ? [netlify()] : []),
      viteReact(),
      ...(command === "build" && !isNetlify
        ? [
            nitro({
              defaultPreset: "cloudflare-module",
              output: {
                dir: "dist",
                serverDir: "dist/server",
                publicDir: "dist/client",
              },
              cloudflare: {
                nodeCompat: true,
                deployConfig: true,
              },
            }),
          ]
        : []),
    ],
  };
});
