/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let start = 0, end = 0;
    const sLength = s.length, tLength = t.length;

    while (start < sLength && end < tLength) {
        if(s[start] === t[end]) {
            end ++
        }
        start ++
    }
return tLength - end;
};