const objectA = {
    a: 10,
    b: 20
}

console.log(`a: ${objectA.a}  b: ${objectA.b}`)

const copyOfA = objectA

copyOfA.a = 20 //Change the value of property 'a'

copyOfA.c = 'abc' //Add property 'c' with value 'abc'

console.log(`a: ${copyOfA.a} b: ${copyOfA.b} c:${objectA.c}`)