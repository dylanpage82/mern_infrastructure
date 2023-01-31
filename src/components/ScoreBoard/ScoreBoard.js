import styles from './ScoreBoard.module.scss'

export default function ScoreBoard({
    multiPlayer,
    setP1Score,
    setP2Score,
    p1Score,
    p2Score
}){



function increaseP1Score(){
    p1Score = p1Score + 100;
    setP1Score(p1Score)
}
function increaseP2Score(){
    p2Score = p2Score +100;
    setP2Score(p2Score)
}
function resetScore(){
    setP1Score(0)
    setP2Score(0)
}

return(
    <>
    {
        multiPlayer ? (
        
            <header className={styles.score}>
                <div className={styles.p2}>
                    <h2>{p1Score}</h2> 
                    <h3 onClick={increaseP1Score}>Player 1</h3>
                </div>
                <div className={styles.reset}>
                    <h1>Jeopardy</h1>
                <p><button onClick={resetScore}>Reset</button></p>
                </div>

                <div className={styles.p2}>
                    <h2>{p2Score}</h2>
                    <h3 onClick={increaseP2Score}>Player 2</h3>
                </div>
                
            </header>
        
        ):
        <header className={styles.score2}>

                <div className={styles.reset}>
                    <h1>Jeopardy</h1>
                <p><button onClick={resetScore}>Reset</button></p>
                </div>

        <div className={styles.p1}>
        
            <h2>{p1Score}</h2> 
            <h3 onClick={increaseP1Score}>Player 1</h3>
        </div>
    </header>
    }
    </>

)
}