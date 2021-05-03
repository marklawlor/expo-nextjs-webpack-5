const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

const withTM = require("next-transpile-modules")(["react-native-web"]);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [withTM, withBundleAnalyzer, [withExpo, { projectRoot: __dirname }]],
  {
    future: { webpack5: true },
    webpack(config, options) {
      config.plugins.push(
        new StatsWriterPlugin({
          filename: "stats.json",
          stats: {
            context: "./src", // optional, will improve readability of the paths
            assets: true,
            entrypoints: true,
            chunks: true,
            modules: true,
          },
        })
      );
      return config;
    },
  }
);
