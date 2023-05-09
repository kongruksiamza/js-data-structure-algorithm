function summation(n){
    return n*(n+1)/2
 }

n=300_000_000 // 3 ร้อยล้าน
console.time()
summation(n)
console.timeEnd()