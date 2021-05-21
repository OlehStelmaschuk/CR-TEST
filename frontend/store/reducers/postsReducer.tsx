import * as TYPE from '@/store/constants/postsConstants'
import { IPostState } from '@/interfaces/Posts'
import { PayloadAction } from '@reduxjs/toolkit'

export const postsReducer = (
  state: IPostState = { posts: [], loading: false, success: null },
  { type, payload }: PayloadAction
) => {
  switch (type) {
    case TYPE.START_REQUEST:
      return { ...state, loading: true, success: null }
    case TYPE.LOADING_DATA: {
      return { ...state, posts: payload, loading: false, success: true }
    }
    case TYPE.ADD_NEW_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
        success: true,
      }
    case TYPE.POST_FAIL:
      return { ...state, loading: false, success: false }

    default:
      return state
  }
}
