class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const entr = numbers.entries();
        for (const [i, value] of entr) {
            const targetValue = target - value;

            for (const [j, value2] of numbers.entries()) {
                if (i === j) continue;
                if (targetValue === value2) {
                    return [i + 1, j + 1];
                }
            }
        }
    }
}
