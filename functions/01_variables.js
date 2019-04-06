
var x = 10;

console.log("Top:")
console.log(x);

function f1() {
    var x = 25;
    var y = 20;
    console.log("Inside function f1:")
    console.log(x);
    console.log(y);
}

f1();

console.log("Bottom:")
console.log(x);

// console.log(y); -- does not work