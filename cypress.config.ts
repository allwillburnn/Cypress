import { defineConfig } from 'cypress'
import createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

export default defineConfig({
  projectId: "57qcfd",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler())
    },
    baseUrl: "https://4pda.to/"
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
})