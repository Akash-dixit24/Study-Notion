import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from './pages/Dashboard';
import { useState } from 'react';


function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);



  return (
    <div className="w-screen h-screen bg-black flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />


        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>

    </div>

  )
}

export default App;
