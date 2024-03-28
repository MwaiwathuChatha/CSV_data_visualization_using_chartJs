// eslint-disable-next-line no-unused-vars
import * as React from "react";
import {Routes, Route} from 'react-router-dom'
import CreateGraph from './pages/CreateGraph';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignUp />} />
      <Route path='/creategraph' element={<CreateGraph />} />
    </Routes>
  )
} 

export default App