 import { Link } from 'react-router-dom'

export default function ArrayQuestions({
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
                        .filter(jeopardy => jeopardy.category === "array")
                        .slice(3)
                        .map((jeopardy) => {
                            return(
                                <div className='box' key={jeopardy._id} onClick={()=>{
                                    setId(jeopardy._id)
                                    setToggleModel(true)
                                }}>200

                                    {/* <Link to={`/questionpage/${jeopardy._id}`}>200</Link> */}
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