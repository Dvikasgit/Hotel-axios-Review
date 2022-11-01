import express from 'express'
import route from './Routes/admin.js'
import './Db/Connection.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(route)
app.use(cors())

const port = 3030

app.listen(3030)
console.log("server invked at http://localhost:3030")