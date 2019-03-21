// Find the average of 10, 20, 30, 40 and 50
var avg = (10 + 20 + 30 + 40 + 50) / 5;
console.log("The average of 10, 20, 30, 40 and 50 is", avg);

// Find the average of 5, -2, 3, 0, 76
avg = (5 + -2 + 3 + 0 + 76) / 5;
console.log("The average of -2, 5, 3, 0, 76 is", avg);

// Find the average of 0, 0, -2, 2, 0
avg = (0 + 0 + -2 + 2 + 0) / 5;
console.log(avg);

// Now let's try to write a function that calculates the average of 5 numbers

function average(n1, n2, n3, n4, n5)
{
    var total = n1 + n2 + n3 + n4 + n5;
    var a = total / 5;
    console.log("The average of", n1, n2, n3, n4, n5, "is", a);
}

// Now "call" or "invoke" the function you just defined
average(10, 20, 30, 40, 50);
average(-2, 5, 3, 0, 76);
average(0, 0, -2, 2, 0);

// What if I pass only 3 values
// What if I pass only 3 "arguments"
average(10, 20, 30);
