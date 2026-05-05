class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const set = new Set(numbers);
        const output = [0, 0];

        for (const [i, value] of numbers.entries()) {
            const targetValue = target - value;
            // if (targetValue <= 0) {
            //     continue;
            // }
            // console.log("targetValue", targetValue);

            for (const [j, value2] of numbers.entries()) {
                if (i === j) continue;
                console.log("data", {
                    value,
                    value2,
                    targetValue,
                    consd: targetValue === value2,
                    i,
                    j,
                });
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
