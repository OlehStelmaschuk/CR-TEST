import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.mjs'

// @desc Get all posts
// @route GET /api/posts
// @access Public
export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  posts.sort((a,b)=>b.createdAt-a.createdAt)
  res.json(posts)
})

// @desc Add new Post
// @route /api/posts/
// @access Public
export const addNewPost = asyncHandler(async (req, res) => {
  const { author, message } = req.body
  const postExist = await Post.findOne({ author, message })

  if (postExist) {
    res.status(400)
    throw new Error('Post already exists')
  }
  const reName = /^[\s\w]+$/
  const reHTTP = /(?:(?:https?):\/\/)/
  if (!author || !message) throw new Error('Fields are empty')
  else if (!author.match(reName))
    throw new Error('Incorrect values in author')
  if (message.match(reHTTP)) throw new Error('URL Link are not allowed')


  const post = await Post.create({
    author,
    message
  })

  if (post) {
    res.json({
      _id: post._id,
      author: post.author,
      message: post.message,
      timestamp: post.createdAt
    })
  } else {
    res.status(400)
    throw new Error('Invalid post data')
  }
})