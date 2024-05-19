
import React, { useState } from 'react'
import '../style/employeecomponent.css';
const EmployeeUpdate = () => {

    const [updatedEmployees, update] = useState([])

  useEffect(()=>{
      updateEmp();
  },[])
    // const [id] = useState('')
    const [firstName, setFirstName] = useState('') 
     const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function handleFirstName(e){
        setFirstName(e.target.value);
      
      }
      
      function handleLastName(e){
        setLastName(e.target.value);
      
      }
      
      function handleEmail(e){
        setEmail(e.target.value);
      
      }
      
    //   function updateEmployee(e){
    //     e.preventDefault();
    //     const employee = {id,firstName,lastName,email}
       
    //     createEmployee(employee).then((response)=>{
    //       console.log(response.data);``
    //       console.log(employee.data); 
    //       navigator('/employees');
    //     })
       
    //   }
      
      const updateEmp= async()=>{
        try{
      
          const updateEmp = await axios.put("http://localhost:8080/api/employees");
          update(updateEmp.data)
          console.log(updateEmp.data)
      
        }catch(error){
          console.error(error);
        }
      }

    
    return (
        <div className='container'>
            <h1>Update Emplo</h1>
            <form className='form'>

                <div>
                    <label htmlFor="firstname" className="">
                        First Name
                    </label>
                    <input type="text" placeholder="Enter the first name" id="firstname" value={firstName}
                        onChange={handleFirstName} />
                </div>
                <div>
                    <label htmlFor="lastName" className="">
                        Last Name
                    </label>
                    <input type="text" placeholder="Enter the last name" id="lastName" value={lastName}
                        onChange={handleLastName} />
                </div>

                <div>
                    <label htmlFor="email" className="email-input">
                        Email
                    </label>
                    <input type="email" placeholder="Enter the Email" id="email" value={email}
                        onChange={handleEmail} />
                </div>
                <button type="submit" className="button1" onClick={updateEmp} >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default EmployeeUpdate



