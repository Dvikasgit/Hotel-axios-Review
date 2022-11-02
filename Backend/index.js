import express from 'express'
import './Db/Connection.js'
import cors from 'cors'
import route from './Routes/Route.js'

const app = express()
const port = 3030
app.use(cors())

app.use(express.json())
app.use(route)



app.listen(3030)
console.log("server invked at http://localhost:3030")