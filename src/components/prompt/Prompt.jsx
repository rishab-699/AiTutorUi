import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import VideocamIcon from '@mui/icons-material/Videocam';
import './prompt.css'


export default function Prompt({setCapture}) {
  const captureButton = (e)=>{
    e.preventDefault();
    setCapture(true);
  }
  return (
    <div className='Prompt'>
        <form action="">
            <button className='ActionButton' onClick={(e) => captureButton(e)}><VideocamIcon className='arrow'/></button>
            <textarea name="Question" className='Question' placeholder='Ask Question' id="Question"></textarea>
            <button className='SubmitButton'><ArrowUpwardIcon className='arrow'/></button>
        </form>
    </div>
  )
}
