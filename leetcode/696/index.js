const min = (a, b) => (a > b ? b : a);

const countBinarySubstrings = (s) => {
  let theString = '';
  let theNum = 0;
  let preNum = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === theString) {
      theNum += 1;
      continue;
    }
    ans += min(preNum, theNum);
    theString = item;
    preNum = theNum;
    theNum = 1;
  }
  ans += min(preNum, theNum);
  return ans;
};

export default countBinarySubstrings;
