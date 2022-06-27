export default ip => {
    const strings = ip.split('.');
    const numbers = strings.map(string => {
        const trimmed = string.trim();
        const number = Number(trimmed);
        if (number !== Number(trimmed)) {
            throw Error(`Can not convert ${trimmed} into numbers`);
        }
        return number;
    });
    return numbers[0] * 16777216 + numbers[1] * 65536 + numbers[2] * 256 + numbers[3];
};
