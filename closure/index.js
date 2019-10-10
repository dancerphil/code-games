const createClosure = () => {
  let state;
  const listeners = [];

  const getValue = () => state;

  const setValue = (value) => {
    state = value;
    listeners.forEach((listener) => {
      listener(value);
    });
  };

  const subscribe = (callback) => {
    if (typeof callback !== 'function') {
      throw new Error('subscribe can only be called with function');
    }
    listeners.push(callback);
    return () => {
      const index = listeners.findIndex(item => item === callback);
      listeners.splice(index, 1);
    };
  };

  return { getValue, setValue, subscribe };
};

export default createClosure;
