import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

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
                <Link>Sign In</Link>
                <Link>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
