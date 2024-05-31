import React, { useEffect, useState } from 'react'
import A from "../Assets/img/Apg (2).png";
import { Link } from 'react-router-dom';
import './Home.scss'
import './Layout/index.scss'
import Animate from './AnimatedLetters/Animate';
import Loader from 'react-loaders';
function Home() {
    const [letterClass ,  setLetterclass] = useState('text-animate');
    const nameArray = ['S','a','r','k','a','r']
    const jobArray= ['W','e','b',' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterclass('text-animate-hover');
        }, 4000);
    
   
    }, []);
    
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                <h1 className={letterClass}>Hi ,<br/>I'm
                <img className='image-logo' src={A}  alt='logo'/>
               <Animate letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <Animate letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home
