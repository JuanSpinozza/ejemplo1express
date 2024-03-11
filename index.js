const express = require('express')
const app = express()
const port = 5000;

app.get ('/r',(req,res)=> {
    res.send('Hola Mundo express')
})

app.listen(port,() => {
    console.log('La aplicaciones se esta ejecutando en la puerto' + port)
})