import express from 'express'
import cors from 'cors'
import path from 'path'

import REST from './api/rest'

const app = express()
const PORT = 8081

// access-control-allow-origin
var corsOptions = {
  origin: 'http://localhost:8888', // frontend url
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
   console.log("Got a GET request for the homepage")
   res.send('Hello GET')
})

// Static assets
app.use('/static', express.static(path.resolve(__dirname, '../public')))

// Add REST
app.use('/api', REST)

const server = app.listen(PORT, () => {

   let host = server.address().address
   let port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
