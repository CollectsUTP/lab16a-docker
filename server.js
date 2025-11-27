const http=require("http");

 const servidor=http.createServer((req,res)=>{
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("servidor de node.js corriendo dentro de un contendor Docker");
});

servidor.listen(3000,()=>{

 console.log("Org. Darwi Joel");
 console.log("Servidor ejecutandose en el puerto 3000");
});









