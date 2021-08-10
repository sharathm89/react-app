module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["@babel/transform-runtime"],
    [
      "@dr.pogodin/babel-plugin-react-css-modules",
      {
        webpackHotModuleReloading: true,
        autoResolveMultipleImports: true,
        filetypes: {
          ".scss": {
            syntax: "postcss-scss",
          },
        },
        generateScopedName:
          process.env.NODE_ENV === "development"
            ? "[local]___[hash:base64:5]"
            : "[hash:base64:5]",
      },
    ],
  ],
};
