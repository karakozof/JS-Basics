age = prompt("How old are you?");

if (age >= 14 && age <= 90) {
    alert(true)
} else {
    alert(false)
};

age = prompt("How old are you?");

if (!(age >= 14 && age <= 90)) {
    alert(true)
} else {
    alert(false)
};

let whoIsThere = prompt("Who's there?");

if (whoIsThere === null) {
    alert('Canceled')
} else if (whoIsThere !== 'Admin' || whoIsThere === "") {
    alert("I don't know you!")
} else {
    let enterYourPass = prompt("Enter your password")

    if (enterYourPass === null) {
        alert("Canceled")
    } else if (enterYourPass !== "Boss") {
        alert("Wrong password!")
    } else {
        alert("Hello Boss!")
    }
}