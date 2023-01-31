import styles from './LandingPage.module.scss'
import {Link} from 'react-router-dom'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
export default function LandingPage(){
    return(
        <>
        <Header />
        <Hamburger />
        <div className={styles.page}>
            <div className={styles.gamepage}>
                <Link to='/gamepage'>Game Page</Link>
            </div>
            <div className={styles.studypage}>
                <Link to='/studyguidepage'>Study Guide Page</Link>
            </div>
        
        
        </div>
        </>
    )
}