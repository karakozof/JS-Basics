let isTrueJs = prompt('What is the official name of Java Script?');
if (isTrueJs === 'ECMAScript') {
    alert('You are right!')
}
else {
    alert('You a wrong!')
};

let whatNumber = prompt('Enter your number');
if (whatNumber > 0) {
    alert(1)
} else if (whatNumber < 0) {
    alert(-1)
}
else {
    alert(0)
};

let whatNumber2 = prompt('Enter your number');
(whatNumber2 > 0) ? alert(1) :
    (whatNumber2 < 0) ? alert(-1) : alert(0);