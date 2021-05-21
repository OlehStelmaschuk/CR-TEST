import { FC, memo } from 'react'
import styles from './ListItem.module.css'

interface IListItem {
  author: string
  message: string
}

const ListItem: FC<IListItem> = ({ author, message }) => {
  console.log(`rendered ${author} ${message}`)
  return (
    <div className={styles.listItem}>
      <span className={styles.ListItemAuthor}>Author: {author}</span>
      <p className={styles.ListItemMessage}>{message}</p>
    </div>
  )
}

export default memo(ListItem)
