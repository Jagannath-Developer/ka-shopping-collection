
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import Register from './components/Register';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path="*" element={<div className='alert alert-danger p-5'>Not page Found 404</div>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
