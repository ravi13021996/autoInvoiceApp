const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())
app.post('/login', (req, res) => {

})



app.listen(4000, (req, res) => {
    console.log("server is running at 4000")
})