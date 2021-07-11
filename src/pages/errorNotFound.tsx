import { FunctionComponent } from 'react'

// styles
import styles from './errorNotFound.module.css'

const ErrorNotFoundPage: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <p>This page could not be found.</p>
    </div>
  )
}

export default ErrorNotFoundPage
