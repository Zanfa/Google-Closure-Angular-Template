// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.37.0.jar',

  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  autoWatch: true,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['spec/todos_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
