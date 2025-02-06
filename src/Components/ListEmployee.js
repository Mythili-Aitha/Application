import React, { useEffect, useState } from 'react'
import { ListEmployess } from './EmployeeService';

export default function ListEmployee() {

     const [employees, setEmployees] = useState([])

     useEffect(()=>{
        ListEmployess().then((res)=>{
            setEmployees(res.data)
        }).catch(error =>{
            console.log(error)
        })

     }, []);
  return (
    <div className='container'>
    <h2>List of Employee</h2>
    <table className='table table-stripped table-bordered'>
        <thead>
            <tr>
                <th>
                    Employee firstname
                </th>
                <th>
                    Employee lastname
                </th>
                <th>
                    Employee email
                </th>
                <th>
                    Employee phone
                </th>
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
