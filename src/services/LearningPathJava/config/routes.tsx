// pages
import LearningPathJavaHomePage from '../pages/home'
import LearningPathJavaAddPage from '../pages/add'

// types
import { Routes } from '../../../config/types'

// env
import env from './env'

const LearningPathJavaRoutes: Routes = {
  LearningPathJava: {
    path: env.BASE_ROUTE,
    page: <LearningPathJavaHomePage />
  },
  LearningPathJavaAdd: {
    path: `${env.BASE_ROUTE}/add`,
    page: <LearningPathJavaAddPage />
  }
}

export default LearningPathJavaRoutes
