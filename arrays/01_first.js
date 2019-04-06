// An array is a list of items

// An array variable is defined as you define any variable - using the var keyword
// It is then initialized to list of comma separated values surrounded by square brackets

var mankee_names = ["Minkee", "Mankee", "Stinky", "Skanky"];
console.log(mankee_names);

// You can ask an array how many items it has using the length property of the array
console.log("Mankee has how many names?");
console.log(mankee_names.length);

// Indexing - get the value stored at a given position in the array
// NOTE: Array indexes always start at 0
console.log(mankee_names[0]);
console.log(mankee_names[1]);

// Cannot index past the last item (a.k.a the bounds of the array)
console.log(mankee_names[4]);
