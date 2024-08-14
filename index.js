require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('lavda lassan');
})


app.get('youtube',(req,res)=>{
    res.send('<h1> Rukmoddin Nabab Patel</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(process.env.PORT,()={
    
})