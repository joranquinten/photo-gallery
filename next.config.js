require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  async exportPathMap(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
};
