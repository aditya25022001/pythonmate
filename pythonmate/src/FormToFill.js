import React, { useState } from 'react'
import { ListGroup, Form, Card, Button } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

export const FormToFill = () => {
   
    const [weekdays, setWeekDays] = useState(false)
    const [startDate, setstartDate] = useState('')
    const [repeatType, setrepeatType] = useState('')
    const [shift, setshift] = useState('Morning Shift 5am to 9am')
    const [startTime, setstartTime] = useState('')
    const [endTime, setendTime] = useState('')
    const [days, setdays] = useState([])

    const setWeekdays = (name, value) => {
        return(
            <Card className='mr-auto text-center p-3' style={{ width:'100%' }}>
                <div>{name}</div>
                <div>    
                    <Form.Check type="checkbox" value={value} checked={days.includes(value)} onChange={e => setdays([...days,value])}/>
                </div>
            </Card>
        )    
    }

    const weekdaysHandler = (e) => {
        setdays([0,6])
        setWeekDays(true)
    }

    const submitHandler = (e) => {
        console.log({weekdays, startDate, repeatType, shift, startTime, endTime, days})
        setWeekdays(false)
        setrepeatType('')
        setstartTime('')
        setendTime('')
        setdays('')
    }

    return (
        <ListGroup>
            <ListGroup.Item className='py-4 border-bottom-0'>
                <b style={{ fontSize:20 }}>Select Start Date & Shift Times</b>
                <div className='font-weight-light'>each row represent a shift</div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Start Date</div>
                <div id='form-field-label-input'>
                    <Form.Control type="date" value={startDate} onChange={e => setstartDate(e.target.value)} />
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Repeat Type</div>
                <div id='form-field-label-input'>
                   <Form.Control as="select" value={repeatType} onChange={e => setrepeatType(e.target.value)}>
                        <option value='Daily'>Daily</option>
                        <option value="None" >None</option>
                        <option value="weekly">Weekly</option>
                    </Form.Control>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }} id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Shift</div>
                <div id='form-field-label-input'>
                   <Form.Control as="select" value={shift} onChange={e => setshift(e.target.value)}>
                        <option value="Morning Shift 5am to 9am" >Morning Shift 5am to 9am</option>
                    </Form.Control>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Start Time</div>
                <div id='form-field-label-input'>
                    <Form.Control type="time" onChange={e => setstartTime(e.target.value)}/>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select End Time</div>
                <div id='form-field-label-input'>
                    <Form.Control type="time" onChange={e => setendTime(e.target.value)}/>
                </div>
            </ListGroup.Item>
            <ListGroup.Item id='weekdays' className='pb-4 border-bottom-0'>
                {setWeekdays('Monday',1)}
                {setWeekdays('Tuesday',2)}
                {setWeekdays('Wednesday',3)}
                {setWeekdays('Thursday',4)}
                {setWeekdays('Friday',5)}
                {setWeekdays('Saturday',6)}
                {setWeekdays('Sunday',0)}
            </ListGroup.Item>
            <ListGroup.Item id='mobile-weekdays' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Weekdays</div>
                <div id='form-field-label-input'>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(0)} value={0} onChange={e => setdays([...days,0])}/>Sunday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(1)} value={1} onChange={e => setdays([...days,1])}/>Monday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(2)} value={2} onChange={e => setdays([...days,2])}/>Tuesday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(3)} value={3} onChange={e => setdays([...days,3])}/>Wednesday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(4)} value={4} onChange={e => setdays([...days,4])}/>Thursday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(5)} value={5} onChange={e => setdays([...days,5])}/>Friday</div>
                    <div className='d-flex flex-direction-row'><Form.Check type='checkbox' checked={days.includes(6)} value={6} onChange={e => setdays([...days,6])}/>Saturday</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item id='last-form'>
                <Form.Check type="checkbox" label="Weekdays Only?" onChange={e => weekdaysHandler(e)}></Form.Check>
                <Button className='ml-auto px-5 py-2' id='button' onClick={e => submitHandler(e)}>
                    <AddIcon className='font-weight-bold'/>
                    Add
                </Button>
                <Button className='ml-auto px-5 py-2' id='button'>
                    <Link to='/shifts' style={{ textDecoration:'none', color:'white' }}>
                        Show Shifts
                    </Link>
                </Button>
            </ListGroup.Item>
        </ListGroup>
    )
}
