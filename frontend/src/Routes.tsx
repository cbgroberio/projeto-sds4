import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
//componente utilizado para definir rotas de serviço/paginas 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"exact >
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        
        </BrowserRouter>
  
    );
  }
  
  export default Routes;