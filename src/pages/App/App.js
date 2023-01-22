import LandingPage from '../LandingPage/LandingPage';
import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import GamePage from '../GamePage/GamePage';
import {Routes, Route} from 'react-router-dom'
import StudyGuidePage from '../StudyGuidePage/StudyGuidePage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


export default function App() {
  const [jeopardys, setJeopardys] = useState(null)
  const [user, setUser ] = useState(null)

  const getJeopardys = async () => {
    try {
      const response = await fetch('/api/jeopardys')
      const data = await response.json()
      setJeopardys(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getJeopardys()  
  }, [])
  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/gamepage' element={<GamePage />} />
      <Route path='/studyguidepage' element={<StudyGuidePage jeopardys={jeopardys}/>}/>
    </Routes>
    <Footer />
    </>
  );

}

