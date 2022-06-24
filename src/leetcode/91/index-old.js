const map = {};

const getValue = str => map[str] || 0;

const numDecodings = (s) => {
  if (s.startsWith('0')) {
    return 0;
  }
  map[s.slice(-1)] = 1;
  map['0'] = 0;
  map[''] = 1;
  for (let i = s.length - 2; i >= 0; i--) {
    const target = s.slice(i);
    const startsWith = Number(target.slice(0, 2));
    if (startsWith === 0) {
      return 0;
    }
    if (startsWith === 10 || startsWith === 20) {
      map[target] = getValue(target.slice(2));
    } else if (startsWith < 10) {
      // continue
    } else if (startsWith <= 26) {
      map[target] = getValue(target.slice(1)) + getValue(target.slice(2));
    } else {
      map[target] = getValue(target.slice(1));
    }
  }
  return map[s];
};

export default numDecodings;
