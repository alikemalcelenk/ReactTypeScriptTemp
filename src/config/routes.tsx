// routes
import EngineerJavaRoutes from '../services/EngineerJava/config/routes'
import LearningPathJavaRoutes from '../services/LearningPathJava/config/routes'
import LearningPathNodejsRoutes from '../services/LearningPathNodejs/config/routes'
import MIPJavaRoutes from '../services/MIPJava/config/routes'
import MIPPythonRoutes from '../services/MIPPython/config/routes'

// types
import { Routes } from './types'

export const ROUTES: Routes = {
  ...EngineerJavaRoutes,
  ...LearningPathJavaRoutes,
  ...LearningPathNodejsRoutes,
  ...MIPJavaRoutes,
  ...MIPPythonRoutes
}
