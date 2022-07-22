import './App.css';
import HomePage from './container/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './container/ProductListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/:slug' element={<ProductListPage hellow={"hellow"}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
