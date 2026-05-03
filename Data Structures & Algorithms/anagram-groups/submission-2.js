class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grups = {};

        for (const v of strs) {
            const value = v.split("").sort().join("");
            if (grups[value]) {
                grups[value].push(v);
            } else {
                grups[value] = [v];
            }
        }
        return Object.values(grups)
    }
}
