import React from 'react'
import './Styles/Popular.scss'
import * as BootStrap from 'react-bootstrap'

function Popular() {
    return (
        <div>
            <a href='/subscription'>
            <div className='popularthings' >
                
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/59e9f4f2-eea0-4836-bcad-98b9326af2b0/nike-just-do-it.jpg' />
                
            </div>
            <div className='mainrun'>WHAT ARE YOU WORKING ON?</div>
            <div className='smalltext11'>When pro cricketer Smriti Mandhana's home, she focuses on recharging</div>
            <div className='butonseefs'>
                <BootStrap.Button className='smallsdas'>Learn More</BootStrap.Button>
            </div>
            </a>
        </div>
    )
}

export default Popular