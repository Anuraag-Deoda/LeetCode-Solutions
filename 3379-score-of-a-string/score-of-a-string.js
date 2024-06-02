/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;

  // Loop through characters starting from the second element
  for (let i = 1; i < s.length; i++) {
    // Calculate absolute difference between ASCII values of adjacent characters
    const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    score += diff;
  }

  return score;
};