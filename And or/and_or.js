let age = 32
if (age >= 14 && age <= 90) // (!(age < 14 || age > 90))
{
    alert("You won't get through!")
}
else {
    alert('Welcome!')
};

let whoIs = prompt('Who is there?')
let userPass

if (whoIs === "Admin") {
    userPass = prompt("Enter your pass")
} else if (whoIs === null || whoIs === '') {
    alert('Canceled')
} else {
    alert(" i don't now you")
}

if (userPass === 'Main') {
    alert(`Hello ${whoIs} !`)
} else if (userPass === null || userPass === '') {
    alert('Canceled')
} else {
    alert('Wrong password')
}