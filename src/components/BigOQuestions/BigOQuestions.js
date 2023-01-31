import { Link } from 'react-router-dom'


export default function BigOQuestions ({
    jeopardys,
    setId,
    setToggleModel
}) {
    
    return(
    <>
        {
            jeopardys && jeopardys.length ?(
                <div className='container'>
                    {
                        jeopardys
                        .filter(jeopardy => jeopardy.category === "bigo")
                        .slice(1)
                        .map((jeopardy) => {
                            return(
                                <div className='box'key={jeopardy._id} onClick={()=>{
                                    setId(jeopardy._id)
                                    setToggleModel(true)
                                }}>
                                    500
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