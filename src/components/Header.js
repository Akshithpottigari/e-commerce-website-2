import React from 'react'

function Header() {
  return (
    <div className="header">
        <ul className="header-left">
            <li className="header-left-li">email@email.com</li>
            <li className="header-left-li">(12345)67890</li>
        </ul>
        <ul className="header-right">
            <li className="header-right-li"><a className='header-right-a' href=''>Login</a> </li>
            <li className="header-right-li"><a className='header-right-a' href=''>Sign Up</a> </li>
        </ul>
    </div>
  )
}

export default Header