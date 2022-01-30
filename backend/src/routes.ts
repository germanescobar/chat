import express, { NextFunction, Request, Response } from 'express'
import Room from './models/Room'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ status: 'success' })
})

router.get('/chats', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chats = await Room.find({})
    res.json(chats)
  } catch (e) {
    next(e)
  }
})

export default router
