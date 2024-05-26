/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2)
    mergedArray.sort((a,b) => a-b)
    const n = mergedArray.length
    const mid = Math.floor(n/2)
    if(n%2===0) {
        return (mergedArray[mid] + mergedArray[mid-1]) /2
    } else {
        return mergedArray[mid]
    }
    // const m = nums1.length;
    // const n = nums2.length;

    // if (m===0) {
    //     return (nums2[Math.floor(n/2)] + nums2[Math.ceil(n/2)-1])/2
    // }
    // if (n===0) {
    //     return (nums1[Math.floor(n/2)] + nums1[Math.ceil(n/2)-1])/2
    // }

    // let low = 0
    // let high = m;

    // while(low <= high) {
    //     const i = Math.floor((low+high)/2);
    //     const j = Math.floor((m+n+1)/2 - i)

    //     if (nums1[i-1] <= nums2[j] && nums2[j-1] <= nums1[i]) {
    //         if((m+n)%2 ===1) {
    //             return nums1[i]
    //         } else {
    //             return (nums1[i] + Math.max(nums1[i-1], nums2[j-1]))/2
    //         }
    //     } else if (nums1[i-1]>nums2[j]) {
    //         high = i-1
    //     } else {
    //         low = i+1
    //     }
    // }
};