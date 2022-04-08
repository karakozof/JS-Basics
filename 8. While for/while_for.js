
for (i = 2; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i)
}

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let over100;
do {
    over100 = prompt('Enter a number greater than 100');
} while (over100 <= 100 && over100);

let num = prompt('Enter a number')
nextPrime:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}