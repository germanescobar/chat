import * as mongoose from 'mongoose'
import { IRoom } from '../types'


const schema = new mongoose.Schema<IRoom>({
  name: String,
})

export default mongoose.model<IRoom>('Room', schema)
