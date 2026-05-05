class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left + 1, right + 1];
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
            // left++;
            // right--;
        }
        return [];
    }

    twoSumOld(numbers, target) {
        for (const [i, value] of numbers.entries()) {
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
