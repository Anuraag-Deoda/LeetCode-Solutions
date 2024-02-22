/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const out = new Array(n+1).fill(0);
    for (let [i, j] of trust) {
        --out[i];
        ++out[j];
    }
    for (let i=1; i<out.length; i++){
        if(out[i]===n-1) return i
    }
    return -1
};