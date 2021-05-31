const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",
]);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [withTM, withBundleAnalyzer, [withExpo, { projectRoot: __dirname }]],
  {
    future: { webpack5: true },
    webpack(config, options) {
      config.resolve.mainFields.unshift("react-native");

      // config.plugins.push(
      //   new StatsWriterPlugin({
      //     filename: "stats.json",
      //     stats: {
      //       context: "./src",
      //       optimizationBailout: true,
      //     },
      //   })
      // );

      return config;
    },
  }
);
