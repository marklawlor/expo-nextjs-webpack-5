# expo-nextjs-webpack-5

An experiment to get the @expo/next-adapter working with the latest NextJS 11.x features

- [x] Support NextJS 11 (released in @expo/next-adapter v3 🥳)
- [ ] Support NextJS ESM modules

## TLDR: How to use this in your own project

- `npm i --save-dev postcss`
- Copy the patches folder to your project
- Add `"postinstall": "npx patch-package",` to your package.json scripts
- `npm install --legacy-peer-deps`

### FYI

The expo packages are in active development and the version numbers may not match the patches listed here. They should still work, but just create an issue if they don't

## Known Issues

> NPM install fails due to peer dependencies

Use `--legacy-peer-deps` when installing

> React-native-web cannot use import outside of module

Add `react-native-web` to Next transpile modules

NOTE: This is a work around and not always needed. This is a temp fix until the underlying problem is understood
