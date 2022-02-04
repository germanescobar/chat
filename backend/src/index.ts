import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import redis from './redis'
import express, { Express } from 'express'
import cors from 'cors'
import routes from './routes'

dotenv.config()
mongoose.connect(process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/chat')
redis.connect().then(() => console.log("Conectado a redis ..."))

const { PORT } = process.env
const app: Express = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  }),
)
app.use(express.json())

app.use('/api', routes)

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))
