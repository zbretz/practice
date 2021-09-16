// import mergeRanges from '../mergeRanges.js'
const mergeRanges = require('../mergeRanges.js')

var assert = require('assert');
describe('mergeRanges', function() {


    it('should be a function', function() {
      assert.equal(typeof mergeRanges, 'function');
    });

    it('should return correct result', function() {

      const result = mergeRanges([
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
      ])

      const expected = [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 }
      ]

      assert.equal(result.length, 3);
    });
});