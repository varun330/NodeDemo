const EventEmmiter = require('events');

var url = "xyz";

class Logger extends EventEmmiter{
    log(message){
        console.log(message);
        this.emit('message_logged',{id:1,message:"Hello"});
    }
}
module.exports = Logger;
