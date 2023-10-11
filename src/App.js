import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path = '/products' element={<Products/>}></Route>
      </Routes>

    </Router>
    // <Home/>

  );
}

export default App;
