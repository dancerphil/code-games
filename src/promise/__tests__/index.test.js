/* eslint-disable prefer-promise-reject-errors */
import {
  getAlreadyFulfilledPromise,
  getImmediatelyFulfilledPromise,
  getEventuallyFulfilledPromise,
  getAlreadyRejectedPromise,
  getImmediatelyRejectedPromise,
  getEventuallyRejectedPromise,
  exceptPromiseFulfilledOnce,
  exceptPromiseFulfilledWith,
  exceptPromiseRejectedOnce,
  exceptPromiseRejectedWith,
  Promise,
} from './utils';

const dummyObject = { dummy: 'dummy' };
const dummyError = new Error('dummy');

const createSemiDone = (done, times) => {
  let calledTimes = 0;
  return () => {
    calledTimes++;
    if (calledTimes === times) {
      done();
    }
  };
};

describe('Promise basic apis', () => {
  test('Promise api shape', () => {
    expect(typeof Promise).toBe('function');
    expect(typeof Promise.all).toBe('function');
    expect(typeof Promise.allSettled).toBe('function');
    // waiting for node
    // expect(typeof Promise.any).toBe('function');
    expect(typeof Promise.race).toBe('function');
    expect(typeof Promise.reject).toBe('function');
    expect(typeof Promise.resolve).toBe('function');
    expect(typeof Promise.prototype.then).toBe('function');
    expect(typeof Promise.prototype.catch).toBe('function');
    expect(typeof Promise.prototype.finally).toBe('function');
  });

  test('Promise constructor shape', () => {
    const fnExpectToThrow = () => new Promise();
    expect(fnExpectToThrow).toThrow(TypeError);
    expect(fnExpectToThrow).toThrow('Promise resolver undefined is not a function');

    const promise = new Promise(() => {
    });
    expect(promise instanceof Promise).toBe(true);
    expect(typeof promise.then).toBe('function');
    expect(typeof promise.catch).toBe('function');
    expect(typeof promise.finally).toBe('function');
  });
});

describe('promise fulfill and reject only once', () => {
  test('already-fulfilled', (done) => {
    const promise = getAlreadyFulfilledPromise(0);

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('immediately-fulfilled', (done) => {
    const [promise, resolve] = getImmediatelyFulfilledPromise(0);

    exceptPromiseFulfilledOnce(promise, expect, done);

    resolve();
  });

  test('eventually-fulfilled', (done) => {
    const promise = getEventuallyFulfilledPromise(0);

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('already-rejected', (done) => {
    const promise = getAlreadyRejectedPromise(-1);

    exceptPromiseRejectedOnce(promise, expect, done);
  });

  test('immediately-rejected', (done) => {
    const [promise, resolve] = getImmediatelyRejectedPromise(-1);

    exceptPromiseRejectedOnce(promise, expect, done);

    resolve();
  });

  test('eventually-rejected', (done) => {
    const promise = getEventuallyRejectedPromise(-1);

    exceptPromiseRejectedOnce(promise, expect, done);
  });

  test('Promise immediately fulfill then reject', (done) => {
    const promise = new Promise((resolve, reject) => {
      resolve(0);
      reject(-1);
    });

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('Promise delayed fulfill then reject', (done) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(0);
        reject(-1);
      }, 50);
    });

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('Promise immediately fulfill then delayed reject', (done) => {
    const promise = new Promise((resolve, reject) => {
      resolve(0);

      setTimeout(() => {
        reject(-1);
      }, 50);
    });

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('Promise immediately reject then fulfill', (done) => {
    const promise = new Promise((resolve, reject) => {
      reject(-1);
      resolve(0);
    });

    exceptPromiseRejectedOnce(promise, expect, done);
  });

  test('Promise delayed reject then fulfill', (done) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(-1);
        resolve(0);
      }, 50);
    });

    exceptPromiseRejectedOnce(promise, expect, done);
  });

  test('Promise immediately reject then delayed fulfill', (done) => {
    const promise = new Promise((resolve, reject) => {
      reject(-1);

      setTimeout(() => {
        resolve(0);
      }, 50);
    });

    exceptPromiseRejectedOnce(promise, expect, done);
  });
});

