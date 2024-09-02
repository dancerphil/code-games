const countAsterisks = s => Array.from(s).reduce(([c, f], i) => [c + (f && i === '*'), f ^ (i === '|')], [0, 1])[0];
