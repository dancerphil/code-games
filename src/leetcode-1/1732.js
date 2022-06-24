// eslint-disable-next-line no-return-assign
const largestAltitude = gain => gain.reduce(([s, max], d) => [s += d, max > s ? max : s], [0, 0])[1];
