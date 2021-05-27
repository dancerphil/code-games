import _ from 'lodash';

const maximumWealth = accounts => Math.max(...accounts.map(_.sum));
