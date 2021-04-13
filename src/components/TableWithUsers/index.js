import React from 'react';

function TableWithUsers(props) {
    console.log("inside table with users", props);
    return (
        <table bordered hover striped class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th onClick={(e) => {
                        props.handler();
                    }} scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(result => (
                    <tr key={result.id}>
                        <td><img src={result.picture} alt={result.name} /></td>
                        <td>{result.name}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableWithUsers; 