// NOTE the file doesn't cover extend(true, ...)
import { extend } from 'jquery';

const testCases = [
  [],
  [{ a: 1 }],
  [{ a: 1 }, { b: 1 }],
  [{ a: 1 }, { b: 2 }],
  [{ a: 1 }, { a: 2 }],
  [{ a: 1 }, null, undefined],
  [{ a: 1 }, null, undefined, { b: 2 }, null],
];

describe('extend equals Object.assign', () => {
  test('extend returns a jquery object', () => {
    expect(typeof extend()).toBe('object');
    expect(JSON.stringify(extend())).toBe('{}');
    expect(JSON.stringify(extend({}))).toBe(undefined);
  });

  test('start with {}', () => {
    const objs = [];
    const results = [];
    const ans = [];
    for (let i = 0; i < testCases.length; i++) {
      const args = testCases[i];
      const obj = {};
      const result = extend(obj, ...args);
      results.push(JSON.parse(JSON.stringify(result) || '{}'));
      objs.push(obj);
      ans.push(Object.assign({}, ...args));
    }
    expect(objs).toEqual(ans);
    expect(results).toEqual(ans);
  });

  test('is not equal if object has prototype keys', () => {
    const Unicorn = () => {};
    Unicorn.prototype.rainbows = 'many';
    const unicorn = new Unicorn();
    unicorn.bar = 1;
    expect(extend({ foo: 1 }, unicorn)).not.toEqual(Object.assign({ foo: 1 }, unicorn));
  });
});
