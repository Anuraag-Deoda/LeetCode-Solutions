class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        highest_peak = 0
        deepest_valley = 0
        current_climb = 0
        current_descent = 0
        for i in range(len(nums)):
            current_climb = max(nums[i], current_climb + nums[i])
            highest_peak = max(highest_peak, current_climb)
            
            current_descent = min(nums[i], current_descent + nums[i])
            deepest_valley = min(deepest_valley, current_descent)
        return max(abs(highest_peak), abs(deepest_valley))
        