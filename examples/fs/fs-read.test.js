const assert = require('assert');
const fs = require('fs');
// Create a group of tests about Arrays
describe('fs', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('#readFile()', function() {
    // A string explanation of what we're testing
    it('should read file without error', function(done){
      // Our actual test: -1 should equal indexOf(...)
      fs.readFile('fs-test-write.txt','utf8',(err,data) => {
          if (err) { return done(err); }
          return done()
      });
    });
  });
});
