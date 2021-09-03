import React from 'react';
import { Home } from './pages/Home/Home';
import {Switch,Route} from 'react-router-dom'
import { PrintPage } from './pages/Print/PrintPage';
import { AddMedicine } from './components/Admin/AddMedicine';

function App() {
  return (
    <>
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/print' component={PrintPage}/>
   <Route path='/add-medicine' component={AddMedicine}/>
    </Switch>
    </>
  );
}

export default App;
