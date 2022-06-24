Object.defineProperty(Array.prototype, 'toCount', {
  value: function toCount() {
    const arr = this;
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (count[item]) {
        count[item]++;
      } else {
        count[item] = 1;
      }
    }
    return count;
  },
  writable: false,
});
