module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
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
            ? "[path]___[name]__[local]___[hash:base64:5]"
            : "[hash:base64:5]",
      },
    ],
  ],
};
