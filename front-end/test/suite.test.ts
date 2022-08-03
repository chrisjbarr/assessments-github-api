/**
 * taken from: https://github.com/vitest-dev/vitest/blob/main/examples/basic/test/suite.test.ts
 */

describe('suite name', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it('bar', () => {
    expect(1 + 1).eq(2);
  });

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot();
  });
});
