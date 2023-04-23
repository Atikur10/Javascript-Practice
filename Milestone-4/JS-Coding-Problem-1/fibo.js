const fibo = [0, 1];
for( let i = 2; i <= 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo)


let count = [0, 1];

for(n = 2; n <= 10; n++){
    count[n] = count[n-1] + count[n-2];
}
console.log(count)

