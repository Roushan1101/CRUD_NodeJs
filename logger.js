const EventEmitter=require('events')



var url='http://google.co.in';

class Logger extends EventEmitter{
    log(msg){
        console.log("Your message is "+msg)
        this.emit('messageLogged',{id:1,url:'localhost:3000'});
    
    }
}




module.exports=Logger