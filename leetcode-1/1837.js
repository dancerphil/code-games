import _ from 'lodash';

const sumBase = (n, k) => _.sum(n.toString(k).split('').map(Number));
