const decode = (encoded, first) => encoded.reduce((ans, n, i) => { ans[i + 1] = ans[i] ^ n; return ans; }, [first]);
