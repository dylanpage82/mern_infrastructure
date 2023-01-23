

export default function ArrayQuestions({jeopardys}){
    return(
        <>
        {
            jeopardys && jeopardys.length ?(
                <div className="container">
                    {
                        jeopardys
                        .filter(jeopardy => jeopardy.category === "array")
                        .slice(3)
                        .map((jeopardy) => {
                            return(
                                <div>
                                    <h1>{jeopardy.answer}</h1>
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