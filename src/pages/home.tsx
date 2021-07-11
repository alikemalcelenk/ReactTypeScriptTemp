import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import styles from './home.module.css'

// env files
import envEngineerJava from '../services/EngineerJava/config/env'
import envLearningPathJava from '../services/LearningPathJava/config/env'
import envMIPJava from '../services/MIPJava/config/env'
import envLearningPathNodejs from '../services/LearningPathNodejs/config/env'
import envMIPPython from '../services/MIPPython/config/env'

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>
        Microsoft FY22 Internship Project Client
      </span>
      <div className={styles.servicesBox}>
        <NavLink
          className={styles.serviceTitle}
          to={envEngineerJava.BASE_ROUTE}
        >
          <span>Engineer Java</span>
        </NavLink>

        <NavLink
          className={styles.serviceTitle}
          to={envLearningPathJava.BASE_ROUTE}
        >
          <span>Learning Path Java</span>
        </NavLink>

        <NavLink className={styles.serviceTitle} to={envMIPJava.BASE_ROUTE}>
          <span>MIP Java</span>
        </NavLink>

        <NavLink
          className={styles.serviceTitle}
          to={envLearningPathNodejs.BASE_ROUTE}
        >
          <span>Learning Path Node.js</span>
        </NavLink>

        <NavLink className={styles.serviceTitle} to={envMIPPython.BASE_ROUTE}>
          <span>MIP Python</span>
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage
