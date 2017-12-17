const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const contacts = require('../contacts')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/',contacts)
module.exports=app