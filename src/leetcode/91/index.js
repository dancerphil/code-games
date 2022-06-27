/* eslint-disable no-fallthrough */

const numDecodings = s => {
    const map = {};

    const getValue = str => map[str] || 0;

    const setMap = (target, a, b) => {
        const x = getValue(target.slice(1));
        const y = getValue(target.slice(2));
        const ans = (a * x + b * y) % (10 ** 9 + 7);
        map[target] = ans;
        return ans;
    };

    const dealWith = target => {
        const firstToken = target.slice(0, 1);
        const secondToken = target.slice(1, 2);
        switch (firstToken) {
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
    map[''] = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        const target = s.slice(i);
        const result = dealWith(target);
        if (result === -1) {
            return 0;
        }
    }
    return map[s];
};

export default numDecodings;
