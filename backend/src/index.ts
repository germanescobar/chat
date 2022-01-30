import * as dotenv from "dotenv"
import express, { Express, Request, Response } from 'express'

dotenv.config()

const PORT = process.env.PORT

const app: Express  = express()

console.log(process.env.TEST)

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "success" });
} );

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))