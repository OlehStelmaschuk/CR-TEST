import express from 'express'
import postRoute from './postRoute.mjs'

const apiRouter = express.Router()
apiRouter.use('/posts', postRoute)

export default apiRouter
