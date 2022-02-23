let age = prompt('How old are you?', 100);
alert(`You are ${age} !`);

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert(i);
    }
}

function isDivideBy(number, a, b) {
    let result
    if ((number % a === 0) && (number % b === 0)) {
        result = true
        return result
    } else {
        result = false
        return result
    }
}