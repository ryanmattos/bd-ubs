import express, { Router } from 'express'

import './database/connection'

import routes from './routes'

const app = express()
const cors = require('cors')

var corsOptions = {
   origin: '*',
   methods: ['GET', 'POST', 'DELETE', 'PUT'],
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
 }

app.use(express.json())
app.use(cors(corsOptions))
app.use(routes)

app.listen(3333, () => console.log('listening port 3333'))