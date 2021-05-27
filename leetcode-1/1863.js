const subsetXORSum = nums => nums.reduce((a, b) => a | b) * 2 ** (nums.length - 1);
