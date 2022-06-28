import React ,{useEffect} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useSelector,useDispatch } from 'react-redux';
import { isUserLogedIn } from './actions';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLogedIn())
    }
  },[])


  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
          <Route exact path='/signin' element={<Signin />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
    </div>
  );
}

export default App;
