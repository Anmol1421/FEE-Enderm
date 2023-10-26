
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Login from './pages/Login';
import Sell from './pages/Sell';
import Navbar from './pages/navbar';
import Lease from './pages/Lease';
// import Rent from './pages/Rent';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sell' element={<Sell/>}/>
          <Route path='/rent' element={<Lease/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
