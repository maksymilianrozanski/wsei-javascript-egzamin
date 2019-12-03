function bigestSumOfTwoElements(array) {
    if (array.length === 0) return false;
    if (array.length === 1) return array[0];
    let copy = [...array];
    copy.sort((a, b) => b - a);
    return copy[0] + copy[1]
}
