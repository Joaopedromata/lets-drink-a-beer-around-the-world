import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Filters from './pages/Filters'
import Landing from './pages/Landing'
import Shuffle from './pages/Shuffle'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/shuffle" component={Shuffle} />
                <Route path="/filter" component={Filters} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes