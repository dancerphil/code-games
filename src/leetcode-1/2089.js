import _ from 'lodash';

const targetIndices = (nums, target) => _.sortBy(nums).map((n, i) => (n === target ? i : -1)).filter(i => i >= 0);
