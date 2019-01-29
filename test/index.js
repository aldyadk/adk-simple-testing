const util = require("util");
const debug = util.debuglog("test");

const unit = require("./unit");

const lib = {};

lib.tests = unit;

lib.runTests = function() {
  let errors = [];
  let successes = 0;
  let counter = 0;
  const limit = lib.countTests();
  for (let testName in lib.tests) {
    if (lib.tests.hasOwnProperty(testName)) {
      (function() {
        let tmpTestName = testName;
        let testValue = lib.tests[testName];
        try {
          testValue(function() {
            //if it calls back without throwing, then it succeeded, so log it in green
            console.log("\x1b[32m%s\x1b[0m", tmpTestName);
            counter++;
            successes++;
            if (counter === limit) {
              lib.produceTestReport(limit, successes, errors);
            }
          });
        } catch (e) {
          //If it throwns, then it failed. Log it in red.
          errors.push({
            name: tmpTestName,
            error: e,
          });
          console.log("\x1b[31m%s\x1b[0m", tmpTestName);
          counter++;
          if (counter === limit) {
            lib.produceTestReport(limit, successes, errors);
          }
        }
      })();
    }
  }
};

lib.countTests = function() {
  let counter = 0;
  for (var testName in lib.tests) {
    if (lib.tests.hasOwnProperty(testName)) {
      counter++;
    }
  }
  return counter;
};

lib.produceTestReport = function(limit, successes, errors) {
  console.log("");
  console.log("--------------------BEGIN TEST REPORT--------------------");
  console.log("");
  console.log("Total Test: ", limit);
  console.log("Pass: ", successes);
  console.log("Fail: ", errors.length);
  console.log("");

  if (errors.length > 0) {
    debug("-------------------BEGIN ERROR DETAILS-------------------");
    debug("");
    errors.forEach(function(testError) {
      debug("\x1b[31m%s\x1b[0m", testError.name);
      debug(testError.error);
      debug("");
    });
    debug("");
    debug("--------------------END ERROR DETAILS--------------------");
  }
  console.log("");
  console.log("---------------------END TEST REPORT---------------------");

  process.exit(0);
};

lib.runTests();
