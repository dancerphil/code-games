const peopleSorter = ([h1, k1], [h2, k2]) => {
    if (h1 !== h2) {
        return h2 - h1;
    }
    return k1 - k2;
};

const reconstructQueue = people => {
    people.sort(peopleSorter);
    const ans = [];
    people.forEach(p => {
        ans.splice(p[1], 0, p);
    });
    return ans;
};

export default reconstructQueue;
