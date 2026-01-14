

import React from 'react'
import { Table } from 'react-bootstrap'

const ArrayListing = () => {

    const userInfo = [
        {name: 'Munim', email: 'munim@gmail.ocm', age: 24},
        {name: 'Rafi', email: 'rafi@gmail.com', age: 26},
        {name: 'Sakib', email: 'sakib@gmail.com', age: 25},
        {name: 'Jahid', email: 'jahid@gmail.com', age: 27},
    ];
  return (
     <>
   <h2>User Information</h2>
   <Table  variant='dark' striped bordered hover>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        {userInfo.map((user) => (
            <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
            </tr>
        ))}
    </tbody>
   </Table>
   </>
  )
}

export default ArrayListing
