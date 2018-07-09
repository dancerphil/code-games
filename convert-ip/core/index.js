import { dealWith, toString } from './runtime'

// iterate once
export default (ip) => {
  for(let i = 0; i < ip.length; i++) {
    dealWith(ip[i]);
  }
  return toString();
}
