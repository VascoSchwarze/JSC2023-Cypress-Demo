import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "cypress-image-diff-js/dist/plugin";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    // baseUrl: "http://localhost:3000",
    // viewportHeight: 1080,
    // viewportWidth: 1920,
  },
});
