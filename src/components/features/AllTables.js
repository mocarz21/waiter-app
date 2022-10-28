import { useSelector} from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'

const AllTables = () => {

    const tables =useSelector(store=> {
        return store.table
    })
    return(
        <div className="d-flex justify-content-center flex-wrap">
        {tables.map(table=>
        <Card  bg={ 'light' } key={table.id} border="primary" style={{ width: '38rem', margin: '2rem'}}>
            <Card.Header>TABLE {table.id}</Card.Header>
            <Card.Body >
                <Card.Title>{table.status}</Card.Title>
            </Card.Body>
            <Button as={NavLink} to={'/edit/' + table.id} variant="outline-success">Edit</Button>{' '}
        </Card>
            )}
        </div>
    )
}

export default AllTables;