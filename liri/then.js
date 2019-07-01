
console.log("abc");



axios.get("https://bit.com/?artist=lady+gaga")
    .then(function (response) {
        // status code: 
        //   200 = Success
    })
    .catch(function (response) {
        //   400, 401, 403, 404 = Error (Client)
        //   500 = Error (Server)
    });

console.log("def");
