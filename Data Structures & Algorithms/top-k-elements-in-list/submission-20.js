class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapFrequent = {};

        for (const v of nums) {
            mapFrequent[v] = (mapFrequent[v] ?? 0) + 1;
        }

        return [...Object.entries(mapFrequent)]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
