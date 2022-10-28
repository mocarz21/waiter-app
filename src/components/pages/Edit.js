import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { getTableData } from '../../redux/modifyRedux'
import { editTableRequest, deleteTableRequest } from '../../redux/modifyRedux'
import { useNavigate } from "react-router-dom";




const Edit =() =>{
    let navigate = useNavigate();
    const {id} =useParams()
    
    const findTable =useSelector(store=>{
        return getTableData(store,id)}) || {};

    const [table, setTable] = useState(findTable.id)
    const [people, setPeople] = useState(findTable.people)
    const [status, setStatus] = useState(findTable.status)
    const [price, setPrice] = useState(findTable.price)
    const [maxPeople, setMaxPeople] = useState(findTable.maxPeople)

    const dispatch = useDispatch()

    const runSubmit =(event) => { 
        event.preventDefault()
        dispatch(editTableRequest({table, people, status, price, maxPeople,id}))
        navigate('/');

    }
    const runDeleteTable= () => {

        dispatch(deleteTableRequest({id}))
        navigate('/');

    }
    
    return(
        <Container>
            
            <Form onSubmit={runSubmit}>
                <h1>TABLE {table}</h1>
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
                <Form.Group as={Row} className="mb-2">
                <Col sm={{ span: 10, offset: 3 }}>
                    <Button  type="submit">Update</Button>
                </Col>
                <Col style={{margin: "5px"}} sm={{ span: 10, offset: 3 }}>
                    <Button  type="button" onClick={runDeleteTable}>DELETE</Button>
                </Col>
                </Form.Group>
            </Form>
        </Container>
    )


}

export default Edit;