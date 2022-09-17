import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap'
import { SiJordan } from "react-icons/si";

function CommonSymbol() {
    const usenavigate = useNavigate()

    const MostPopular = (value) =>{
        usenavigate('/mostpopular/'+value);
    }
    
    return (
        <div style={{backgroundColor:"white",userSelect:"none"}}>
            <SiJordan className='jordanback' />

            <div className='jordanlinks'>

                <BootStrap.Nav.Link className='mainnavtext' href='/mostpopular/BasketBall'>BasketBall</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' href='/mostpopular/Football'>FootBall</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Men's")}>Men</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Women's")}>Women</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Kids's")}>Kids</BootStrap.Nav.Link>

            </div>
        </div>
    )
}

export default CommonSymbol