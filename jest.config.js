module.exports = {
    //preset: 'preset-env',
    verbose : true,
    transform: {},
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
      "node_modules/(?!(moment"
        // + "|react-navigation-tabs"
        // + "|react-native-splash-screen"
        // + "|react-native-screens"
        // + "|react-native-reanimated"
      + ")/)",
    ],
  }