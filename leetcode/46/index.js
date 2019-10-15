export const getRest = (strings, index) => {
  const word = [strings[index]];
  const rest = strings.slice(0, index).concat(strings.slice(index + 1, strings.length));
  return { word, rest };
};

const workWith = (prefix, strings) => {
  if (strings.length === 1) {
    return [prefix.concat(strings)];
  }
  let results = [];
  for (let i = 0; i < strings.length; i++) {
    const { word, rest } = getRest(strings, i);
    const combine = prefix.slice().concat(word);
    results = results.concat(workWith(combine, rest));
  }
  return results;
};

const permute = nums => workWith([], nums);

export default permute;
