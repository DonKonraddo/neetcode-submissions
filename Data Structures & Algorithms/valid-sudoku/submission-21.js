class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seenSquer = new Map();
        for (const [index, row] of board.entries()) {
            const hasRowDuplicates = this.hasRowDuplicates(row);
            // console.log("hasRowDuplicates=>>", hasRowDuplicates);
            if (hasRowDuplicates) {
                return false;
            }

            const hasColumnDuplicates = this.hasColumnDuplicates(board, index);
            // console.log("hasColumnDuplicates=>>", hasColumnDuplicates);
            if (hasColumnDuplicates) {
                return false;
            }

            const hasSquerDuplicates = this.hasSquerDuplicates(row, index, seenSquer);

            // console.log("hasSquerDuplicates=>>", hasSquerDuplicates);
            if (hasSquerDuplicates) {
                return false;
            }
        }
        console.log("seenMap", seenSquer);
        return true;
    }

    hasRowDuplicates(row) {
        if (row.length !== 9) {
            return true;
        }
        const seen = new Set();
        for (const value of row) {
            if (seen.has(value)) {
                return true;
            } else if (value !== ".") {
                seen.add(value);
            }
        }
        return false;
    }

    hasColumnDuplicates(board, columnIndex) {
        if (board.length !== 9) {
            return true;
        }
        const seen = new Set();
        for (const row of board) {
            const value = row[columnIndex];
            if (seen.has(value)) {
                return true;
            } else if (value !== ".") {
                seen.add(value);
            }
        }
        return false;
    }

    hasSquerDuplicates(row, columnIndex, seenMap) {
        for (const [rowIndex, value] of row.entries()) {
            const pointer = Math.floor(rowIndex / 3) + Math.floor(columnIndex / 3) * 3;
            console.log("pointer", pointer);
            // console.log('hasSquerDuplicates=>>',[rowIndex, columnIndex], pointer)
            if (!seenMap.has(pointer)) {
                seenMap.set(pointer, new Set());
            }
            const sqrSeenSet = seenMap.get(pointer);
            if (sqrSeenSet.has(value)) {
                return true;
            } else if (value !== ".") {
                sqrSeenSet.add(value);
            }
        }
        return false;
    }
}
