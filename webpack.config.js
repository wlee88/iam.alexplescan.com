module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "./index.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
