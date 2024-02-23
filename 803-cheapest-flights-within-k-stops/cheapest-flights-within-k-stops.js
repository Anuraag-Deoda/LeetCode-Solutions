/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const costs = new Array(n).fill(Infinity);
    costs[src] = 0;

    let ans = Infinity;
    for (let i = 0; i <= k; i++) {
        const tempCosts = [...costs]; 
        for (const [u, v, w] of flights) {
            if (costs[u] === Infinity) continue;
            if (costs[u] + w < tempCosts[v]) {
                tempCosts[v] = costs[u] + w; 
            }
        }
        costs.splice(0, n, ...tempCosts); 
        ans = Math.min(ans, costs[dst]); 
    }

    return ans === Infinity ? -1 : ans;

};