import '../polyfill/array-max';

export default prices => {
    const dynamics = [];
    let min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < min) {
            min = price;
        }
        dynamics[i] = price - min;
    }
    return dynamics.max();
};
