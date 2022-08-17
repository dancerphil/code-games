import _ from 'lodash';

const massage = nums => _.last(nums.reduce(([a = 0, b = 0], n) => [b, Math.max(b, a + n)], [])) ?? 0;
