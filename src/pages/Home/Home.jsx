import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import img from '../../images/AiBanner.jpg'

export default function Home() {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="content">
        <div className="left">
            <span className="title">Welcome to AI-Tutor</span>
            <span className="content-text">
                This is the Ai-Bot Teacher. 
                Ask any question and get detailed answers
                with explanation.
            </span>
            <div className="links">
                <button>Ask Questions</button>
            </div>
        </div>
        <div className="right">
            <div className="image">
            <img src={img} alt="" />
            </div>
            
        </div>
      </div>
    </div>
  )
}
