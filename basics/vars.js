var person1 = "Matthew";
var person2 = "Guddu";
console.log(person1);
console.log(person2);

// No value has been set on person3
// If we try to use the person3 variable, it shows undefined
var person3;
console.log(person3);

// The + operator works on strings too. It joins them together.
console.log(person1 + person2);

// Equivalent way of doing ^^^
var joined = person1 + person2;
console.log(joined);

// What if I use + operator on an undefined variable?
console.log(person1 + person3);

// Let's try this with numbers
var a = 10;
var b = 20;
var c;
var d = null;

console.log(a, b, c);
console.log(a+b);
console.log(a+c);
console.log(d);

