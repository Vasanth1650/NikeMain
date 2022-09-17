import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../Footer/Footer';
import Header from '../../Headers/Header';
import JordanMost from './AllProducts/JordanMost';
import './Styles/History.scss'

function JordanHistory() {
    return (
        <div  style={{overflow:"hidden",backgroundColor:"white",userSelect:"none"}}>
            <Header />
            

            <JordanMost />


            
            


            <Footer />
        </div>
    )
}

export default JordanHistory