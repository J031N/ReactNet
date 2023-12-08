import React from 'react';
import{BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import Banner from './Components/Banner';
import Login from './Components/Login';
import Home from './Components/Home';
import Sign from './Components/Sign';
function App() {
  
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<Sign/>}/>
          
        </Routes>
      </Router> 
   
         </div>
  )
}

export default App;
