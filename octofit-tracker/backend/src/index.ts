import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' })
})

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log(`MongoDB connected at ${mongoUri}`)
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }

  console.log(`Backend listening on http://localhost:${port}`)
})
