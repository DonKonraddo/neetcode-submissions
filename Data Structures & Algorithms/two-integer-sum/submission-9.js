class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) return [];
        // console.log('entris=>',Array.entries(nums))

        const seen = new Map(); // wartość -> indeks

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (seen.has(complement)) {
                const j = seen.get(complement);
                return [Math.min(i, j), Math.max(i, j)];
            }

            seen.set(nums[i], i);
        }

        throw new Error("No solution found");
    }
}
