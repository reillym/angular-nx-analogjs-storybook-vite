import { StorybookConfig } from '@analogjs/storybook-angular';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-vitest"],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  docs: {}
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
