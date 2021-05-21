import * as TYPE from '@/store/constants/postsConstants'
import { IPost } from '@/interfaces/Posts'
import { AppThunk } from '@/store/hooks'
import axios from 'axios'
import { toast } from 'react-toastify'

export const addNewPost =
  (post: IPost): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: TYPE.START_REQUEST,
    })

    try {
      await axios.post('http://localhost:5000/api/posts', post)

      const { data: allData } = await axios.get(
        'http://localhost:5000/api/posts'
      )
      dispatch({
        type: TYPE.LOADING_DATA,
        payload: allData,
      })
      toast.success('Message send')
    } catch (err) {
      dispatch({
        type: TYPE.POST_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      })
      toast.error(err.response.data.message)
    }
  }

export const loadPosts = (): AppThunk => async (dispatch) => {
  dispatch({
    type: TYPE.START_REQUEST,
  })
  try {
    const { data } = await axios.get('http://localhost:5000/api/posts')
    dispatch({
      type: TYPE.LOADING_DATA,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TYPE.POST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}
