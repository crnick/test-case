const crypto = require('crypto')
const http = require('http')



let server = http.createServer(function (req, res) { 

  if(req.method="GET"){
  
    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    res.end("<h1>glkewjglkjm</h1>");
  }
   else if(req.method="POST"){
    var body = ''
    req.on('data', function(data) {
      res.writeHead(200, { 'Content-Type': 'application/json' }); 
      body += data
      console.log('Partial body: ' + body)

      let hash = crypto.createHash('md5').update(body).digest("hex") 
      let message = {
        checksum:hash
      }
      const jsonContent = JSON.stringify(message);
      res.end(jsonContent);
    })
      
  }
  
});


server.listen(3000,'localhost', function(){
  console.log("Server is Listening at Port 3000!");
});