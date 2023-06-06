const express = require('express')
require('./database/db.js')
const DefaultData = require('./default.js')
app = express()

app.use(express.json())
app.listen(8000 , () => console.log("Server Has Started"))
DefaultData()