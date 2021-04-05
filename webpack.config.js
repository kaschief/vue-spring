const nodeSass = require("node-sass");
const nodeSassGlobImporter = require("node-sass-glob-importer");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const cwd = process.cwd();
const context = path.join(cwd, "src");

const config = {
  paths: {
    context,
    dist: path.join(cwd, "dist"),
  },
  files: {
    tsconfig: path.join(cwd, "tsconfig.json"),
  },
  extensions: [".ts", ".js", ".pug", ".vue"],
  entrypoints: {
    index: ["./index.ts", "./index.scss"],
  },
};

module.exports = (_, argv) => {
  const mode = argv.mode || "development";

  console.log(`### build mode: ${mode}`);
  return {
    mode,
    context: config.paths.context,
    entry: config.entrypoints,
    output: {
      pathinfo: false,
      path: config.paths.dist,
    },
    resolve: {
      extensions: config.extensions,
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "~$": "node_modules",
      },
      plugins: [new TsConfigPathsPlugin({ configFile: config.files.tsconfig })],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: config.files.tsconfig,
          extensions: {
            vue: true,
          },
        },
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: "My App",
        template: "index.html",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: config.files.tsconfig,
                appendTsSuffixTo: [/\.vue$/],
                experimentalWatchApi: true,
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
              options: {
                implementation: nodeSass,
                sassOptions: {
                  importer: nodeSassGlobImporter(),
                },
              },
            },
          ],
        },
        {
          test: /\.pug$/,
          oneOf: [
            // this applies to `<template lang="pug">` in Vue components
            {
              resourceQuery: /^\?vue/,
              use: [
                {
                  loader: "pug-plain-loader",
                  options: {
                    basedir: config.paths.context,
                  },
                },
              ],
            },
            // this applies to pug imports inside JavaScript
            {
              use: [
                {
                  loader: "vue-template-loader",
                  options: {
                    transformAssetUrls: {
                      img: "src",
                    },
                  },
                },
                {
                  loader: "pug-plain-loader",
                  options: {
                    basedir: config.paths.context,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: {
      children: false,
      modules: false,
    },
  };
};
