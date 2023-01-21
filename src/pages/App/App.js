import LandingPage from '../LandingPage/LandingPage';
import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import GamePage from '../GamePage/GamePage';
import {Routes, Route} from 'react-router-dom'



export default function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()  
  }, [])
  
  return (
    <>
    <div className='App'>
      <h1>Jeopardy</h1>
      <LandingPage />
    </div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/gamepage' element={<GamePage />} />
    </Routes>
    </>
  );

}

