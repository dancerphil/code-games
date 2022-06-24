Object.defineProperty(Array.prototype, 'flatten', {
  value: function flatten() {
    const arr = this;
    let ans = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        ans = ans.concat(item);
      } else {
        ans.push(item);
      }
    });
    return ans;
  },
  writable: false,
});
