var student1 = {
    name: "Mankee",
    age: 17,
    gpa: 4.0,
    gender: "M",
    grade: 12
};

console.log(student1.name);

// Get the value of a property by using .
console.log(student1.name, 'is', student1.age, 'years old');

// Change the value of a property
student1.grade = 11;
console.log(student1);

// Add a new property to student1
console.log(student1.iq);
student1.iq = 37;
console.log(student1);
console.log(student1.iq);

// Delete a property from student1
delete student1.iq;
console.log(student1);

// What if I do this:
var student2 = student1;

console.log("Student2:");
console.log(student2);

student1.name = "Minkee Mankee";
console.log(student1);
console.log(student2);

// Does a property exist in the object?
console.log("iq" in student1);
console.log("name" in student1);
