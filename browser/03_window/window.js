console.log(window);
console.log(window.location);

// Prints the URL of the current html page
console.log(window.location.href);

// It is OK to skip window since it is the parent
// of all objects (but only within a browser)
console.log(location.href);

// Show an alert message to the user
// Works only on a browser
window.alert("FLEEE!!");

// window. is optional
alert("Second alert, no window");

// Open a new browser window/tab at the mentioned URL
window.open("https://nytimes.com");
