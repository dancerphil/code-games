/* eslint-disable no-fallthrough */

const numDecodings = (s) => {
  let p1 = 1;
  let p2 = 1;

  const getValue = i => (i === 1 ? p1 : p2);

  const setMap = (target, a, b) => {
    const x = getValue(1);
    const y = getValue(2);
    const ans = (a * x + b * y) % (10 ** 9 + 7);
    p2 = p1;
    p1 = ans;
    return ans;
  };

  const dealWith = (target) => {
    const firstToken = target.slice(0, 1);
    const secondToken = target.slice(1, 2);
    switch (firstToken) {
      case '*': {
        switch (secondToken) {
          case '':
            return setMap(target, 9, 0);
          case '*':
            return setMap(target, 9, 15);
          case '0':
            return setMap(target, 0, 2);
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
            return setMap(target, 9, 2);
          default:
            return setMap(target, 9, 1);
        }
      }
      case '0': {
        switch (secondToken) {
          case '0':
            return -1;
          default:
            return setMap(target, 0, 0);
        }
      }
      case '1':
      case '2': {
        switch (secondToken) {
          case '*':
            return setMap(target, 1, firstToken === '1' ? 9 : 6);
          case '':
          case '0':
            return setMap(target, 0, 1);
          default: {
            const num = Number(firstToken + secondToken);
            if (num <= 26) {
              return setMap(target, 1, 1);
            }
            return setMap(target, 1, 0);
          }
        }
      }
      default:
        return setMap(target, 1, 0);
    }
  };

  if (s.startsWith('0')) {
    return 0;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    const target = s.slice(i);
    const result = dealWith(target);
    if (result === -1) {
      return 0;
    }
  }
  return p1;
};

export default numDecodings;
