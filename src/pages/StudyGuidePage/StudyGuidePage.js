import { Link } from "react-router-dom"
import Hamburger from "../../components/Hamburger/Hamburger"
import Header from "../../components/Header/Header"

export default function StudyGuidePage({jeopardys}){
    return(
        <>
        <Header />
        <Hamburger />
        {
            jeopardys && jeopardys.length ?(
                <ul>
                    {
                        jeopardys
                        .map((jeopardy) =>{
                            return(
                                <li key={jeopardy._id}>
                                    <h1>{jeopardy.answer}</h1><br/>
                                    <h3>{jeopardy.question}</h3><br/>
                                </li>
                            )
                        })
                    }
                </ul>
            ):<h1>Nothing Here</h1>
        }
        </>
    )
}