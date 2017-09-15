exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    framework: 'jasmine2',
    multiCapabilities: [{
        browserName: 'chrome'
    },
    {
        browserName: 'firefox'
    }],
    onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
      );

      jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'Reports/jasmine-reporters',
            screenshotsFolder: 'screenshots',
            takeScreenshots: true,
            })
        );
     }
};