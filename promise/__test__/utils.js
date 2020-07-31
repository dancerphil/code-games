import Promise from '..';
// const Promise = global.Promise; // eslint-disable-line prefer-destructuring

export const getAlreadyFulfilledPromise = value => Promise.resolve(value);

export const getImmediatelyFulfilledPromise = (value) => {
  let deferredResolve;
  const promise = new Promise((resolve) => {
    deferredResolve = () => resolve(value);
  });
  return [promise, deferredResolve];
};

export const getEventuallyFulfilledPromise = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 50);
  });
  return promise;
};

export const getAlreadyRejectedPromise = value => Promise.reject(value);

export const getImmediatelyRejectedPromise = (reason) => {
  let deferredReject;
  const promise = new Promise((resolve, reject) => {
    deferredReject = () => reject(reason);
  });
  return [promise, deferredReject];
};

export const getEventuallyRejectedPromise = (reason) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason);
    }, 50);
  });
  return promise;
};

export const exceptPromiseFulfilledOnce = (promise, expect, done) => {
  expect.assertions(1);

  let called = false;
  promise.then(
    (value) => {
      called = true;
      expect(value).toBe(0);
    },
    () => {
      // never called
      expect(called).toBe(false);
      expect(called).toBe(true);
      done();
    },
  );
  setTimeout(done, 100);
};

export const exceptPromiseRejectedOnce = (promise, expect, done) => {
  expect.assertions(1);

  let called = false;
  promise.then(
    () => {
      // never called
      expect(called).toBe(false);
      expect(called).toBe(true);
      done();
    },
    (reason) => {
      called = true;
      expect(reason).toBe(-1);
    },
  );
  setTimeout(done, 100);
};

export const exceptPromiseFulfilledWith = (promise, value, expect, done) => {
  expect.assertions(1);

  let called = false;
  promise.then(
    (v) => {
      called = true;
      expect(v).toBe(value);
    },
    () => {
      // not called
      expect(called).toBe(false);
      expect(called).toBe(true);
      done();
    },
  );
  setTimeout(done, 100);
};

export const exceptPromiseRejectedWith = (promise, reason, expect, done) => {
  expect.assertions(1);

  let called = false;
  promise.then(
    () => {
      // not called
      expect(called).toBe(false);
      expect(called).toBe(true);
      done();
    },
    (r) => {
      called = true;
      expect(r).toBe(reason);
    },
  );
  setTimeout(done, 100);
};

export { Promise };
