import React from 'react';
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css'
import $ from 'jquery'
import jQuery from 'jquery';

function Offer() {
  const usenavigate = useNavigate()
  function dummy() {
    usenavigate("/subscription")
  }

  function dummy1() {
    usenavigate("/delivery")
  }




  return (
    <div style={{ backgroundColor: "white" }}>


      <div id="carouselExampleFade" class="carousel slide carousel-fadecarousel slide" data-ride="carousel" data-interval="5000">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='offertext' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy()}>Save Up to 40%</div>
            <div className='offertext1' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy()}>Shop All Our New Markdowns</div>
          </div>
          <div class="carousel-item">
            <div className='offertext' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy()}>Students Now Get 10% Off</div>
            <div className='offertext1' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy()}>Learn more</div>
          </div>
          <div class="carousel-item">
            <div className='offertext' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy1()}>It's taking us a bit longer than usual to get your order to you. Thank you for your patience.</div>
            <div className='offertext1' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} onClick={() => dummy1()}>Learn more</div>
          </div>
        </div>



        <a class="carousel-control-prev"  role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next"  role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>







    </div>
  )
}

export default Offer