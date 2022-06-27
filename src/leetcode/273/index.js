const dict = {
    0: '', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine',
    10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen',
    20: 'Twenty', 30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety',
    100: 'Hundred',
};

const getNums = num => {
    const chunks = [];
    while (num !== 0) {
        chunks.push(num % 10);
        num = Math.floor(num / 10);
    }
    return chunks;
};

const getChunks = num => {
    const chunks = [];
    while (num !== 0) {
        chunks.push(num % 1000);
        num = Math.floor(num / 1000);
    }
    return chunks;
};

export const hundredToWords = num => {
    if (num < 20) {
        return dict[num];
    }
    // format 'ab'
    const [b, a] = getNums(num);
    if (dict[b]) {
        return `${dict[a * 10]} ${dict[b]}`;
    }
    return dict[a * 10];
};

export const chunkToWords = num => {
    if (num < 100) {
        return hundredToWords(num);
    }
    const hundredStr = hundredToWords(num % 100);
    const a = Math.floor(num / 100);
    if (hundredStr) {
        return `${dict[a]} ${dict[100]} ${hundredStr}`;
    }
    return `${dict[a]} ${dict[100]}`;
};

export default function (num) {
    if (num === 0) {
        return 'Zero';
    }
    const suffixArr = ['Billion', 'Million', 'Thousand', ''];
    const words = getChunks(num).map(chunk => chunkToWords(chunk)).reverse();
    const strs = [];
    while (words.length > 0) {
        const word = words.pop();
        const suffix = suffixArr.pop();
        if (!word) {
            // do nothing
        } else if (suffix) {
            strs.push(`${word} ${suffix}`);
        } else {
            strs.push(word);
        }
    }
    return strs.reverse().join(' ');
}
