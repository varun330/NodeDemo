const fs = require("fs");
const os = require('os');
const Logger = require("./logger")
const logger = new Logger();
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write('Hello World');
        res.end();
    }
    if(req.url === "/list"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection',(socket =>{
    console.log("New Connection");
}));

server.listen(3000);
console.log("Listening on port 3000...")

var total_memory = os.totalmem()
var free_memory = os.freemem();

console.log(`Total Memory: ${total_memory}`);
console.log(`Free Memory: ${free_memory}`);

fs.readdir("./",function(error,files){
    if(error) console.log(`Error : ${error}`);
    else console.log(files);
});
 
logger.on('message_logged',(arg)=>{
    console.log('Listener called',arg);
});

logger.log("Hi");



