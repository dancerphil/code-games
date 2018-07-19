Object.defineProperty(Object.prototype, 'findKey', {
  value: function findKey(func) {
    const object = this;
    for (const key in object) {
      const item = object[key];
      if (func(item)) {
        return key;
      }
    }
    return undefined;
  },
  writable: false,
});
