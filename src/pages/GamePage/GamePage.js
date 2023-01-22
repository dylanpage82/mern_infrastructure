import JSQuestions from "../../components/JSQuestions/JSQuestions"
import ReactQuestions from "../../components/ReactQuestions/ReactQuestions"
import ReduxQuestions from "../../components/ReduxQuestions/ReduxQuestions"

export default function GamePage(props){
    return(
        <div className="page">
            <JSQuestions />
            <ReactQuestions />
            <ReduxQuestions />
        </div>
    )
}