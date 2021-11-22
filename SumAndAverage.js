var sum = 0;

for(let i = 0; i <=5; i++){
    let digit = Math.floor((Math.random() * 90 ) + 10);
    sum += digit;
}

console.log("Sum is: " +sum);

let avg = sum / 5;
console.log("Average is: " +avg);