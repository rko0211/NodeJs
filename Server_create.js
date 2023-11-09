const fs = require("fs");
const http = require("http");
// let path = './views/index.html';

const server = http.createServer((req,res)=>{
res.setHeader("Content-type",'text/html');
let path = './views';
switch(req.url){
    case '/':
        path+='/index.html';
        break;
    case '/About':
        path+='/about.html';
        break;
    default:
        path+='/error.html';
}
fs.readFile(path,(err,fileData)=>{
    if(err){
        console.log(err);
    }
    else{
        res.write(fileData);
        res.end();
    }
})

})

server.listen(3000,'127.0.0.1',()=>{
    console.log("The server is listening at port 3000");
})