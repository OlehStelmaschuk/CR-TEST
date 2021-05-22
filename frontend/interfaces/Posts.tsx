export interface IPost {
  author: string
  message: string
}

export interface IForm extends IPost {
  err: {
    author: {
      empty?: boolean
      incorrectSym?: boolean
    }
    message: {
      empty?: boolean
      httpMessage?: boolean
    }
  }
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
