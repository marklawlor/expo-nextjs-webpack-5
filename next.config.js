const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")(["react-native-web"]);

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {
  future: { webpack5: true },
});
