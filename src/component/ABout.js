import React, { useEffect, useState } from 'react'
import Animate from './AnimatedLetters/Animate'
import './Layout/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
function ABout() {
    const [letterClass ,  setLetterclass] = useState('text-animate');
   
    return (
        <>
        <div className='container about-page'>
          <div className='container-col'> 
           <div className='text-zone'>
            <h1>
                <Animate strArray={['A','b','o','u','t',' ','M','e']} letterClass={letterClass} idx={15}/>
            </h1>
            <p>I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
            <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            <p>I'm quietly confident , naturally curious , and perpetually working on improving my chops one design problem at a time</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4E28'/>
                    </div>
                </div>
            </div></div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default ABout
