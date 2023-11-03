import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [count, setCount] = useState(0)

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className=' w-screen h-[100vh] bg-[#100e12] flex flex-col overflow-x-hidden'>

      <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={

          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard />
          </PrivateRoute>

        } />

      </Routes>

    </div>
  )
}

export default App
