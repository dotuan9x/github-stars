const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    // Further custom configuration here
    config.resolve.alias['Src'] = path.join(__dirname);
    config.resolve.alias['Config'] = path.join(__dirname, 'config');
    config.resolve.alias['Components'] = path.join(__dirname, 'components');
    config.resolve.alias['Services'] = path.join(__dirname, 'services');
    config.resolve.alias['Assets'] = path.join(__dirname, 'assets');
    config.resolve.alias['Utils'] = path.join(__dirname, 'utils');

    return config;
  }
}
