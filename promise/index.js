
// event loop hook
const nextTick = (process && process.nextTick) || setTimeout;

// status symbols
const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');

// private state symbols
const STATUS = Symbol('STATUS');
const VALUE = Symbol('VALUE');
const REASON = Symbol('REASON');
const PENDING_ON_FULFILLED_QUEUE = Symbol('PENDING_ON_FULFILLED_QUEUE');
const PENDING_ON_REJECTED_QUEUE = Symbol('PENDING_ON_REJECTED_QUEUE');

// utils
const passThrough = v => v;
const throwThrough = (r) => { throw r; };

class Promise {
  /* type Resolver = (resolve, reject) => void */
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError(`Promise resolver ${resolver} is not a function`);
    }
    this[STATUS] = PENDING;
    this[VALUE] = undefined;
    this[REASON] = undefined;
    this[PENDING_ON_FULFILLED_QUEUE] = [];
    this[PENDING_ON_REJECTED_QUEUE] = [];

    try {
      resolver(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  static all() { /* TODO */ }

  static allSettled() { /* TODO */ }

  static any() { /* TODO */ }

  static race() { /* TODO */ }

  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason));
  }

  static resolve(value) {
    return new Promise(resolve => resolve(value));
  }

  then(onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : passThrough;
    onrejected = typeof onrejected === 'function' ? onrejected : throwThrough;

    return new Promise((resolve, reject) => {
      const execute = () => {
        try {
          switch (this[STATUS]) {
            case FULFILLED: {
              resolve(onfulfilled(this[VALUE]));
              break;
            }
            case REJECTED: {
              resolve(onrejected(this[REASON]));
              break;
            }
            case PENDING: {
              this[PENDING_ON_FULFILLED_QUEUE].push(() => {
                resolve(onfulfilled(this[VALUE]));
              });
              this[PENDING_ON_REJECTED_QUEUE].push(() => {
                resolve(onrejected(this[REASON]));
              });
              break;
            }
            default: {
              // 未定义错误
              throw new TypeError(`Received undefined status ${this[STATUS]}`);
            }
          }
        } catch (e) {
          reject(e);
        }
      };
      nextTick(execute);
    });
  }

  catch(onrejected) {
    return this.then(undefined, onrejected);
  }

  finally(onfinally) {
    if (typeof onfinally === 'function') {
      // TODO catch error throw from onfinally and return Promise.reject(e)
      onfinally = () => onfinally();
      this.then(onfinally, onfinally);
    }
    return this;
  }

  // private field

  /* type Resolve = (value) => void */
  /* private */ resolve(value) {
    nextTick(() => {
      // 非 PENDING 不能更改
      if (this[STATUS] !== PENDING) {
        return;
      }
      if (value instanceof Promise) {
        value[PENDING_ON_FULFILLED_QUEUE].push(this.resolve);
      } else {
        this[STATUS] = FULFILLED;
        this[VALUE] = value;
        this[PENDING_ON_FULFILLED_QUEUE].forEach(onFulFilled => onFulFilled(value));
      }
    });
  }

  /* type Reject = (reason) => void */
  /* private */ reject(reason) {
    nextTick(() => {
      // 非 PENDING 不能更改
      if (this[STATUS] !== PENDING) {
        return;
      }
      this[STATUS] = REJECTED;
      this[REASON] = reason;
      this[PENDING_ON_REJECTED_QUEUE].forEach(onRejected => onRejected(reason));
    });
  }
}

export default Promise;
