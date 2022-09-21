import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addTableRequest } from '../../redux/modifyRedux'
import Button from 'react-bootstrap/Button';





const Add =() =>{

    const [table, setTable] = useState('')
    const [people, setPeople] = useState('')
    const [status, setStatus] = useState('')
    const [price, setPrice] = useState('')
    const [maxPeople, setMaxPeople] = useState('')

    const dispatch = useDispatch()

    const runSubmit =(event) => { 
        event.preventDefault()
        dispatch(addTableRequest({table, people, status, price, maxPeople}))
        //navigate('/');

    }





    return(
        <Container>
            
        <Form onSubmit={runSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Table nr.
                </Form.Label>
                <Col sm={2}>
                    <Form.Control type="text" value={table} onChange={e=>setTable(e.target.value)}/>
                </Col>
            </Form.Group>
            
            
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    People / Max People
                </Form.Label>
                <Col sm={2}>
                    <Form.Control type="text" value={people} onChange={e=>setPeople(e.target.value)}/>
                </Col>
                    /
                <Col sm={2}>
                    <Form.Control type="text" value={maxPeople} onChange={e=>setMaxPeople(e.target.value)}/>
                </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Bill
                </Form.Label>
                <Col sm={2}>
                    <Form.Control type="text" value={price} onChange={e=>setPrice(e.target.value)}/>
                </Col>
            </Form.Group>
            <fieldset>
            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                Status
                </Form.Label>
                <Col sm={10}>
                <Form.Check
                    type="radio"
                    label="Reserved"
                    value="Reserved"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    onChange={e=>setStatus(e.target.value)}
                    checked= {status === "Reserved"}
                />
                <Form.Check
                    type="radio"
                    label="Free"
                    value="Free"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    onChange={e=>setStatus(e.target.value)}
                    checked= {status === "Free"}
                />
                <Form.Check
                    type="radio"
                    label="Cleaning"
                    value="Cleaning"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    onChange={e=>setStatus(e.target.value)}
                    checked= {status === "Cleaning"}
                />
                <Form.Check
                    type="radio"
                    label="Busy"
                    value="Busy"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios4"
                    onChange={e=>setStatus(e.target.value)}
                    checked= {status === "Busy"}
                />
                </Col>
            </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Button  type="submit">Update</Button>
            </Col>
            </Form.Group>
        </Form>
    </Container>
    )
    

    

}

export default Add;