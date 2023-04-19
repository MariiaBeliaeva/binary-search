// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(sortedArr, item) {
  let start = 0;
  let end = sortedArr.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (sortedArr[middle] === item) {
      return middle;
    } else if (sortedArr[middle] < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
module.exports = binarySearch;
