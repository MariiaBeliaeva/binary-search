const binarySearch = require("../index");

test("Функция должна возвращать индекс элемента", () => {
  let item = 7;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(arr, item)).toEqual(6);
});

test("Функция должна быть определена", () => {
  expect(binarySearch).toBeDefined();
});

test("Функция должна возвращать -1, если элемента не существует в данном массиве", () => {
  let item = 10;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(arr, item)).toEqual(-1);
});
