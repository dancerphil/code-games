Object.defineProperty(Array, 'plus', {
  value: function plus(arr1, arr2) {
    const stack = [];
    const l1 = arr1.length;
    const l2 = arr2.length;
    for (let i = 0; i < l1 || i < l2; i++) {
      const n1 = arr1[l1 - i - 1] || 0;
      const n2 = arr2[l2 - i - 1] || 0;
      stack.push(n1 + n2);
    }
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] > 9) {
        const tmp = stack[i];
        stack[i] = tmp % 10;
        stack[i + 1] = (stack[i + 1] || 0) + Math.floor(tmp / 10);
      }
    }
    return stack.reverse();
  },
  writable: false,
});
