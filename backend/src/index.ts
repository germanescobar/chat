import express, { Express, Request, Response } from 'express'

const app: Express  = express()

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "success" });
} );

app.listen(3001, () => console.log("Running ..."))