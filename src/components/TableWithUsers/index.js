import React from 'react';

function TableWithUsers(props) {
    console.log("inside table with users", props);
    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th onClick={(e) => {
                        props.handler();
                    }} scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB (Yr-Mo-D)</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredUsers.map(result => (
                    <tr key={result.id}>
                        <td><img src={result.picture} alt={result.name} /></td>
                        <td>{result.name}</td>
                        <td>{result.phone}</td>
                        <td><a href={`mailto:${result.email}`}>{result.email}</a></td>
                        <td>{result.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableWithUsers; 