import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import AuthRouter from './components/AuthRouter'
import Login from './routes/Login'
import Index from './routes/Index'
import './App.css';

function App() {
  return (
   <HashRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <AuthRouter path="/" component={Index}></AuthRouter>
      </Switch>
   </HashRouter>
  );
}

export default App;
