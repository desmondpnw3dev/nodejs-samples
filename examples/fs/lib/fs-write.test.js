const assert = require('assert');
const fs = require('fs');
// Create a group of tests about Arrays
describe('fs', function() {
  // Within our fs group, Create a group of tests for writeFile
  describe('#writeFile()', function() {
    // A string explanation of what we're testing
    it('should write file without error', (done) =>{
      fs.writeFile('./fs-test-write.txt','Testing the write to file!',(err,data) => {
          if (err) { return done(err); }
          return done()
      });
    });
  });
});