describe('promise.then accepts optional `onfulfulled` and `onrejected`', () => {
  test('pass through when `onfulfilled` is undefined', (done) => {
    const promise = Promise.resolve(0).then();

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('pass through when `onfulfilled` is an object', (done) => {
    const promise = Promise.resolve(0).then({});

    exceptPromiseFulfilledOnce(promise, expect, done);
  });

  test('throw through when `onrejected` is undefined', (done) => {
    const promise = Promise.reject(-1).then();

    exceptPromiseRejectedOnce(promise, expect, done);
  });

  test('throw through when `onrejected` is an object', (done) => {
    const promise = Promise.reject(-1).then({}, {});
    exceptPromiseRejectedOnce(promise, expect, done);
  });
});

describe('if `onfulfilled` is a function', () => {
  describe('`onfulfilled` must be called after `promise` is fulfilled, with value as its first argument', () => {
    test('already-fulfilled', (done) => {
      const promise = getAlreadyFulfilledPromise(dummyObject);

      exceptPromiseFulfilledWith(promise, dummyObject, expect, done);
    });

    test('immediately-fulfilled', (done) => {
      const [promise, resolve] = getImmediatelyFulfilledPromise(dummyObject);

      exceptPromiseFulfilledWith(promise, dummyObject, expect, done);

      resolve();
    });

    test('eventually-fulfilled', (done) => {
      const promise = getEventuallyFulfilledPromise(dummyObject);

      exceptPromiseFulfilledWith(promise, dummyObject, expect, done);
    });
  });

  describe('`onfulfilled` must not be called until `promise` is fulfilled', () => {
    test('fulfilled after a delay', (done) => {
      let isFulfilled = false;

      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(dummyObject);
          isFulfilled = true;
        }, 50);
      });

      promise.then(
        () => {
          expect(isFulfilled).toBe(true);
          done();
        },
      );
    });

    test('never fulfilled', (done) => {
      let isFulfilled = false;

      const promise = new Promise(() => {
        // do nothing
      });

      promise.then(
        () => {
          // never called
          isFulfilled = true;
          done();
        },
      );

      setTimeout(() => {
        expect(isFulfilled).toBe(false);
        done();
      }, 150);
    });
  });

  describe('`onfulfilled` must not be called more than once', () => {
    test('already-fulfilled', (done) => {
      let timesCalled = 0;

      Promise.resolve(dummyObject).then(
        () => {
          timesCalled++;
          expect(timesCalled).toBe(1);
          done();
        },
      );
    });

    // TODO find it a place
    // test('already-fulfilled then expect sync', (done) => {
    //   let timesCalled = 0;
    //   let deferredResolve;
    //
    //   const promise = new Promise((resolve) => {
    //     deferredResolve = resolve;
    //   });
    //
    //   deferredResolve();
    //   deferredResolve();
    //
    //   setTimeout(() => {
    //     promise.then(
    //       () => {
    //         timesCalled++;
    //       },
    //     );
    //     expect(timesCalled).toBe(0);
    //     done();
    //   }, 150);
    // });

    test('immediate fulfill twice then fulfill twice delayed', (done) => {
      let timesCalled = 0;
      let deferredResolve;

      const promise = new Promise((resolve) => {
        deferredResolve = resolve;
      });

      promise.then(
        () => {
          timesCalled++;
          expect(timesCalled).toBe(1);
        },
      );

      deferredResolve();
      deferredResolve();

      setTimeout(() => {
        deferredResolve();
        deferredResolve();
      }, 50);

      setTimeout(() => {
        expect(timesCalled).toBe(1);
        done();
      }, 150);
    });


    test('multiple `then` called in separate time', (done) => {
      const timesCalled = [0, 0, 0];
      let deferredResolve;

      const promise = new Promise((resolve) => {
        deferredResolve = resolve;
      });

      promise.then(
        () => {
          timesCalled[0]++;
          expect(timesCalled[0]).toBe(1);
        },
      );
      setTimeout(() => {
        promise.then(
          () => {
            timesCalled[1]++;
            expect(timesCalled[1]).toBe(1);
          },
        );
      }, 50);

      setTimeout(() => {
        promise.then(
          () => {
            timesCalled[2]++;
            expect(timesCalled[2]).toBe(1);
          },
        );
      }, 100);

      setTimeout(() => {
        deferredResolve();
      }, 50);

      setTimeout(() => {
        expect(timesCalled).toEqual([1, 1, 1]);
        done();
      }, 150);
    });


    test('when `then` is interleaved with fulfill', (done) => {
      const timesCalled = [0, 0];
      let deferredResolve;

      const promise = new Promise((resolve) => {
        deferredResolve = resolve;
      });

      promise.then(
        () => {
          timesCalled[0]++;
          expect(timesCalled[0]).toBe(1);
        },
      );

      deferredResolve(dummyObject);

      promise.then(
        () => {
          timesCalled[1]++;
          expect(timesCalled[1]).toBe(1);
          done();
        },
      );
    });
  });
});

