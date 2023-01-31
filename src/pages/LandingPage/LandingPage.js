import styles from './LandingPage.module.scss'
import {Link} from 'react-router-dom'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
export default function LandingPage(){
    return(
        <>
        <Header />
        <Hamburger />
        </>
    )
}