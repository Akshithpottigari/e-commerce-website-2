import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <ul className="header-left">
            <li className="header-left-li">email@email.com</li>
            <li className="header-left-li">(12345)67890</li>
        </ul>
        <ul className="header-right">
            <li className="header-right-li"><Link to='/login' className='header-right-a'>Login</Link> </li>
            <li className="header-right-li"><Link to='/signup' className='header-right-a'>Signup</Link> </li>
        </ul>
    </div>
  )
}

export default Header