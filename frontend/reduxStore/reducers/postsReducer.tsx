import * as TYPE from '@/reduxStore/constants/postsConstants'
import { IPostState } from '@/interfaces/Posts'
import { PayloadAction } from '@reduxjs/toolkit'

export const postsReducer = (
  state: IPostState = { posts: [], loading: false },
  { type, payload }: PayloadAction
) => {
  switch (type) {
    case TYPE.START_REQUEST:
      return { ...state, loading: true }
    case TYPE.LOADING_DATA: {
      return { ...state, posts: payload, loading: false }
    }
    case TYPE.POST_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
