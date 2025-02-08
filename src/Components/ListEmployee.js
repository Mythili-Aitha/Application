import React, { useEffect, useState } from 'react'
import { ListEmployess } from './EmployeeService';
import { useNavigate } from 'react-router-dom'


export default function ListEmployee() {

     const [employees, setEmployees] = useState([])
     const navigator = useNavigate()

     useEffect(()=>{
        ListEmployess().then((res)=>{
            setEmployees(res.data)
        }).catch(error =>{
            console.log(error)
        })

     }, []);

     function addNewEmployee(){
        navigator("/add-employee")
     }
  return (
    <div className='container'>
    <h2>List of Employee</h2>
    <button className='btn btn-primary mb-2 ' onClick={addNewEmployee}>Add Employee</button>
    <table className='table table-stripped table-bordered'>
        <thead>
            <tr>
                <th>Employee firstname</th>
                <th>Employee lastname</th>
                <th>Employee email</th>
                <th>Employee phone</th>
            </tr>
        </thead>
        <tbody >
            {employees.map(employee =>
                <tr key={employee.id}>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>

                </tr>
            )}
            
        </tbody>
    </table>
    </div>
  )
}
