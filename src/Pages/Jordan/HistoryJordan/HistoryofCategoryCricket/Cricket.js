import React from 'react'
import Footer from '../../../Footer/Footer'
import Header from '../../../Headers/Header'
import Big from './BigPicture/Big'
import CommonSymbol from './CommonSymbol'
import Scroll from './ScrollCricket/Scroll'


function Cricket() {
  return (
    <div style={{overflow:"hidden"}}>
        <Header/>
          <CommonSymbol/>
            <Big/>
            <Scroll/>
        <Footer/>
    </div>
  )
}

export default Cricket