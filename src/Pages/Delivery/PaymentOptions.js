import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'

function PaymentOptions() {
  return (
    <div>
        <Header/>
        <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />

 
            <link rel="stylesheet" href="styles.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
                rel="stylesheet" />



            <div class="header">
                <h1>Reliable, efficient Payment With RazorPay</h1>
                <h1>Powered by RazorPay</h1>

                <p>We Include Multiple Payment Options With 3 tier Secure Transaction And Which Helps Nike To
                Provide Instant Refund And No Failure Ocuurs Of Poor Server Performance</p>
            </div>

            <div class="row1-container">
                <div class="daba daba-down cyan">
                    <h2>Credit Card</h2>
                    <img className='delimg' width="100" src="https://media.istockphoto.com/photos/stacked-credit-cards-picture-id1203763961?k=20&m=1203763961&s=612x612&w=0&h=mrFgkoWWVdp0mtt_vw6OTEZCSjw3bUYhuJt5QWVdkXo=" alt="" />
                </div>

                <div class="daba red">
                    <h2>Debit Card</h2>
                    <img className='delimg' width="100" src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/27/4e3e65ad3dfa116ec94a40c401b97ebe_original.jpg" alt="" />
                </div>

                <div class="daba daba-down blue">
                    <h2>UPI</h2>
                    <img className='delimg' width="100" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/24/w900X450/Capture.JPG?w=400&dpr=2.6" alt="" />
                </div>
            </div>
            <div class="row2-container">
                <div class="daba orange">
                    <h2>Pay Pal</h2>
                    <img className='delimg' width="100" src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg" alt="" />
                </div>
            </div>
            <footer>
                <p class="attribution">
                    Provided by <a href="https://www.nike.com/sg/" target="_blank">Nike Corporation Lead</a>.
                     by <a href="#">Vasanth</a>.
                </p>
            </footer>
            <br />

            <Footer/>
    </div>
  )
}

export default PaymentOptions