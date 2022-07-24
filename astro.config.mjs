import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  // Enable Tailwind CSS
  integrations: [react(), tailwind()],
  renderer: ["@astro/renderer-react"],
});
