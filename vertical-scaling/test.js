const Big_Number = 100_000_000_000

let sum = 0;
console.time("Total Time");
for(let i = 1; i <= Big_Number; i++){
    sum += i;
}
console.timeEnd("Total Time");
console.log(sum);