import _ from 'lodash';

const checkIfPangram = sentence => _.uniq(sentence).length === 26;
