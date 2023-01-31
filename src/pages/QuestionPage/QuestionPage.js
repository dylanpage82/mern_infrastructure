import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from './QuestionPage.module.scss'
import Model from '../../components/Model/Model'
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard"
import Hamburger from "../../components/Hamburger/Hamburger"

export default function QuestionPage(props){
    const {id} = useParams()
    const [jeopardy, setJeopardy] = useState()
    const getJeopardy = async () =>{
        try {
            const response = await fetch('/api/jeopardys/' + id)
            const data = await response.json()
            setJeopardy(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() =>{
        getJeopardy()
    }, [setJeopardy])

    return(
        <>
        <ScoreBoard multiPlayer={props.multiPlayer} p1Score={props.p1Score} setP1Score={props.setP1Score} p2Score={props.p2Score} setP2Score={props.setP2Score}/>
        <Hamburger />
        {
            jeopardy?(
                <div className={styles.page}>
                <h1 className={styles.txt} key={id}>{jeopardy.question}</h1>
                <Model jeopardy={jeopardy}/>
                </div>
            ):<h1>error</h1>
        }
        </>
    )
}