Object.defineProperty(Number.prototype, 'restrict', {
  value: function restrict() {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    if (Number.isNaN(this)) {
      return 0;
    }
    if (this < INT_MIN) {
      return INT_MIN;
    }
    if (this > INT_MAX) {
      return INT_MAX;
    }
    return this;
  },
  writable: false,
});
