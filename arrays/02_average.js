// Program to find the average of a list of numbers

function average(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i = i + 1) {
        var val = numbers[i];
        sum = sum + val;
    }
    var avg = sum / numbers.length;
    return avg;
}

var my_list = [20, -4, 0, 50, 65, 7];
var avg1 = average(my_list);
console.log(avg1);

console.log(average([20, -4, 656, 32, 57, 9, 3, 7]));
