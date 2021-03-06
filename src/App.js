import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import AuthContextProvider from './contexts/contextType/authContexts';
import Dashboard from './pages/dashboard';
import NoAuth from './pages/auth/noAuth';
import Footer from './components/Footer';
import Video from './pages/Video.js';
import About from './pages/About.js';
import HowItWorks from './pages/HowItWorks.js'
import Contact from './pages/Contact.js';

function App(){
  return (  
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/video" component = {Video} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/auth/noAuth' component={NoAuth} />
          <Route exact path='/HowItWorks' component={HowItWorks}/>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
 
export default App;
