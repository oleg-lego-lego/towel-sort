module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    return matrix
        .map(function (array, index) {
            return index % 2 > 0 ? array.reverse() : array;
        })
        .flat();
};
