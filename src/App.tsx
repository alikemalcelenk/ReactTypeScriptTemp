import { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// routes
import { ROUTES } from './config/routes'

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {Object.keys(ROUTES).map((key) => {
          const { path, page } = ROUTES[key]
          return <Route exact key={key} path={path} render={() => page} />
        })}
      </Switch>
    </Router>
  )
}

export default App
