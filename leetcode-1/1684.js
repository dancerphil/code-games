import _ from 'lodash';

const countConsistentStrings = (allowed, words) => words.filter(w => _.uniq(w).every(c => allowed.includes(c))).length;
