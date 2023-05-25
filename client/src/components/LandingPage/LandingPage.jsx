import React from 'react';
import PK from '../../assets/poke.jpg'
import './LandingPage.css';

function LandingPage({ setAccess }) {

  const handleNext = () => {
    setAccess(true)
  }

  return (
    <div className='ctn-gen-lan'>
        <div className='ctn-landing'>
            <div>
                <h1 className='title'>Welcome.!!</h1>
                <img src={PK} alt="pokeball" className='pb-gif'/>
                <div>
                    <h3 className='text'>Explore +1000 Pokemons and create your own</h3>
                </div>
                <div className='ctn-button'>
                    <button 
                        onClick={handleNext} 
                        className='btn-landing'
                    >
                        <span>Continue</span><i></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage