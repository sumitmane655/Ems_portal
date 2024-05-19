import axios from "axios"


const REST_API_bASE_URL = 'http://localhost:8080/api/employees';
export const createEmployee =   (employee)=> axios.post(REST_API_bASE_URL, employee);