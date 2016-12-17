import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import API from './api/router'
import dbConfig from './db.json'

const app = express()
const PORT = 8081

mongoose.connect(`mongodb://${dbConfig.user}:${dbConfig.pass}${dbConfig.url}`) // connect to our database

// access-control-allow-origin
var corsOptions = {
  origin: 'http://localhost:8888', // frontend url
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// support json encoded bodies
app.use(bodyParser.json())

// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Static assets
app.use('/static', express.static(path.resolve(__dirname, '../public')))

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
   console.log("Got a GET request for the homepage")
   res.send('Hello GET')
})

// Add API
app.use('/api', API)

const server = app.listen(PORT, () => {

   let host = server.address().address
   let port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
