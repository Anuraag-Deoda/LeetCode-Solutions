/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    	let highestPeak = 0;      
    	let deepestValley = 0;    
    	let currentClimb = 0;     
    	let currentDescent = 0;   
    
    	for (let number of nums) {
        	currentClimb = Math.max(number, currentClimb + number);
        	highestPeak = Math.max(highestPeak, currentClimb);
        
        	currentDescent = Math.min(number, currentDescent + number);
       	 	deepestValley = Math.min(deepestValley, currentDescent);
    }
    

   	return Math.max(Math.abs(highestPeak), Math.abs(deepestValley));
};