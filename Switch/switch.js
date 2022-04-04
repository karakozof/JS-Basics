let browser = prompt('What browser do you use?')

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

const num = +prompt('Enter a number between 0 and 3')

switch (num) {
    case 0:
        alert('You entered the number 3')
        break;
    case 1:
        alert('You entered the number 1')
        break;
    case 2:
    case 3:
        alert('You entered the number 2 or maybe 3')
        break
    default:
        alert(`You entered number ${num}, but it is out of range :(`)
        break;
}