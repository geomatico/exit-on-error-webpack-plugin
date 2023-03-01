class ExitOnErrorWebpackPlugin {
    apply(compiler) {
      compiler.hooks.failed.tap('ExitOnErrorWebpackPlugin', () => {
        Promise.resolve().then(() => process.exit(1));
      });
      compiler.hooks.done.tap('ExitOnErrorWebpackPlugin', (stats) => {
        if (stats && stats.hasErrors()) {
          Promise.resolve().then(() => process.exit(1));
        }
      });
    }
  }
  
  module.exports = ExitOnErrorWebpackPlugin;
  