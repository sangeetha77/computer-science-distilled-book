const assert = require('assert');

const powerSet = require('./power-set');

describe('Algorithm - Power Set [Iterative]', function () {
  const testCases = [
    {
      input: ['A', 'B', 'C'],
      expected: [
        [],
        ['A'],
        ['B'],
        ['A', 'B'],
        ['C'],
        ['A', 'C'],
        ['B', 'C'],
        ['A', 'B', 'C']
      ]
    },
    {
      input: [1, 2, 3, 4],
      expected: [
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3],
        [4],
        [1, 4],
        [2, 4],
        [1, 2, 4],
        [3, 4],
        [1, 3, 4],
        [2, 3, 4],
        [1, 2, 3, 4]
      ]
    }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return the power set of: ${input}`, function () {
      const result = powerSet(input);
      const expectedLenght = Math.pow(2, input.length);

      assert.equal(result.length, expectedLenght, `should return: ${expectedLenght} combinations. Given: ${result.length}`);
      assert.deepEqual(result, expected, `should return: ${expected.join('\n')}.\nGiven: ${result.join('\n')}`);
    });
  });
});