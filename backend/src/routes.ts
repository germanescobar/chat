import express, { NextFunction, Request, Response } from 'express'
import redis from './redis'
import Message from './models/Message'
import Room from './models/Room'
import { IRoom } from './types'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ status: 'success' })
})

router.get('/rooms', async (req: Request, res: Response, next: NextFunction) => {
  try {
    let rooms = JSON.parse(await redis.get("rooms"))
    if (!rooms) {
      rooms = await Room.find({})
      await redis.set('rooms', JSON.stringify(rooms))
    }
    
    res.json(rooms)
  } catch (e) {
    next(e)
  }
})

router.get('/rooms/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    let room: IRoom = JSON.parse(await redis.get(`rooms:${id}`))
    if (!room) {
      room = await Room.findById(id) 
      await redis.set(`rooms:${id}`, JSON.stringify(room), { EX: 300 })
    }
    
    res.json(room)
  } catch (e) {
    next(e)
  }
})

router.get('/rooms/:id/messages', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const messages = await Message.find({ room: id })
    res.json(messages)
  } catch (e) {
    next(e)
  }
})

router.post('/rooms/:id/messages', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const message = await Message.create({ ...req.body, room: id })
    res.json(message)
  } catch (e) {
    next(e)
  }
})

export default router
