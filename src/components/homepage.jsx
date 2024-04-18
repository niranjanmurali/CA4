import React, { useContext, useState } from 'react'
import "./homepage.css"
import QuestionBox from './QuestionBox.jsx'


const Homepage = () => {
    //changing the state of question box for conditional rendering
    const[question,setQuestion]=useState(false)
    const showQuestion=()=>{
        setQuestion(true)
    }
   
  return (
    //conditional rendring to show questionbox
    <>
    {question?(<QuestionBox />):(

    <div>
        <div className='navbar'>
          <h2 className='logo'>Quiz master</h2>
        </div>
        <div className='image'>
            <div>
             <button onClick={showQuestion} className='start-btn'>
                Start quiz
            </button>
            </div>
            <div>
           
            </div>
        </div>
      
    </div>
    )}
    </>
  )
}

export default Homepage