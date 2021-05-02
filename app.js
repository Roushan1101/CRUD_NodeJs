const http=require('http')

const server=http.createServer(function(req,res){
   

    if(req.url=='/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})



server.listen(3000)
console.log('Running 3000')