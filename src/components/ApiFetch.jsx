
import React, {useState, useEffect, use} from 'react'

const ApiFetch = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, []);
  return (
   <>
   <h2>Api Calling</h2>
   <table border={1}>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Geo-Lat</th>
        </tr>
    </thead>

    <tbody>
        {data.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.address.geo.lat}</td>
            </tr>
        ))}
    </tbody>
   </table>
   </>
  )
}

export default ApiFetch