describe('if `onrejected` is a function', () => {
  describe('`onrejected` must be called after `promise` is rejected, with reason as its first argument', () => {
    test('already-rejected', (done) => {
      const promise = getAlreadyRejectedPromise(dummyError);

      exceptPromiseRejectedWith(promise, dummyError, expect, done);
    });

    test('immediately-rejected', (done) => {
      const [promise, reject] = getImmediatelyRejectedPromise(dummyError);

      exceptPromiseRejectedWith(promise, dummyError, expect, done);

      reject();
    });

    test('eventually-rejected', (done) => {
      const promise = getEventuallyRejectedPromise(dummyError);

      exceptPromiseRejectedWith(promise, dummyError, expect, done);
    });
  });

  describe('`onrejected` must not be called until `promise` is rejected', () => {
    test('rejected after a delay', (done) => {
      let isRejected = false;

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(dummyError);
          isRejected = true;
        }, 50);
      });

      promise.then(
        null,
        () => {
          expect(isRejected).toBe(true);
          done();
        },
      );
    });

    test('never rejected', (done) => {
      let isRejected = false;

      const promise = new Promise(() => {
        // do nothing
      });

      promise.then(
        null,
        () => {
          // never called
          isRejected = true;
          done();
        },
      );

      setTimeout(() => {
        expect(isRejected).toBe(false);
        done();
      }, 150);
    });
  });

  describe('`onrejected` must not be called more than once', () => {
    test('already-rejected', (done) => {
      let timesCalled = 0;

      Promise.reject(dummyError).then(
        null,
        () => {
          timesCalled++;
          expect(timesCalled).toBe(1);
          done();
        },
      );
    });

    // TODO Node 会 throw
    // test('already-rejected-should-throw', (done) => {
    //   let timesCalled = 0;
    //   let deferredReject;
    //
    //   const promise = new Promise((resolve, reject) => {
    //     deferredReject = reject;
    //   });
    //
    //   deferredReject();
    //   deferredReject();
    //
    //   setTimeout(() => {
    //     promise.then(
    //       null,
    //       () => {
    //         timesCalled++;
    //         expect(timesCalled).toBe(1);
    //       },
    //     );
    //   }, 50);
    //
    //   setTimeout(() => {
    //     expect(timesCalled).toBe(1);
    //     done();
    //   }, 150);
    // });

    test('immediate reject twice then reject twice delayed', (done) => {
      let timesCalled = 0;
      let deferredReject;

      const promise = new Promise((resolve, reject) => {
        deferredReject = reject;
      });

      promise.then(
        null,
        () => {
          timesCalled++;
          expect(timesCalled).toBe(1);
        },
      );

      deferredReject();
      deferredReject();

      setTimeout(() => {
        deferredReject();
        deferredReject();
      }, 50);

      setTimeout(() => {
        expect(timesCalled).toBe(1);
        done();
      }, 150);
    });


    test('multiple `then` called in separate time', (done) => {
      const timesCalled = [0, 0, 0];
      let deferredReject;

      const promise = new Promise((resolve, reject) => {
        deferredReject = reject;
      });

      promise.then(
        null,
        () => {
          timesCalled[0]++;
          expect(timesCalled[0]).toBe(1);
        },
      );
      setTimeout(() => {
        promise.then(
          null,
          () => {
            timesCalled[1]++;
            expect(timesCalled[1]).toBe(1);
          },
        );
      }, 50);

      setTimeout(() => {
        promise.then(
          null,
          () => {
            timesCalled[2]++;
            expect(timesCalled[2]).toBe(1);
          },
        );
      }, 100);

      setTimeout(() => {
        deferredReject();
      }, 50);

      setTimeout(() => {
        expect(timesCalled).toEqual([1, 1, 1]);
        done();
      }, 150);
    });

    test('when `then` is interleaved with reject', (done) => {
      const timesCalled = [0, 0];
      let deferredReject;

      const promise = new Promise((resolve, reject) => {
        deferredReject = reject;
      });

      promise.then(
        null,
        () => {
          timesCalled[0]++;
          expect(timesCalled[0]).toBe(1);
        },
      );

      deferredReject(dummyError);

      promise.then(
        null,
        () => {
          timesCalled[1]++;
          expect(timesCalled[1]).toBe(1);
          done();
        },
      );
    });
  });
});

