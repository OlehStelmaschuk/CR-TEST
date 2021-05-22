import { FC, useEffect } from 'react'
import { FormGroup, ListGroup, PageLayout } from '@/components/index'
import { loadPosts } from '@/reduxStore/actions/postAction'
import { useDispatch } from 'react-redux'

const Home: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <PageLayout title={'Guest book'}>
      <FormGroup />
      <ListGroup />
    </PageLayout>
  )
}

export default Home
