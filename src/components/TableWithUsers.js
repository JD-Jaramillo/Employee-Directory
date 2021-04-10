import React from 'react';

function TableWithUsers(props) {
    return (
        <table bordered hover striped class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr key={result.id}>
                        <td>{result.picture.thumbnail}</td>
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