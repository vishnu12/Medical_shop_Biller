import React from 'react';
import { Home } from './pages/Home/Home';
import {Switch,Route} from 'react-router-dom'
import { PrintPage } from './pages/Print/PrintPage';

function App() {
  return (
    <>
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/print' component={PrintPage}/>
    </Switch>
    </>
  );
}

export default App;
