import { useState } from 'react'

import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/headerComponent'
import EmployeeComponent from './components/EmployeeComponent'



function App() {
  
  return (
    <>
     <BrowserRouter>
        <HeaderComponent />
      <Routes>
         {/* // http://localhost:5173 */}
        <Route path ='/' element = {<ListEmployeeComponent />}></Route>
        {/* // http://localhost:5173/employees */}
        <Route path ='/employees' element = {<ListEmployeeComponent />}></Route> 
          {/* // http://localhost:5173/add-employee */}
        <Route path ='/add-employees' element = {<EmployeeComponent />}></Route> 
        
           {/* // http://localhost:5173/employees/update-employees */}
          <Route path ='/update-employees/:id' element = {<EmployeeComponent />}></Route> 
          </Routes>
           
       
      </BrowserRouter>
   

    </>
  )
}

export default App
