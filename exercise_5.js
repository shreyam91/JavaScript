let a =[
    "Initializing Hack tool",
    "username not found",
    "retrying",
    "connection established",
    "extracting from server",
    "extraction complete",
]

const sleep = async(seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)},seconds * 1000)

    })
}
const showHack = async(msg) => {
    await sleep(2)
    console.log(msg)

}

(async () => {
    for (let i = 0; i <a.length; i++) {
        await showHack(a[i])
    }
})