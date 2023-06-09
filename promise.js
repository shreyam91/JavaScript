let promise = new Promise(function(resolve, reject) {
    alert('Alert in promise');
    resolve(56);

})

console.log("hello world");
setTimeout(function() {
    alert("hey!")
}, 1000);