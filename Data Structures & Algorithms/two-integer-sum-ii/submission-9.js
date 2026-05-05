class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const output = [0, 0];

        for (const [i, value] of numbers.entries()) {
            const targetValue = target - value;

            for (const [j, value2] of numbers.entries()) {
                if (i === j) continue;
                if (targetValue === value2) {
                    output[0] = i + 1;
                    output[1] = j + 1;
                    return output;
                }
            }
        }

        return output;
    }
}
