export default (prices) => {
  let ans = 0;
  let diff = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < min) {
      min = price;
    }
    diff = price - min;
    if (diff > ans) {
      ans = diff;
    }
  }
  return ans;
};
