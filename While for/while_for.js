for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert(i)
    }
} alert('End');

let i = 0
while (i < 3) {
    alert(`number ${i} !`);
    i++;
}

let number
do {
    number = prompt('Enter a number greater than 100')
} while (number <= 100 && number);