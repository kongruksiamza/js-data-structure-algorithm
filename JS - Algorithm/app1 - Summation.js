function summation(n){
    total=0
    for(i=1;i<=n;i++){
       total+=i
    }
    return total
}
n=300_000_000 // 3 ร้อยล้าน
console.time()
summation(n)
console.timeEnd()