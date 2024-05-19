import axios from "axios";
import React, { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
//const REST_API_BASE_URL= "http://localhost:8080/api/employees";

const ListEmployeeComponent = () => {

   const [employees, setEmployee] = useState([])

       useEffect(() => {
       //fetchData(); // Call the function directly
       getData();

  }, []);


  


  const [deletedEmployees, deleteData] = useState([])

  useEffect(()=>{
      deleteData();
  },[])
  // const fetchData = async () => {
  //   try {
  //     //const response = await axios.get("REST_API_BASE_URL");
  //      await fetch("http://localhost:8080/api/employees")
  //      .then(response => response.json())
  //      .then(recievedData => setEmployee(recievedData));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
const getData=async ()=>{
  try{
  const empList = await axios.get("http://localhost:8080/api/employees");
  setEmployee(empList.data)
  //console.log(empList)
  console.log(empList.data)
  // .then(response=> response.json())
  // recievedData => setEmployee(recievedData);
}catch(error){
  console.error(error);
}  
}






 
   
  //console.log("employees");
    // const dummyData=[{
    //     "id":1,
    //   "firstName":"sumit",
    //   "lastName": "mane",
    //   "email": "sumit@gmail.com"

    // },  

    // {
    //     "id":2,
    //   "firstName":"sid",
    //   "lastName": "kumbhar",
    //   "email": "sid2gmail.com"

    // },

    // {
    //     "id":3,
    //   "firstName":"sharad",
    //   "lastName": "patil",
    //   "email": "sharad@gmail.com"

    // }

    const navigator = useNavigate();

   function addEmployee(){
      navigator('/add-employees')
   }

   function updateEmployee(id){ 
    navigator(`/update-employees/${id}`)
   }


  return (
    <div className='container'>
        <h2 className="text-center">List Of Employees</h2>  
        <button className='btn btn-primary btn-sm mb-2' onClick={addEmployee}>Add Employee</button>
        <table className="table table-light table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
employees.map(ListEmployee=>
    <tr key={ListEmployee.id}>
       <td>{ListEmployee.id}</td>
      <td>{ListEmployee.firstName}</td>
      <td>{ListEmployee.lastName}</td>
      <td>{ListEmployee.email}</td>
      <td><button type="submit" id ="update" onClick = {()=> updateEmployee(ListEmployee.id)}>Update </button>
      <button type="submit" id ="delete"> Delete </button> 
      </td>
      
    </tr>)
    }
    
  </tbody>
</table>


      
    </div>
  )
}

export default ListEmployeeComponent
