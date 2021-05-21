import express from 'express'
import apiRouter from './backend/routes/index.mjs'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import connectDB from './backend/config/db.mjs'
import * as middleware from './backend/middleware/index.mjs'
import * as path from 'path'

const __dirname = path.resolve()
dotenv.config()
await connectDB()
const app = express()
app.use(cors())

app.use(express.json())

app.use('/api', apiRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/out')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'out', 'index.html'))
  )
}

app.use(middleware.notFound)
app.use(middleware.errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`)
})
