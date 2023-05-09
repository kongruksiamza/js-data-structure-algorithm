function search(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
let score = [12, 22, 45, 67, 96];
console.log(search(score, 100));
