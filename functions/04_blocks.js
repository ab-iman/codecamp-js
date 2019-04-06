// A block is a set of one or more statements surrounded by { }
// Most often seen in an if, while, for statement etc.

var g1 = "Minkee";

function outer() {
    let o1 = "Mankee";

    console.log("Outer function scope:");
    // console.log(g1, o1, i1, i2);

    if (2 > 1) {
        let i1 = "Stinky";
        console.log("Block 1 scope:");
        console.log(g1, o1, i1);
    }
    if (3 > 1) {
        let i2 = "Skanky";
        console.log("Block 2 scope:");
        console.log(g1, o1, i2);
    }
}

outer();
