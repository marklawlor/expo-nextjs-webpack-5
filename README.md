# expo-nextjs-webpack-5

An experiment to get the @expo/next-adapter working with the latest NextJS 10.2 features

If using yarn

```
yarn install
yarn start
```

If using npm

```
npm install --legacy-peer-deps
npm start
```

### FYI

The expo packages are in active development and the version numbers may not match the patches listed here. They should still work, but just create an issue if they don't


## Issues

> NPM install fails due to peer dependencies

Use `--legacy-peer-deps` when installing

> Babel class properties errors when building \_document.tsx

Resolved by patching @expo/next-adapter to add the missing babel transform

> `TypeError: Cannot read property 'version' of undefined`

Resolved by locking "html-webpack-plugin" to "5.3.0"

> NextJS pages do not compile

Resolved by patching ignoreExternalModules to Webpack5 syntax

> NextJS react transform conflicts with Expo react trasform

Resolved by patching babel-preset-expo to enable useTransformReactJsxExperimental

> PostCSS Errors when building in production

`optimize-css-assets-webpack-plugin` is deprecated for Webpack5. Need to patch @expo/webpack-config to use `css-minimizer-webpack-plugin`

> React-native-web cannot use import outside of module

Add `react-native-web` to Next transpile modules

NOTE: This is a work around and not always needed. This is a temp fix until the underlying problem is understood
