/**
 * taken from: https://github.com/vitest-dev/vitest/blob/main/examples/basic/test/suite.test.ts
 */

describe('intentionally fail this test', () => {
  it('should fail and display as a failure in github', () => {
    assert.equal('should fail', 'will fail');
  });
});
