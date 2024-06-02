/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        "I": 1,
        "V":5,
        "X":10,
        "L":50,
"C":100,
"D":500,
"M":1000,
    }
    let val = 0;
    for(let i=0; i<s.length; i++){
        symbols[s[i]] < symbols[s[i+1]] ? val -= symbols[s[i]] : val+=symbols[s[i]]
    }
    return val
};