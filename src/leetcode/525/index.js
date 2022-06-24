const findMaxLength = (nums) => {
  const map = {
    0: [-1],
  };
  const pushMap = (sum, index) => {
    if (!map[sum]) {
      map[sum] = [];
    }
    map[sum].push(index);
  };
  nums.map(i => (i === 1 ? 1 : -1)).reduce((a, b, index) => {
    const sum = a + b;
    pushMap(sum, index);
    return sum;
  }, 0);
  let max = 0;
  Object.values(map).forEach((v) => {
    const l = v[v.length - 1] - v[0];
    if (l > max) max = l;
  });
  return max;
};

export default findMaxLength;
