function sum(x, y) {
    return x + y;
}

function difference(x, y) {
    return x - y;
}

var z = sum(10, 20) - sum(1, 2);
console.log(z);

console.log(difference(10, 20));

var answer = difference(sum(10, 20), sum(1, 2));
console.log(answer);
