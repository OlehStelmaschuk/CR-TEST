import { FC } from 'react'
import { connect } from 'react-redux'
import styles from './ListGroup.module.css'
import ListItem from '@/components/ListGroup/ListItem'
import { IListGroup } from '@/interfaces/Posts'
import { RootState } from '@/reduxStore/store'

const ListGroup: FC<IListGroup> = ({ posts }) => {
  return (
    <div className={styles.listGroup}>
      <span className={styles.listGroupHeader}>Latest posts</span>
      {posts.map((item) => (
        <ListItem author={item.author} message={item.message} key={item._id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  const {
    posts: { posts },
  } = state

  return { posts }
}

export default connect(mapStateToProps)(ListGroup)
