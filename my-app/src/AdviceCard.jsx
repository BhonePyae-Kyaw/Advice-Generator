import React from 'react'
import './AdviceCard.css'
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
export default function AdviceCard({result, nextAdvice}) {
  return (
    <div className='cardOutline'>
        <div className='adviceContainer'>
            {result && 
                <div>
                <span className='adviceNo'>ADVICE #{result.slip.id}</span>
                <br />
                <p className='adviceLine'>"{result.slip.advice}"</p>
                </div>
            }
        </div>
        <img className='dividerImg' src={divider} alt='divider' />
        <div className='diceContainer'>
            <img src={dice} onClick={nextAdvice} alt='dice'></img>
        </div>
    </div>
  )
}
