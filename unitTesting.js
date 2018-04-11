// basic assertion
function assertEqual(actual, expected, testName) {
  if(actual === expected){
    console.log(`Passed: ${testName}`);
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

// array assertion
function assertArraysEqual(actual, expected, testName) {
  var equals = true;
  for(var i = 0; i < actual.length; i++){
    if(actual[i] !== expected[i]){
      equals = false;
    }
  }
  if(equals === true){
    console.log(`Passed: ${testName}`);
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

//object assertion
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log(`Passed [${testName}]`);
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}