import {dealWith, toString, init} from './runtime';

// iterate once
export default ip => {
    init();
    for (let i = 0; i < ip.length; i++) {
        dealWith(ip[i]);
    }
    return toString();
};
