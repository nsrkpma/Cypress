const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)],
  }));

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "xmsbje",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/BDD/*.feature'
  },
});
