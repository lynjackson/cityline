import React from 'react';
import background from '../../styles/assets/background.png'
import './Home.scss'

export const Home = ()=>{
    return(
        <div className='home' style={{background: background}}>
            <div className='headline'>
                <p id='headline_1'>Real Estate Investments</p>
                <p id='headline_2'>& Capital Markets</p>
            </div>
            <p className='sub-headline'>We create capital solutions across real estate.</p>
      </div>
    )
}