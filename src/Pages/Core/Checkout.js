import React, { useEffect, useState } from 'react'
import './Styles/Checkout.scss'
import './Styles/Checkout.css'
import { fetchUserData } from '../../Api/AuthenticationService';
import CheckoutService from './Services/Checkout';
import { useNavigate } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';



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




function Checkout() {
    const [data, setData] = useState('')
    const [userid, setUserid] = useState('')
    const [checkout, setCheckout] = useState([])
    const usenavigate = useNavigate()
    const[username,setUsername] = useState()
    const[address,setAddress] = useState()
    const[state,setState] = useState()
    const[city,setCity] = useState()
    const[payment,setPayment] = useState()
    const[productname,setProductname] = useState()
    const[status] = useState("Order Placed Waiting For Seller To Confirm The Order")
    const[paymentid,setPaymentid] = useState()
    

    const [price, setPrice] = useState('')

    const confirm = {username,address,state,city,payment,productname,price,userid,status,paymentid}

    useEffect(() => {
        setUserid(data.id)
        setUsername(data.username)
        setAddress(data.address)
        setState(data.state)
        setCity(data.city)
        setPayment(price)
        
    })


    

    

    function CheckoutDelete(userid){
        CheckoutService.CheckoutDelete(userid).then((response) => {
            getByCheck();
            console.log("Products Removed from Checkout")
        })
    }

    console.log(paymentid)

    async function displayRazorpay() {

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
          amount: price*100,
          order_id:dum.order_id,
          name: "Nike Corporation",
          description: "Checkout",
          image: "https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg",
          handler: function (response) {
            alert(price,"Price Has Received By Nike Corporation");
            alert("Your Order Has Been Placed Successfully")
            alert(response.razorpay_payment_id);
            setPaymentid(response.razorpay_payment_id)
            console.log(response.razorpay_payment_id)
            PaymentProced(paymentid)
            
            console.log(username,address,state,city,payment,productname,response.razorpay_payment_id)
            
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






    const handlePrice = () => {
        let ans = 0;
        let name = "";
        let pro = 0;
        checkout.map(checkout => 
            (ans += checkout.price,name +="|"+checkout.productname+"|")
        )
        setProductname(name)
        setPrice(ans)
        console.log(ans)
    }

    useEffect(() => {
        handlePrice()
    },[handlePrice])


    useEffect(() => {

        getByCheck(data.id);
    }, [userid])



    const getByCheck = () => {
        CheckoutService.findByUserid(data.id).then((response) => {
            setCheckout(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }

    function PaymentProced(paymentid){
        if(paymentid){
            fetch("https://nike-backend.herokuapp.com/ordered/generateorder",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(confirm)
            }).then(()=>{
                CheckoutDelete(userid)
                usenavigate("/checking")
            })
        }else if(!paymentid){
            alert("The System Will Procced When It Recevies The Payment Id This May Occur After Payment To")
        }
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);

        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    const handler = () => {
        usenavigate('/')
    }


    return (
        <div>

        
            


        <BootStrap.ModalTitle>Note: Your Order Is Being Processed To Enable Receipt And Further Processed
        Select The Link To Redirect Otherwise The Payment Will Be Cancelled</BootStrap.ModalTitle>
        


        <div className='sa'>




            <aside class="profile-card">

                <header>
                    <h1>₹{price}</h1>

                    <a onClick={displayRazorpay}>
                        <img src="https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg" />
                    </a>
                    <BootStrap.Button onClick={()=>PaymentProced(paymentid)}>{paymentid}</BootStrap.Button>

                    <h1>Check Out</h1>



                </header>





                

            </aside>
            </div>




            









            {


                checkout.map(
                    checkout =>
                        <div>
                            <img className='hu' src={checkout.image1}></img>
                            <div>{checkout.productname}</div>
                            <div>{checkout.price}</div>
                            <div>{checkout.size}</div>
                        </div>
                )
            }
            


            <div>------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------
            -----------------------------------------------------------------------</div>





           
        </div>
    )
}

export default Checkout