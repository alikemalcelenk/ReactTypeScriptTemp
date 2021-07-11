// pages
import EngineerJavaHomePage from '../pages/home'
import EngineerJavaAddPage from '../pages/add'

// types
import { Routes } from '../../../config/types'

// env
import env from './env'

const EngineerJavaRoutes: Routes = {
  EngineerJava: { path: env.BASE_ROUTE, page: <EngineerJavaHomePage /> },
  EngineerJavaAdd: {
    path: `${env.BASE_ROUTE}/add`,
    page: <EngineerJavaAddPage />
  }
}

export default EngineerJavaRoutes
