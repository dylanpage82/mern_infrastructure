import { Link } from 'react-router-dom'

export default function ReduxQuestions({
    jeopardys,
    setId,
    setToggleModel
}){
    return(
        <>
        {
            jeopardys && jeopardys.length ?(
                <div className='container'>
                    {
                        jeopardys
                        .filter(jeopardy => jeopardy.category === "redux")
                        
                        .map((jeopardy) => {
                            return(
                                <div className='box' key={jeopardy._id} onClick={()=>{
                                    setId(jeopardy._id)
                                    setToggleModel(true)
                                }}>400
                                </div>
                            )
                        })
                    }
                </div>
            ):<h1>error</h1>
        }
        </>
    )
}