# How to create new react app without CRA

Nice tutorial: https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0

## Initialize project

1. Create empty dir
1. Run `npn init` to create `package.json`. Alternavive - `yarn`
1. Run `git init` to initialize repo and create simple `.gitignore` to exclude `node_modules` directory

## Install packages via npm

1. Install React itself: `npm install react react-dom --save`

### Install Babel

Babel is transpiler used to support modern JS feature by older browsers.
It is installed as dev dependency, because we need to transpile code only during build phase, babel is not required to run our app.

Install it: `npm install @babel/core @babel/preset-env @babel/preset-react --save-dev`

For react app we need 3 babel packages:
1. `@babel/core` - core babel package, always required
1. `@babel/preset-env` - smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms. Alternative is installing and listing all babel plugins that you need explicitly in babel config (e.g. for arrow functions you'll need `@babel/plugin-transform-arrow-functions`)
1. `@babel/preset-react` - preset for React

You can also install babel CLI (`@babel/cli`) to run babel from terminal, e.g. `./node_modules/.bin/babel src --out-dir lib --presets=@babel/env`

Preset `@babel/preset-env` has a nice feature: it supports setting target list of browsers in `babel.config.json`

Another component requred to effectively support old browsers are polyfills. There is a package called `@babel/polyfill`,
which internally uses package `core-js` to polyfill missing features. However, with recent versions of babel it's recommended to install `core-js` separately and use two options below to specify `core-js` version and indicate that babel should included only polyfills which are really needed by our code (see file `babel.config.json`):
```
"useBuiltIns": "usage",
"corejs": 3,
```

If you need some dynamic behavior when it comes to babel config (e.g. do something when create production bundle),
it's possible to write babel config using JavaScript. This JS file should export structure similar to normal JSON config.

### Install webpack

Webpack is bundler and used to pack your code and it's dependencies to single file.

Install it: `npm install webpack@4 webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin --save-dev `
Note: We're using webpack 4 because of this issue in version 5 (https://github.com/webpack/webpack-dev-server/issues/2759).

We needed these packages:
1. `webpack webpack-cli webpack-dev-server` - packages to run webpack and serve bundled core during development
1. `babel-loader css-loader style-loader` - loaders, which know how to bundle JS (via babel integration) and styles
1. `html-webpack-plugin` - plugin which allows to inject bundled JS to HTML template

All dependencies above are installed with `--save-dev` option, because final bundle doesn't need webpack.

Next we create webpack config file `webpack.config.js` and copy-paste confif example for React (see comments inside it).
Config file is written in JavaScript, so you can potentially put some condition-based logic.

Last step in referencing webpack in npm scripts. Add these lines to `package.json`:
```
"scripts": {
  "start": "webpack-dev-server --mode=development --open --hot",
  "build": "webpack --mode=production"
},
```

As now you're using webpack to bundle your code, `webpack-dev-server` should be used to serve it properly.
Also note `--mode` parameter, which value is different for development vs production modes.
