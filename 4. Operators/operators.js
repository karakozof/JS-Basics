let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(a, d);

let z = 2;
let x = 1 + (z *= 2);
console.log(x); // 5

5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false