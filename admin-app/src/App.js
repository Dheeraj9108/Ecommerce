import React ,{useEffect} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useSelector,useDispatch } from 'react-redux';
import { isUserLogedIn } from './actions';
import Products from './container/Products';
import Orders from './container/Orders';
import Category from './container/Categoty';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLogedIn())
    }
    // eslint-disable-next-line
  },[])


  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
          <Route exact path='/products' element={<PrivateRoute><Products/></PrivateRoute>}></Route>
          <Route exact path='/category' element={<PrivateRoute><Category/></PrivateRoute>}></Route>
          <Route exact path='/orders' element={<PrivateRoute><Orders/></PrivateRoute>}></Route>
          <Route exact path='/signin' element={<Signin />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
    </div>
  );
}

export default App;
