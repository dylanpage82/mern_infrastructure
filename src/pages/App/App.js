
import { useState, useEffect } from 'react';
import GamePage from '../GamePage/GamePage';
import {Routes, Route} from 'react-router-dom'
import StudyGuidePage from '../StudyGuidePage/StudyGuidePage';
import Footer from '../../components/Footer/Footer';




export default function App() {
  const [jeopardys, setJeopardys] = useState(null)
  let [multiPlayer, setMultiPlayer] = useState(false)
  let [p1Score, setP1Score]= useState(0)
  let [p2Score, setP2Score]= useState(0)

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
    
    <Routes>
      <Route path='/' element={<GamePage jeopardys={jeopardys} setMultiPlayer={setMultiPlayer} multiPlayer={multiPlayer} setP1Score={setP1Score} p1Score={p1Score} p2Score={p2Score} setP2Score={setP2Score}/>} />
      <Route path='/studyguidepage' element={<StudyGuidePage jeopardys={jeopardys}/>}/>
      
    </Routes>
    <Footer />
    </>
  );

}

