const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Bienvenidos")
})

app.listen(3000,function(){
console.log("http://localhost:3000")
})
