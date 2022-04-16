import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Table() {
    let [isLoading, setIsLoading] = useState(true);
    let [students, setStudents] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/students')
            .then((response) => response.json())
            .then((json) => {
                setStudents(json.data.students);
                console.log(students);
                setIsLoading(false);
            });
    }, []);

    function deleteUser(id) {
        fetch('http://localhost:3000/api/v1/students/' + id, {
            method: 'DELETE',
        });
        setStudents(
            students.filter((data) => {
                console.log(data._id === id);
            })
        );
    }

    return (
        <div>
            <h2>A basic HTML table</h2>

            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>From</th>
                        <th>Program</th>
                        <th>Group</th>
                        <th>Keisti informaciją</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading &&
                        students.map((data) => (
                            <tr key={data._id}>
                                <td>{data.firstName}</td>
                                <td>{data.lastname}</td>
                                <td>{data.date}</td>
                                <td>{data.city}</td>
                                <td>{data.program}</td>
                                <td>{data.group}</td>
                                <button
                                    onClick={() => {
                                        deleteUser(data._id);
                                    }}
                                    className='col-6 btn btn-danger'
                                >
                                    <FaTrash />
                                </button>
                                <button
                                    type='button'
                                    className='col-6 btn btn-warning'
                                >
                                    <FaEdit />
                                </button>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
