export const getRest = (string, i) => {
  const word = string[i];
  const rest = string.substring(0, i) + string.substring(i + 1, string.length);
  return { word, rest };
};

const workWith = (prefix, string) => {
  if (string.length === 1) {
    return [prefix + string];
  }
  let result = [];
  for (let i = 0; i < string.length; i++) {
    const { word, rest } = getRest(string, i);
    result = result.concat(workWith(prefix + word, rest));
  }
  return result;
};

export default string => workWith('', string);
