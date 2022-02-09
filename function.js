function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFn(10, 3))

//Create a copy of object

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)

console.log(personOne.age)
console.log(updatedPersonOne.age)