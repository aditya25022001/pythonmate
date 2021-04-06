import React from 'react'
import { ListGroup, Form, Card, Button } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';

export const FormToFill = () => {
   
   
    const setWeekdays = (name, value) => {
        return(
            <Card className='mr-auto text-center p-3' style={{ width:'100%' }}>
                <div>{name}</div>
                <div>    
                    <Form.Check type="checkbox"/>
                </div>
            </Card>
        )    
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
                    <Form.Control type="date" />
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Repeat Type</div>
                <div id='form-field-label-input'>
                   <Form.Control as="select">
                        <option value="None" >None</option>
                        <option value='Daily'>Daily</option>
                        <option value="weekly">Weekly</option>
                    </Form.Control>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }} id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Shift</div>
                <div id='form-field-label-input'>
                   <Form.Control as="select">
                        <option value="Morning Shift 5am to 9am" >Morning Shift 5am to 9am</option>
                    </Form.Control>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select Start Time</div>
                <div id='form-field-label-input'>
                    <Form.Control type="time" />
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ justifyContent:'space-between' }}  id='form-fields' className=' py-4 border-bottom-0'>
                <div style={{ fontWeight:500 }}  id='form-field-label'>Select End Time</div>
                <div id='form-field-label-input'>
                    <Form.Control type="time" />
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
                   <Form.Control as="select" multiple={true}>
                        <option value="0" >Sunday</option>
                        <option value='1'>Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </Form.Control>
                </div>
            </ListGroup.Item>
            <ListGroup.Item id='last-form'>
                <Form.Check type="checkbox" label="Weekdays Only?"></Form.Check>
                <Button className='ml-auto px-5 py-2' id='button'>
                    <AddIcon className='font-weight-bold'/>
                    Add
                </Button>
            </ListGroup.Item>
        </ListGroup>
    )
}
