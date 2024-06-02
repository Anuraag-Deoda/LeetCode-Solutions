/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j;
        for (j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needleLength) {
            return i; 
        }
    }
    
    return -1; 
};