let p = fetch("https://v2.jokeapi.dev/joke/Any")
p.then((value1)=>{
    console.log(value1.status) // status is printed
    console.log(value1.ok) // ok is printed
    console.log(value1.headers) // headers is printed
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})
