exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './features' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './js/steps.js' // accepts a glob
    ]
  }
};