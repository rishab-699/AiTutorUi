import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="logo">
        <span className="logo-title">
            Ai-Tutor
        </span>
      </div>
      <div className="items">
        <button>New Chat</button>
        <div className="history">
            <h3>History</h3>
            <ul>
                <li>chat history 1</li>
                <li>chat history 2</li>
                <li>chat history 3</li>
                <li>chat history 4</li>
            </ul>
            
        </div>
      </div>
      
    </div>
  )
}
