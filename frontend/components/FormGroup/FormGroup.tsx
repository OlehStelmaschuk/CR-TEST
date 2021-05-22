import {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useState,
  useEffect,
  memo,
} from 'react'
import styles from './FormGroup.module.css'
import { addNewPost } from '@/reduxStore/actions/postAction'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { IForm, IPost } from '@/interfaces/Posts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormGroup: FC = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState<IForm>({
    err: {
      author: {},
      message: {},
    },
    author: '',
    message: '',
  })

  useEffect(() => {
    setForm({
      ...form,
      message: localStorage.getItem('message')
        ? String(localStorage.getItem('message'))
        : '',
      author: localStorage.getItem('author')
        ? String(localStorage.getItem('author'))
        : '',
    })
  }, [])

  const validation = ({ author, message }: IPost) => {
    const err: any = { author: {}, message: {} }
    const reName = /^[\s\w]+$/
    const reHTTP = /(?:(?:https?):\/\/)/
    if (!author) err.author.empty = true
    else if (!author.match(reName)) err.author.incorrectSym = true
    if (!message) err.message.empty = true
    if (message.match(reHTTP)) err.message.httpMessage = true
    setForm({ ...form, err: err })
    return _.isEmpty(err.author) && _.isEmpty(err.message)
  }

  const sendForm = (form: IForm) => {
    form.author = form.author.trim()
    form.message = form.message.trim()
    if (validation(form)) {
      dispatch(addNewPost(form))
      setForm({ ...form, message: '' })
      localStorage.setItem('message', '')
    }
  }

  const changeFormHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      err: { ...form.err, [e.target.name]: '' },
    })
    localStorage.setItem(e.target.name, e.target.value)
  }

  const ctrlEnterHandler = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.keyCode === 13 && e.ctrlKey) sendForm(form)
  }

  return (
    <div className={styles.form}>
      <span className={styles.formHeader}>Guestbook form</span>
      <div className={styles.formInputGroup}>
        <span>Author:</span>
        <input
          type='text'
          name={'author'}
          value={form.author}
          onChange={changeFormHandler}
          onKeyDown={ctrlEnterHandler}
        />
        <div className={styles.formErrorBlock}>
          {form.err.author.empty && 'Field is empty'}
          {form.err.author.incorrectSym &&
            'Latin symbols, number and _ are allowed'}
        </div>
      </div>
      <div className={styles.formInputGroup}>
        <span>Message:</span>
        <textarea
          rows={6}
          name={'message'}
          value={form.message}
          onChange={changeFormHandler}
          onKeyDown={ctrlEnterHandler}
        />
        <div className={styles.formErrorBlock}>
          {form.err.message.empty && 'Field is empty'}
          {form.err.message.httpMessage && 'URL Link is not allowed'}
        </div>
      </div>
      <button className={styles.btn} onClick={() => sendForm(form)}>
        Send
      </button>
      <ToastContainer
        hideProgressBar
        closeOnClick
        draggable={false}
        autoClose={3000}
      />
    </div>
  )
}

export default memo(FormGroup)
