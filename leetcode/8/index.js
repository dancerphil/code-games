import '../polyfill/number-restrict';

export default function(str) {
  const reg = /^[-+]*\d+/g;
  str = str.trim();
  const t = str.match(reg);
  const num = Number(t).restrict(); // if use reg = /[-+]*\d+/g, t[0] is better
  return num;
};
