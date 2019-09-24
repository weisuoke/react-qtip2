module.exports = {
  components: "./src/**/[A-z]*.{js,jsx}",
  require: ["./examples/example.css"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader")
            }
          ]
        }
      ]
    }
  },
  showUsage: true,
  showCode: true,
  title: "Guidance of react-qtip2 ",
  styleguideDir: "./docs"
};
