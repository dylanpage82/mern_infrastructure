import JSQuestions from "../../components/JSQuestions/JSQuestions"
import ReactQuestions from "../../components/ReactQuestions/ReactQuestions"
import ReduxQuestions from "../../components/ReduxQuestions/ReduxQuestions"
import ArrayQuestions from "../../components/ArrayQuestions/ArrayQuestions"
import BigOQuestions from "../../components/BigOQuestions/BigOQuestions"

export default function GamePage({jeopardys}){
    return(
        <div className="page">
            <JSQuestions jeopardys={jeopardys}/>
            <ArrayQuestions jeopardys={jeopardys}/>
            <ReactQuestions jeopardys={jeopardys}/>
            <ReduxQuestions jeopardys={jeopardys}/>
            <BigOQuestions jeopardys={jeopardys}/>
        </div>
    )
}