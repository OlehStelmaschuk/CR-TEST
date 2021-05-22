import { FC, Fragment } from 'react'
import Head from 'next/head'

interface ILayout {
  title: string
  container?: boolean
}

const PageLayout: FC<ILayout> = ({ title, container, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {container ? <div className={'container'}>{children}</div> : children}
    </Fragment>
  )
}

PageLayout.defaultProps = {
  title: 'CR-TEST',
  container: true,
}

export { PageLayout }
