const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    '../src/**/stories.js', // The name should have a prefix for component name like `button.stories.js` instead of `stories.js` like you've done. As you renamed, you can remove this pattern
    "../src/**/*.stories.@(js|jsx)"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      }
    };
  },
  addons: ["@storybook/addon-essentials", "@storybook/addon-viewport"]
};
