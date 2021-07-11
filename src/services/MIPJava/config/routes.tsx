// pages
import MIPJavaHomePage from '../pages/home'
import MIPJavaAddPage from '../pages/add'

// types
import { Routes } from '../../../config/types'

// env
import env from './env'

const MIPJavaRoutes: Routes = {
  MIPJava: { path: env.BASE_ROUTE, page: <MIPJavaHomePage /> },
  MIPJavaAdd: { path: `${env.BASE_ROUTE}/add`, page: <MIPJavaAddPage /> }
}

export default MIPJavaRoutes
