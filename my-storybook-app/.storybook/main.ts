import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // stories: ["../src/components/**/*.stories.@(ts|tsx)"],
  stories: [
    "../src/stories/**/*.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook-zeplin",
    "@storybook/addon-designs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-designs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
