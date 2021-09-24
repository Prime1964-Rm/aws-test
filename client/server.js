const express = require('express');
const app = express()
const path = require('path')


let port = process.env.PORT || 4000

app.use(express.static(path.join(__dirname,"client", 'build')))


app.listen(port,()=>{
    console.log('SERVER LISTENING ON PORT',port)
})