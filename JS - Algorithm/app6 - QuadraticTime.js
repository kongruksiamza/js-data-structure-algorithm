function matchElement(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return `ตำแหน่งซ้ำกัน คือ ${i} และ ${j}`;
      }
    }
  }
  return "ไม่มีค่าซ้ำกันเลย";
}

const fruit = ["ส้ม", "มะละกอ", "มังคุด", "ทุเรียน", "ส้ม", "แตงกวา"];
console.log(matchElement(fruit)); // ตำแหน่งซ้ำกัน คือ 0 และ 4
