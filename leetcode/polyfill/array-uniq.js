Object.defineProperty(Array.prototype, 'uniq', {
  value: function uniq() {
    const arr = this;
    const set = new Set(arr);
    return [...set];
  },
  writable: false,
});
