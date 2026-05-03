class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSort = nums.sort()
        const checked = new Set();
        let has = false;
        for (const num of numSort) {
            if (checked.has(num)) {
                has = true;
                break;
            } else {
                checked.add(num);
            }
        }

        return has;
    }

     hasDuplicate2(nums){
         return new Set(nums).size !== nums.length;
    }
}
