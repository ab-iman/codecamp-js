// console.log(process.argv.length);
// console.log(process.argv);

var action = process.argv[2];
console.log(action);

// process.argv: ["node", "liri.js", "concert-this", "Lady", "Gaga", "Diva", "Queen"];
var searchTermArr = process.argv.slice(3);   // ["Lady", "Gaga", "Diva", "Queen"]
var searchTerm = searchTermArr.join(" ");    // "Lady Gaga Diva Queen"


if (action === "concert-this") {
    // ... api call to bandsintown
}
else if (action === "spotify-this-song") {
    // use spotify npm library
}
else if (action === "movie-this") {
    // use omdb api to get movie info
}
else {
    console.log("Dont know how to do that");
}
