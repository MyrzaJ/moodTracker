import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Route, Routes, Redirect} from 'react-router-dom'
import {Button } from 'react-bootstrap'
import Modal from '../src/components/modal/Modal'
import Mood from './components/Mood/Mood';
import Auth from './components/auth/Auth';
import './App.css';
import Logout from './components/logout/Logout';

class App extends Component {
 
 render() {
  const[modalActive,setModalActive]= useState(true)

  let routes = (
    <Routes>
    <Route path='/signin' element={<Auth/>}/>
    <Redirect to='/'/>
  </Routes>
  )
if (this.props.isAuthenticated){
  routes = (
    <Routes>
    <Route path='/signin' element={<Auth/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Redirect to='/'/>

  </Routes>
  )
}

  return (
    <div className="App">
      <header className="App-header">
             Mood Tracker
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        <Mood/>
      </Modal>
      <Button variant="primary" size="lg" active   onClick={()=> setModalActive(true)}>
    Primary button
  </Button>{' '}
  <Link to='/signin'>
  <Button variant="primary" size="lg" >
    Sign In
  </Button>
  </Link>
 {routes}
    </div>
  );
}
}
 function mapStateToProps(state){
   return{
     isAuthenticated: !!state.auth.token
   }
 }

export default connect(mapStateToProps) (App);
