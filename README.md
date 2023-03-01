# exit-on-error-webpack-plugin

Created to force karma fail when webpack fails, thus preventing, for instance, a successful test run while having TypeScript errors.

Based on contributions from this thread: https://github.com/ryanclark/karma-webpack/issues/66#issuecomment-438278234

## Usage

Install:

```console
npm install exit-on-error-webpack-plugin --save-dev
```

Add plugin to `webpack.config.js`:

```js
const ExitOnErrorPlugin = require('exit-on-error-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ExitOnErrorPlugin()],
  // ...
};
```

Or, if to be applied only on karma-webpack, add it to `karma.config.js`:

```js
const ExitOnErrorPlugin = require('exit-on-error-webpack-plugin');
const webpackConfig = require('../webpack.config.js');

module.exports = function() {
    // ...
    webpack: {
        ...webpackConfig,
        plugins: [
            ...webpackConfig.plugins,
            new ExitOnErrorPlugin()
        ]
    }
    // ...
};
```
