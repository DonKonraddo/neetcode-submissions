class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapFrequent = {}

        for (const v of nums) {

            if (!mapFrequent[v]) {
                mapFrequent[v] = 1;
            } else {
                mapFrequent[v] = mapFrequent[v]+ 1;
            }
        }

        const sorted = [...Object.entries(mapFrequent)].sort((a, b) => b[1] - a[1]);
        console.log('sorted=>>',sorted)

        return sorted
            .slice(0, k) 
            .map(([num]) => num);
            // return []
    }
}
