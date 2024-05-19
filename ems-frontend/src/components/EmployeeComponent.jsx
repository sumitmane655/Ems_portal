import React, { useState } from 'react';
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import '../style/employeecomponent.css';



const employee = {

};

const EmployeeComponent = () => {

  const [firstName, setFirstName]= useState('')
const [lastName, setLastName]= useState('')
const [email, setEmail]= useState('')


function handleFirstName(e){
  setFirstName(e.target.value);

}

function handleLastName(e){
  setLastName(e.target.value);

}

function handleEmail(e){
  setEmail(e.target.value);

}

function saveEmployee(e){
  e.preventDefault();
  const employee = {firstName,lastName,email}
 
  createEmployee(employee).then((response)=>{
    console.log(response.data);
    console.log(employee); 
    navigator('/employees');
  })
 
}

const navigator = useNavigate();


createEmployee(employee).then((response)=>{
  console.log(response.data);
  navigator('/employees');
})



  return (
    <div id='container'>
      <form className='form'>
       
        <div>
        <label htmlFor="firstname" className="">
            First Name
          </label>
          <input type ="text" placeholder = "Enter the first name" id="firstname" value={firstName}
            onChange={handleFirstName}/>
        </div>
        <div>
        <label htmlFor="lastName" className="">
            Last Name
          </label>
          <input type ="text" placeholder = "Enter the last name" id="lastName" value={lastName}
            onChange={handleLastName}/>
        </div>

        <div>
        <label htmlFor="email" className="email-input">
            Email
          </label>
          <input type ="email" placeholder = "Enter the Email" id ="email" value={email}
            onChange={handleEmail}/>
        </div>
        <button type="submit" className="button1" onClick={saveEmployee} >
          Submit
        </button>
        
      </form>
    </div>
    
  );
};

export default EmployeeComponent;