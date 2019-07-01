var arr = 
[
    // [0] event #1
    {
        datetime: "2019-10-07",
        venue: {
            name: "Venue1",
            city: "Las Vegas",
            region: "NV"
        }
    },

    // [1] event #2
    {
        datetime: "2019-11-07",
        venue: {
            name: "Venue2",
            city: "Los Angeles",
            region: "CA"
        }
    }
];  // length: 2

for (var i = 0; i < arr.length; i++) {
    var event = arr[i];
    // print venue info
    console.log("[" + i + "]");
    console.log(event.datetime);
    console.log(event.venue.name);
}
