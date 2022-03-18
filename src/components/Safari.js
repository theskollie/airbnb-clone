import React from 'react';
import Close from '../images/safari/Close.png'
import Nav from '../images/safari/nav.png'
import Minimize from '../images/safari/Minimize.png'
import Zoom from '../images/safari/Zoom.png'

export default function Safari() {
    return (
        <div className="safari-container">
            <div className="safari--header">
                <img src={Close} />
                <img src={Minimize} />
                <img src={Zoom} />
                <img src={Nav} />
            </div>

        </div>
    )
}