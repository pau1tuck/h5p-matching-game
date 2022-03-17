/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

const config: Configuration = {
  entry: "./src/entries/main.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        /*
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss"),
        use: ["style-loader", "css-loader", "sass-loader"], */
        test: /\.css$/,
        include: path.resolve(__dirname, "src/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "h5p-textordering.js",
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "h5p-textordering.css",
    }),
  ],
};

export default config;
