import React from 'react';
import './animate.scss'
function Animate({ letterClass, strArray, idx }) {
    return (
        <span>
            {strArray.map((char, i) => (
                // console.log(char)
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
}

export default Animate;
