const arraySign = nums => nums.reduce((a, n) => a * (n === 0 ? 0 : (n > 0 ? 1 : -1)), 1);
