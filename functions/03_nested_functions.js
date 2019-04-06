// variables in global scope
console.log("Top:");
var g1 = "minkee";
console.log(g1);

function outer() {
    console.log("Outer function:")
    console.log(g1);

    var o1 = "mankee";
    console.log(o1);

    function inner() {
        var i1 = "stinky"
        console.log("Inner function:")
        console.log(g1);
        console.log(o1);
        console.log(i1);
    }

    inner();
    // console.log(i1);
}

outer()
console.log(g1);
// console.log(o1);
// console.log(i1);
