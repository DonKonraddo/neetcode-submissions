class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    longestConsecutive(nums) {
        const setNums = new Set(nums);
        let maxSeq = 0;

        for (const value of setNums) {
            if (setNums.has(value - 1)) continue; // nie początek sekwencji, pomijamy

            let seq = 1;
            let current = value;

            while (setNums.has(current + 1)) {
                seq++;
                current++;
            }

            maxSeq = Math.max(maxSeq, seq);
        }

        return maxSeq;
    }

    longestConsecutive3(nums) {
        const setNums = new Set(nums);

        if (setNums.size === 1) return 1;

        let seq = 0;
        let maxSeq = 0;
        let prev = setNums[0];
        for (const [i, value] of setNums.entries()) {
            const nValue = value - 1;
            if (setNums.has(nValue)) {
                seq = seq + 1;
            } else {
                if (seq > maxSeq) {
                    maxSeq = seq;
                }

                seq = 0;
            }
        }
        const output = maxSeq > seq ? maxSeq : seq;
        console.log("output", { maxSeq, seq });
        return output > 0 ? output + 1 : 0;
    }

    longestConsecutive2(nums) {
        const setNums = [...new Set(nums)].sort((a, b) => a - b);

        if (setNums.length === 1) return 1;

        let seq = 0;
        let maxSeq = 0;
        let prev = setNums[0];
        for (const [i, value] of setNums.entries()) {
            if (i === 0) continue;

            if (prev + 1 === value) {
                seq = seq + 1;
            } else {
                if (seq > maxSeq) {
                    maxSeq = seq;
                }

                seq = 0;
            }
            prev = value;
        }
        const output = maxSeq > seq ? maxSeq : seq;
        console.log("output", { maxSeq, seq });
        return output > 0 ? output + 1 : 0;
    }
}
