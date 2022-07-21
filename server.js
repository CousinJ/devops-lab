const express = require('express')
const app = express()
const path = require('path')


const cors = require('cors')
app.use(express.json())
app.use(cors());

const data1 = 'button 1 is working'
const data2 = 'button 2 is working'
const data3 = 'button 3 is working'


app.get('/api/data1', (req, res) => {
   
    res.status(200).send(data1)
})
//=============================================
app.get('/api/data2', (req, res) => {
   
    res.status(200).send(data2)
})
//============================================
app.get('/api/data3', (req, res) => {
   
    res.status(200).send(data3)
})
//================================================

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
