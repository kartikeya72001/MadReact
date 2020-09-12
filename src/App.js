import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import AuthContextProvider from './contexts/contextType/authContexts';
import Dashboard from './pages/dashboard';
import NoAuth from './pages/auth/noAuth';
import Navbar from './components/Navbar';

function App(){
  return (  
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/auth/noAuth' component={NoAuth} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
 
export default App;
