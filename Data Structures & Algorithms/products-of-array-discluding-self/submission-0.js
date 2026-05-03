class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length).fill(1);

        // pętla od lewej — zapisuj iloczyn tego co było PRZED i
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix;
            prefix *= nums[i]; // aktualizuj na następną iterację
        }

        // pętla od prawej — mnóż przez iloczyn tego co jest PO i
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output
    }
}
