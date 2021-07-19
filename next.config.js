const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([[withExpo, { projectRoot: __dirname }]], {
  experimental: { esmExternals: "loose" },
});
