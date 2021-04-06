import React from 'react'
import { Table } from 'react-bootstrap'
import { shifts } from './data'

export const ShowShifts = () => {
    
    const daysIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
        <div className='p-5'>
            <Table stripped bordered hover>
                <thead>
                    <th>Start Date</th>
                    <th>Shift</th>
                    <th>Shift Repeat</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Days</th>
                </thead>
                <tbody>
                    {shifts.map(s => (
                        <tr>
                            <td>{s.startDate}</td>
                            <td>{s.shift}</td>
                            <td>{s.repeatType}</td>
                            <td>{s.startTime}</td>
                            <td>{s.endTime}</td>
                            <td>{
                                s.days.map(day => (
                                    `${daysIndex[day]}, `
                                ))
                                }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    )
}
