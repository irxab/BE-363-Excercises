const process = require("process")

process.stdout.write("Please enter anything: ")

EE= events.EventEmitter()
EE.on("login",()=>{
    console.log("Login event")
}

EE.emit("login")

process.stdout.on("data",(data)=>{
    process.stdout.write(`You wrote: ${data.toString()}`)
    process.exit()
}
