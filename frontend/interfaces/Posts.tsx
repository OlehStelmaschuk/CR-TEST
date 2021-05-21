export interface IPost {
  author: string
  message: string
}

export interface IFrontPost extends IPost {
  timestamp: string
  _id: string
}

export interface IPostState {
  posts: Array<IPost>
  loading: boolean
  success: boolean | null
}

export interface IListGroup {
  posts: Array<IFrontPost>
}