describe('`onfulfilled` and `onrejected` call stack', () => {
  describe('`then` returns before the promise becomes fulfilled or rejected', () => {
    test('already-fulfilled', (done) => {
      const promise = getAlreadyFulfilledPromise();

      let thenHasReturned = false;
      promise.then(
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      thenHasReturned = true;
    });

    test('immediately-fulfilled', (done) => {
      const [promise, resolve] = getImmediatelyFulfilledPromise();

      let thenHasReturned = false;
      promise.then(
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      resolve();
      thenHasReturned = true;
    });

    test('eventually-fulfilled', (done) => {
      const promise = getEventuallyFulfilledPromise();

      let thenHasReturned = false;
      promise.then(
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      thenHasReturned = true;
    });

    test('already-rejected', (done) => {
      const promise = getAlreadyRejectedPromise();

      let thenHasReturned = false;
      promise.then(
        null,
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      thenHasReturned = true;
    });

    test('immediately-rejected', (done) => {
      const [promise, reject] = getImmediatelyRejectedPromise();

      let thenHasReturned = false;
      promise.then(
        null,
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      reject();
      thenHasReturned = true;
    });

    test('eventually-rejected', (done) => {
      const promise = getEventuallyRejectedPromise();

      let thenHasReturned = false;
      promise.then(
        null,
        () => {
          expect(thenHasReturned).toBe(true);
          done();
        },
      );
      thenHasReturned = true;
    });
  });

  describe('`onfulfilled` call stack', () => {
    test('when `onfulfilled` is added immediately before the promise is fulfilled', () => {
      const [promise, resolve] = getImmediatelyFulfilledPromise();
      let onFulfilledCalled = false;

      promise.then(() => {
        onFulfilledCalled = true;
      });

      resolve();

      expect(onFulfilledCalled).toBe(false);
    });

    test('when `onfulfilled` is added immediately after the promise is fulfilled', () => {
      const [promise, resolve] = getImmediatelyFulfilledPromise();
      let onFulfilledCalled = false;

      resolve();

      promise.then(() => {
        onFulfilledCalled = true;
      });

      expect(onFulfilledCalled).toBe(false);
    });

    test('when one `onfulfilled` is added inside another `onfulfilled`', (done) => {
      const promise = Promise.resolve();
      let firstOnFulfilledFinished = false;

      promise.then(() => {
        promise.then(() => {
          expect(firstOnFulfilledFinished).toBe(true);
          done();
        });
        firstOnFulfilledFinished = true;
      });
    });

    test('when `onfulfilled` is added inside an `onrejected`', (done) => {
      const promise = Promise.reject();
      const promise2 = Promise.resolve();
      let firstOnRejectedFinished = false;

      promise.then(null, () => {
        promise2.then(() => {
          expect(firstOnRejectedFinished).toBe(true);
          done();
        });
        firstOnRejectedFinished = true;
      });
    });

    test('when the promise is fulfilled asynchronously', (done) => {
      const [promise, resolve] = getImmediatelyFulfilledPromise();
      let firstStackFinished = false;

      setTimeout(() => {
        resolve();
        firstStackFinished = true;
      }, 0);

      promise.then(() => {
        expect(firstStackFinished).toBe(true);
        done();
      });
    });
  });

  describe('onrejected call stack', () => {
    test('when `onrejected` is added immediately before the promise is rejected', () => {
      const [promise, reject] = getImmediatelyRejectedPromise();
      let onRejectedCalled = false;

      promise.then(
        null,
        () => {
          onRejectedCalled = true;
        },
      );

      reject();

      expect(onRejectedCalled).toBe(false);
    });

    test('when `onrejected` is added immediately after the promise is rejected', () => {
      const [promise, reject] = getImmediatelyRejectedPromise();
      let onRejectedCalled = false;

      reject();

      promise.then(
        null,
        () => {
          onRejectedCalled = true;
        },
      );

      expect(onRejectedCalled).toBe(false);
    });

    test('when `onrejected` is added inside an `onfulfilled`', (done) => {
      const promise = Promise.resolve();
      const promise2 = Promise.reject();
      let firstOnFulfilledFinished = false;

      promise.then(() => {
        promise2.then(
          null,
          () => {
            expect(firstOnFulfilledFinished).toBe(true);
            done();
          },
        );
        firstOnFulfilledFinished = true;
      });
    });

    test('when one `onrejected` is added inside another `onrejected`', (done) => {
      const promise = Promise.reject();
      let firstOnRejectedFinished = false;

      promise.then(
        null,
        () => {
          promise.then(
            null,
            () => {
              expect(firstOnRejectedFinished).toBe(true);
              done();
            },
          );
          firstOnRejectedFinished = true;
        },
      );
    });

    test('when the promise is rejected asynchronously', (done) => {
      const [promise, reject] = getImmediatelyRejectedPromise();
      let firstStackFinished = false;

      setTimeout(() => {
        reject();
        firstStackFinished = true;
      }, 0);

      promise.then(
        null,
        () => {
          expect(firstStackFinished).toBe(true);
          done();
        },
      );
    });
  });
});

describe('`onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value).', () => {
  test('fulfilled', (done) => {
    Promise.resolve().then(() => {
      expect(this).toBe(undefined);
      done();
    });
  });

  test('rejected', (done) => {
    Promise.reject().then(
      null,
      () => {
        expect(this).toBe(undefined);
        done();
      },
    );
  });
});

// TODO test three cases

describe('`then` may be called multiple times on the same promise.', () => {
  describe('when `promise` is fulfilled, all `onfulfilled` handlers are called in the original order.', () => {
    test('already-fulfilled', (done) => {
      const semiDone = createSemiDone(done, 6);

      const promise = Promise.resolve(dummyObject);
      const order = [];

      const spy = jest.fn();
      const handler0 = jest.fn();

      const handlerInside = () => {
        order.push(4);
        return 4;
      };

      const handler1 = () => {
        order.push(1);
        return 1;
      };

      const handler2 = () => {
        order.push(2);
        const promiseThenInside = promise.then(handlerInside, spy);
        promiseThenInside.then((result) => {
          expect(result).toBe(4);
          semiDone();
        });

        promise.then(() => {
          expect(order).toEqual([1, 2, 3, 4]);
          semiDone();
        });

        return 2;
      };

      const handler3 = () => {
        order.push(3);
        // eslint-disable-next-line no-throw-literal
        throw 3;
      };

      promise.then(handler0, spy);

      const promiseThen1 = promise.then(handler1, spy);
      const promiseThen2 = promise.then(handler2, spy);
      const promiseThen3 = promise.then(handler3, spy);

      promiseThen1.then((result) => {
        expect(result).toBe(1);
        semiDone();
      });

      promiseThen2.then((result) => {
        expect(result).toBe(2);
        semiDone();
      });

      promiseThen3.then(null, (reason) => {
        expect(reason).toBe(3);
        semiDone();
      });

      promise.then(() => {
        expect(handler0).toBeCalledWith(dummyObject);
        expect(spy).not.toBeCalled();
        expect(order).toEqual([1, 2, 3]);
        semiDone();
      });
    });
  });
});

describe('often seen cases', () => {
  test('microtask', (done) => {
    const stack = [];
    new Promise((resolve) => {
      stack.push(1);
      resolve();
      stack.push(2);
    }).then(() => {
      stack.push(3);
    });
    stack.push(4);
    setTimeout(() => {
      stack.push(5);
    }, 0);

    setTimeout(() => {
      expect(stack).toEqual([1, 2, 4, 3, 5]);
      done();
    }, 50);
  });
});
// TODO deal with SyntaxError
// TODO promise.finally(() => { throw new Error('') })
