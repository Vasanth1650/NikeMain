import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Headers/Header'
import Svg from './Svg';

function EmailNotify() {
    

    
    return (
        <div style={{backgroundColor:"white"}}>
            <Header />

            <div style={{fontSize:"xx-large",fontFamily:"fantasy",textAlign:"center",paddingTop:"2%"}}>Welcome To Nike Family </div>
            <div style={{fontSize:"small",textAlign:"center",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>We Have Sent An Verification Link To Your Email Please Verify And Try Login</div>

            <div style={{paddingTop:"5%",paddingLeft:"35%"}}>
                <Svg/>
            </div>

            <div style={{fontSize:"xx-large",fontFamily:"fantasy",textAlign:"center",paddingTop:"2%"}}>Join Our Fest</div>
            <div style={{fontSize:"small",textAlign:"center",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",paddingBottom:"5%"}}>Join Our Nike Festivals And Gift Your Loved Ones</div>
           


            <Footer />
        </div>
    )
}

export default EmailNotify