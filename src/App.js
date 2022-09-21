import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Edit from './components/pages/Edit';
import { fetchTables } from './redux/modifyRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/views/Header'
import Footer from './components/views/Footer'
import Add from './components/pages/Add'

function App() {

  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(fetchTables())
  }, [dispatch]) //czemu zmienilismy useEffect(fetchTables(dispatch), [dispatch])  na    useEffect(() => fetchTables(dispatch), [dispatch])

  
  
  return (
    <>
      <Header/>
      <p>sadad</p>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/edit/:id" element={<Edit/>} />
          <Route path = "/add" element = {<Add/>} />
        </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
