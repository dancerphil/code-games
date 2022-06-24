Object.defineProperty(String.prototype, 'reverse', {
  value: function reverse() {
    return Array.from(this).reverse().join('');
  },
  writable: false,
});
