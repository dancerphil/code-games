const largestAltitude = gain => gain.reduce(([s, max], d) => [s += d, max > s ? max : s], [0, 0])[1];
