const xorGame = nums => nums.reduce((a, b) => a ^ b, 0) === 0 || nums.length % 2 === 0;
