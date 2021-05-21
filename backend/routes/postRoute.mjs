import express from 'express'
import * as POST_CONTROLLER from '../controllers/postController.mjs'

const router = express.Router()

router
  .route('/')
  .get(POST_CONTROLLER.getAllPosts) //protected
  .post(POST_CONTROLLER.addNewPost)

export default router
