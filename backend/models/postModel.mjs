import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    message:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('post', postSchema)

export default Post
