import { ChangeEvent, KeyboardEvent, FC, useState, useEffect } from 'react'
import styles from './FormGroup.module.css'
import { addNewPost } from '@/store/actions/postAction'
import { useDispatch } from 'react-redux'
import { IPost } from '@/interfaces/Posts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormGroup: FC = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<IPost>({
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

  const validation = ({ author, message }: IPost): boolean => {
    const err: string[] = []
    const reName = /^[\s\w]+$/
    const reHTTP = /(?:(?:https?):\/\/)/
    if (!author || !message) {
      let labels: string = ''
      !author && (labels += 'Author; ')
      !message && (labels += 'Message; ')
      err.push(`Field are empty: ${labels}`)
    } else if (!author.match(reName))
      err.push('Author: Latin, number and underscore symbols are allowed')
    if (message.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed')
    if (err.length !== 0) err.map((item) => toast.error(item))
    return err.length === 0
  }

  const sendForm = (form: IPost) => {
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
    setForm({ ...form, [e.target.name]: e.target.value })
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

export default FormGroup
