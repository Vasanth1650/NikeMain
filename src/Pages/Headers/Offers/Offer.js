import React from 'react';
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css'

function Offer() {
  const usenavigate = useNavigate()
  function dummy(){
    usenavigate("/subscription")
  }
  return (
    <div>
        <BootStrap.Carousel className='offer' onClick={()=>dummy()}>
                <BootStrap.Carousel.Item interval={4000}>
                    <div className='offertext'>Save Up to 40%</div>
                    <div className='offertext1'>Shop All Our New Markdowns</div>
                </BootStrap.Carousel.Item>
                <BootStrap.Carousel.Item interval={4000}>
                <div className='offertext'>Students Now Get 10% Off</div>
                <div className='offertext1'>Learn more</div>
                </BootStrap.Carousel.Item>
        </BootStrap.Carousel>
    </div>
  )
}

export default Offer