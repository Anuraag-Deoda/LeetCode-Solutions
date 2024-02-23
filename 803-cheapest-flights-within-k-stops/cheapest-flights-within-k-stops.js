/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const dp = Array.from({length: k + 2}, () => Array(n).fill(Infinity));
    dp[0][src] = 0;

    for (let stops = 1; stops <= k + 1; stops++) {
        dp[stops][src] = 0;
        for (let [from, to, price] of flights) {
           
            dp[stops][to] = Math.min(dp[stops][to], dp[stops - 1][from] + price);
        }
    }

    const answer = dp[k + 1][dst];
    return answer === Infinity ? -1 : answer;

};