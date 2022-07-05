import React from 'react'
import Footer from '../Footer/Footer'
import Headers from '../Headers/Header'
import './Styles/Sub.scss'

function Sub() {
    return (
        <div className='subs'>
            <Headers />
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,100' rel='stylesheet' type='text/css' />

            <h1>NIKE MEMBER<br />   <a target="blank" href="http://www.digimadmedia.com" />SUBSCRIPTION</h1>

            <div class="price-table-wrapper">
                <div class="pricing-table">
                    <h2 class="pricing-table__header">- BASIC -</h2>
                    <h3 class="pricing-table__price">₹5000</h3>
                    <a target="_blank" class="pricing-table__button" href="https://www.nike.com/sg/membership">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>5% Off</li>
                        <li>Member Ship Purchase Limit 5</li>
                        <li>Fast Shipping 2 weeks</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
                <div class="pricing-table featured-table">
                    <h2 class="pricing-table__header">- Tip-Top -</h2>
                    <h3 class="pricing-table__price">₹8000</h3>
                    <a target="_blank" class="pricing-table__button" href="https://www.nike.com/sg/membership">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>10% off</li>
                        <li>Member Ship Purchase Limit 15</li>
                        <li>Fast Shipping 1-2 weeks</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
                <div class="pricing-table">
                    <h2 class="pricing-table__header">- Suprise -</h2>
                    <h3 class="pricing-table__price">₹12000</h3>
                    <a target="_blank" class="pricing-table__button" href="https://www.nike.com/sg/membership">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>20% off</li>
                        <li>Member Ship Purchase Limit Unlimited</li>
                        <li>Fast Shipping Under 1 week</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sub