const percentageLetter = (s, letter) => Math.floor(Array.from(s).filter(i => i === letter).length / s.length * 100);
