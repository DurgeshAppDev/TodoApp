const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro'); // Add this

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your existing config */
});

module.exports = withNativeWind(config, { input: './global.css' }); // Add this