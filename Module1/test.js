let s1 = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
function nonDivisibleSubset(k, s) {
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            var sum = s[i] + s[j];
        }
        if (sum != k) {
            n += 1;
        }
    }
    return n;
}
nonDivisibleSubset(7, s1);
console.log(nonDivisibleSubset(7, s1));
