const countBits = n => Array.from({length: n + 1}).reduce((a, _, i) => [...a, i & 1 + a[Math.floor(i / 2)]], []);
