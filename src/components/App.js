import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercices from '../pages/Exercices'
import ExerciseNew from '../pages/ExerciseNew'
import Change from '../pages/Change'
import NotFound from '../pages/NotFound'
import Principal from '../pages/Principal'
import Gestion from '../pages/gestion'
import login from '../pages/login'
import vendedores from '../pages/vendedores'

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={login}/>
                <Route exact path="/vendedores" component={vendedores}/>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/permisos" component={Exercices}/>
                <Route exact path="/permisos/search" component={ExerciseNew}/>
                <Route exact path="/permisos/change" component={Change}/>
                <Route exact path="/permisos/gestion" component={Gestion}/>
                <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )


}
export default App