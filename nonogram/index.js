
const sum = list => list.reduce((a, b) => a + b, 0);

const nonogram = (fullClue, fullLength) => {
  const answerList = [];

  const f = ({ pre, clue, length }) => {
    const clueMinLength = sum(clue) + clue.length - 1;
    if (clueMinLength > length) {
      return;
    }
    if (clue.length === 0) {
      const answer = pre.concat(Array(length).fill(0));
      answerList.push(answer);
      return;
    }
    const [firstClue, ...rest] = clue;
    if (clue.length === 1) {
      for (let i = 0; i <= length - firstClue; i++) {
        const left = Array(i).fill(0);
        const right = Array(length - firstClue - i).fill(0);
        const middle = Array(firstClue).fill(1);
        const answer = pre.concat(...left, ...middle, ...right);
        answerList.push(answer);
      }
      return;
    }
    const left = Array(firstClue).fill(1).concat(0);
    f({ pre: pre.concat(left), clue: rest, length: length - firstClue - 1 });
    if (clueMinLength < length) {
      f({ pre: pre.concat(0), clue, length: length - 1 });
    }
  };

  f({ pre: [], clue: fullClue, length: fullLength });
  return answerList;
};

export default nonogram;
