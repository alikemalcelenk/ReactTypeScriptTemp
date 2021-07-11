// pages
import LearningPathNodejsHomePage from '../pages/home'
import LearningPathNodejsAddPage from '../pages/add'

// types
import { Routes } from '../../../config/types'

// env
import env from './env'

const LearningPathNodejsRoutes: Routes = {
  LearningPathNodejs: {
    path: env.BASE_ROUTE,
    page: <LearningPathNodejsHomePage />
  },
  LearningPathNodejsAdd: {
    path: `${env.BASE_ROUTE}/add`,
    page: <LearningPathNodejsAddPage />
  }
}

export default LearningPathNodejsRoutes
