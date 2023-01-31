import { useState } from "react"
import JSQuestions from "../../components/JSQuestions/JSQuestions"
import ReactQuestions from "../../components/ReactQuestions/ReactQuestions"
import ReduxQuestions from "../../components/ReduxQuestions/ReduxQuestions"
import ArrayQuestions from "../../components/ArrayQuestions/ArrayQuestions"
import BigOQuestions from "../../components/BigOQuestions/BigOQuestions"
import Hamburger from "../../components/Hamburger/Hamburger"
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard"
import PlayerChoice from "../../components/PlayerChoice/PlayerChoice"
import QuestionModel from "../../components/QuestionModel/QuestionModel"


export default function GamePage(props){
    const [id, setId] = useState('')
    const [toggleModel, setToggleModel] = useState(false)
    
    return(
        <>
        <div className='background'>
        <ScoreBoard multiPlayer={props.multiPlayer} p1Score={props.p1Score} setP1Score={props.setP1Score} p2Score={props.p2Score} setP2Score={props.setP2Score}/>
        <PlayerChoice setMultiPlayer={props.setMultiPlayer} multiPlayer={props.multiPlayer}/>
        <Hamburger />
        <div className="page">
            {
                toggleModel ? <QuestionModel id={id} setId={setId}setToggleModel={setToggleModel} toggleModel={toggleModel} jeopardys={props.jeopardys}/>
                : ''
            }
            <JSQuestions jeopardys={props.jeopardys} setId = {setId} setToggleModel={setToggleModel}/>
            <ArrayQuestions jeopardys={props.jeopardys} setId = {setId} setToggleModel={setToggleModel}/>
            <ReactQuestions jeopardys={props.jeopardys} setId = {setId} setToggleModel={setToggleModel}/>
            <ReduxQuestions jeopardys={props.jeopardys} setId = {setId} setToggleModel={setToggleModel}/>
            <BigOQuestions jeopardys={props.jeopardys} setId = {setId} setToggleModel={setToggleModel}/>
        </div>
        </div>
        </>
    )
}