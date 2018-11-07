import { when, Deferred } from 'jquery';

const useAns = () => {
  const ans = {};
  const setWhen = (...args) => { ans.when = args; };
  const setPromise = (args) => { ans.promise = args; };
  return [ans, setWhen, setPromise];
};

const getAns = async (args) => {
  const [ans, setWhen, setPromise] = useAns();
  when(...args).done(setWhen);
  await Promise.all(args).then(setPromise);
  return ans;
};

describe('when equals Promise.all', () => {
  test('extend returns a jquery object', () => {
    expect(typeof when()).toBe('object');
    expect(JSON.stringify(when())).toBe('{}');
  });

  test('plain object async', () => {
    const [ans, setWhen, setPromise] = useAns();
    when({ a: 0 }).done(setWhen);
    // this cannot be expected
    Promise.all([{ a: 0 }]).then(setPromise);

    expect(ans.when).not.toEqual(ans.promise);
  });

  test('plain object with then', () => {
    const [ans, setWhen, setPromise] = useAns();
    when({ a: 1 }).done(setWhen);
    Promise.all([{ a: 1 }]).then(setPromise).then(() => {
      expect(ans.when).toEqual(ans.promise);
    });
  });

  test('plain object', async () => {
    const testCases = [
      [],
      [{ a: 1 }],
      [{ a: 1 }, { b: 2 }],
    ];
    const result = await Promise.all(testCases.map(testCase => getAns(testCase)));
    result.forEach((ans) => {
      expect(ans.when).toEqual(ans.promise);
      expect(ans.when).toMatchSnapshot();
    });
  });

  test('Deferred', async () => {
    const a = Deferred();
    const b = Deferred();
    const c = Deferred();
    const testCases = [
      [a],
      [b, c],
    ];
    a.resolve({ a: 1 });
    b.resolve({ b: 1 });
    c.resolve({ c: 1 });
    const result = await Promise.all(testCases.map(testCase => getAns(testCase)));
    result.forEach((ans) => {
      expect(ans.when).toEqual(ans.promise);
      expect(ans.when).toMatchSnapshot();
    });
  });

  // TODO
  // test('Deferred reject', () => {
  // });
});
