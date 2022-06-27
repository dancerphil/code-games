export const gcd = (p, q) => {
    if (p < q) {
        return gcd(q, p);
    }
    if (q === 0) {
        return p;
    }
    return gcd(p % q, q);
};

export const lcm = (p, q) => p * q / gcd(p, q);
