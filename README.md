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

## Current issues

### React Native Web transpiling

react-native-web needs to be added to the next-transpile-modules for this to work. This is ususual as the Expo babel-loader should be enough.

The Expo babel-loader is working, as react-native and packages like @expo/html-elements work as expected, this is just a react-native-web issue.

It most likely is releated to the babel-plugin-react-native-web
