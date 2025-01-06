import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <span className="logo-title">
            Ai-Tutor
        </span>
      </div>
      <div className="navigation">
        <ul>
            <li>Home</li>
            <li>Chat</li>
            <li>About Us</li>
        </ul>
        <div className="signups">
                <a>Sign In</a>
                <a>Sign Up</a>
        </div>
      </div>
    </div>
  )
}
