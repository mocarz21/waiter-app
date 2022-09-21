import AllTables from '../features/AllTables'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'

const Home = () =>{


    return(   
        <>     
            <AllTables/> 
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" as={NavLink} to={'/add'} style={{marginBottom: '350px'}}>
                    Add Table
                </Button>
            </div>
        </>
    )


}

export default Home