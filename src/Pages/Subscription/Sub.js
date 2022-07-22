import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Headers from '../Headers/Header'
import { fetchUserData } from '../../Api/AuthenticationService'
import './Styles/Sub.scss'
import SubscriptionService from './BuySubscription/SubscriptionService'
import { useNavigate } from 'react-router-dom'







function loadScript(src) {



    return new Promise((resolve)=>{
    const script = document.createElement('script')
    script.src = src
    
    script.onload = () =>{
      resolve(true)
    }
    script.onerror = () =>{
      resolve(false)
    }
    document.body.appendChild(script)
    })
}


function Sub() {
    const [data,setData] = useState({})
    
    
    async function displayRazorpay(valuess) {
        if(localStorage.getItem("Userid")){
        if(data.subscription==="Premium" || data.subscription==="Normal" || data.subscription==="Regular"){
            alert("You Already Have A Subscription"+" "+data.subscription)
        }else{ 
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    
        if(!res){
          alert('Razorpay Not Loaded')
          return
        }
    
        const dum = fetch('http://localhost:8081/razorpay',{method:'POST'}).then((t)=>{
          t.json()
        })
    
        console.log(data)

        
    
        const options = {
          key: "rzp_test_1UP2mUDjjS5OZf",
          currency: "INR",
          amount: valuess*100,
          order_id:dum.order_id,
          name: "Nike Corporation",
          description: "Checkout",
          image: "https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg",
          handler: function (response) {
            alert(valuess,"Price Has Received By Nike Corporation");
            alert("Your SucessFully Subscribed")
            alert(response.razorpay_payment_id);
            console.log(response.razorpay_payment_id)
            
            
            updatinguser(valuess)
            
          },
          prefill:{
              name:"Vasanth",
              email:"vasanth16756@gmail.com",   
              contact:"1234567890"
          },
          notes:{
              address:"dabjbawjdn"
          },
          theme: {
            color: "#3399cc",
            hide_topbar:true
            }
        }
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        
        rzp1.on('payment.failed', function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
    }
}else{
    usenavigate('/login')
}
      }
      

    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    const usenavigate = useNavigate()

    const updatinguser = (type) =>{
       localStorage.setItem("Subscription",type)
       usenavigate('/render')
    }

    

  


    return (
        <div className='subs'>
            <Headers />
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,100' rel='stylesheet' type='text/css' />

            <h1>NIKE MEMBER<br />   <a target="blank" href="http://www.digimadmedia.com" />SUBSCRIPTION</h1>

            <div class="price-table-wrapper">
                <div class="pricing-table">
                    <h2 class="pricing-table__header">- BASIC -</h2>
                    <h3 class="pricing-table__price">₹5000</h3>
                    <a  class="pricing-table__button"  onClick={() => displayRazorpay(5000)}>
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
                    <a  class="pricing-table__button" onClick={() => displayRazorpay(8000)}>
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
                    <a  class="pricing-table__button" onClick={() => displayRazorpay(12000)}>
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