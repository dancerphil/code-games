const isPowerOfFour = n => n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
