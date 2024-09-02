const m = Math.min;

const minCost = ([q, ...r]) => _.min(r.reduce(([a, b, c], [d, e, f]) => [m(b, c) + d, m(a, c) + e, m(a, b) + f], q));
