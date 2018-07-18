const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

export default function(str) {
  const reg = /^[-+]*\d+/g;
  str = str.trim();
  const t = str.match(reg);
  const num = Number(t); // if use reg = /[-+]*\d+/g, t[0] is better
  if(isNaN(num)) {
    return 0;
  }
  if(num < INT_MIN) {
    return INT_MIN;
  }
  if(num > INT_MAX) {
    return INT_MAX;
  }
  return num;
};
