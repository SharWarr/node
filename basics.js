const http = require('http')
//const http1 = require('./http')
const server = http.createServer((req,res) => {
    var fs = require('fs');
    //console.log(req.url , req.headers , req.method);
    //process.exit();
    //res.write('<html> <head> <body> <h1> Hello World </h1> </body> </head> </html>');
    if(req.url == "/" ){
        res.write('<html><form method="POST" action="/mssg"> <input type = "text"/> <button type="submit" value="Submit">SUBMIT</button> </form></html> ');
        return res.end();
                   }
    
     if(req.url == "/mssg" && req.method=="POST"){
            
            fs.writeFileSync('message.txt' , 'hello world');
            res.setHeader('Content-Type','text/html');
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();  }

      });
server.listen(3000);