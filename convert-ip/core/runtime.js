/* ---- types ---- */
export const spaceType = 0x100;
export const dotType = 0x010;
export const digitType = 0x001;

export const getType = (node) => {
  if(node === ' ') {
    return spaceType;
  }
  if(node === '.') {
    return dotType;
  }
  if(!Number.isNaN(Number(node))) {
    return digitType;
  }
  throw Error(`Invalid char: ${node}`)
}

/* ------------ */

let charStack;
let numberStack;
let preType;
let waitType;

export const init = () => {
  charStack = [];
  numberStack = [];
  preType = dotType;
  waitType = 0x111;
}

const convertNumber = () => {
  const number = Number(charStack.join(''))
  if(number >= 256) {
    throw Error(`Invalid ip byte: ${number}`)
  }
  numberStack.push(number);
  charStack = [];
}

export const dealWith = node => {
  const type = getType(node);
  if((type & waitType) === 0){
    throw Error(`Invalid char: ${node}, type: ${type}`);
  }
  switch (type) {
    case digitType:
      waitType = 0x111; // space && dot && digit
      charStack.push(node);
      preType = type;
      return;
    case dotType:
      waitType = 0x111; // space && dot && digit
      convertNumber();
      preType = type;
      return;
    case spaceType:
      if(preType === digitType) {
        waitType = 0x110; // space && dot
      } else {
        waitType = 0x111; // space && dot && digit
      }
      return;
    default:
      return;
  }
}

export const toString = () => {
  convertNumber();
  return numberStack[0] * 16777216 + numberStack[1] * 65536 + numberStack[2] * 256 + numberStack[3];
}
