// pages
import MIPPythonHomePage from '../pages/home'
import MIPPythonAddPage from '../pages/add'

// types
import { Routes } from '../../../config/types'

// env
import env from './env'

const MIPPythonRoutes: Routes = {
  MIPPython: { path: env.BASE_ROUTE, page: <MIPPythonHomePage /> },
  MIPPythonAdd: { path: `${env.BASE_ROUTE}/add`, page: <MIPPythonAddPage /> }
}

export default MIPPythonRoutes
