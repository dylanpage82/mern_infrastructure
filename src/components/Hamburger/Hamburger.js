import { Link } from 'react-router-dom'
export default function Hamburger(){
    return(
        <nav>
            <div className='navbar'>
              <div className='container nav-container'>
                <input className='checkbox' type='checkbox' />
                <div className='hamburger-lines'>
                  <span className='line line1' />
                  <span className='line line2' />
                  <span className='line line3' />
                </div>
                <div className='menu-items'>
                  <li><Link to='/'>Home</Link> </li>
                  <li><Link to='/gamepage'>Play Jeopardy</Link></li>
                  <li><Link to='/studyguidepage'>Study Guide</Link></li>
                  
                </div>
              </div>
            </div>
          </nav>

    )
}