import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Headers/Header'
import Offer from '../../Headers/Offers/Offer'
import GiftCard from '../Magics/Services/GiftCard'
import './Styles/ViewGift.scss'
import * as BootStrap from 'react-bootstrap'
import $ from 'jquery'
import Magic from '../../Dashboard/ScrollMagic/Magic'
import { fetchUserData } from '../../../Api/AuthenticationService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function loadScript(src) {



    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src

        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

function ViewGift() {
    const { id } = useParams()
    const [gifts, setGifts] = useState("")
    const [email, setEmail] = useState("")
    const [allgifts, setAllgifts] = useState([])
    const [data, setData] = useState({})
    const usenavigate = useNavigate()
    const [price, setPrice] = useState("")
    const [senderMail, setSenderMail] = useState("")
    const [senderUsername, setSenderUsername] = useState("")
    const [amountofcard, setAmountofcard] = useState("")
    const [cardName, setCardName] = useState("")
    const [image, setImage] = useState("")
    const [receiverName, setReceiverName] = useState("")
    const [receiverEmail, setReceiverEmail] = useState("")
    const [secretnumber, setSecretnumber] = useState("")
    const [message, setMessage] = useState("")

    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')
    const [subject, setSubject] = useState('')
    const [attachment, setAttachment] = useState('')


    useEffect(() => {
        setSenderMail(data.username)
        setSenderUsername(data.email)
        setCardName(gifts.cardname)
        setImage(gifts.image)
        setAmountofcard(price)
        
        setRecipient(receiverEmail)
        setSubject(message)
        setMsgBody("Hi You Have Recieved A Gift From"+" "+senderUsername+"\n"+"Use This Secrect Key To Reedem Your Gift "+"\n"+secretnumber
        +"\n"+"This Email Consits Confidential Information Dont Share With Anyone "+"You Can Reedem Your Gift From"+"\n"+"https://nikeworld.herokuapp.com/reedem")
    }, [data, price, id,receiverEmail,message])


    useEffect(()=>{
        setSecretnumber(Math.floor(Math.random() * 1000000000000000))
    },[])

    async function displayRazorpay(valuess) {
        if (data.username) {
            if (price) {
                const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

                if (!res) {
                    alert('Razorpay Not Loaded')
                    return
                }

                const dum = fetch('http://localhost:8081/razorpay', { method: 'POST' }).then((t) => {
                    t.json()
                })

                console.log(data)



                const options = {
                    key: "rzp_test_1UP2mUDjjS5OZf",
                    currency: "INR",
                    amount: valuess * 100,
                    order_id: dum.order_id,
                    name: "Nike Corporation",
                    description: "Checkout",
                    image: "https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg",
                    handler: function (response) {
                        toast("SuccessFull");
                        
                        console.log(response.razorpay_payment_id)


                        addCarddetails()

                    },

                    theme: {
                        color: "#3399cc",
                        hide_topbar: true
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
            } else {
                alert("Please Choose An Amount")
            }
        } else {
            usenavigate('/login')
        }
    }

    const addCarddetails = () => {
        const addproduct = { senderMail, senderUsername, amountofcard, cardName, image, receiverName, receiverEmail, secretnumber, message }
        fetch("https://nike-backend.herokuapp.com/recievedcards/addNewGift", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addproduct)
        }).then((response) => {
            if (response.ok) {
                console.log("Your Gift Has Been Successfuly Sended")
                const details = { recipient, msgBody, subject, attachment }
                fetch("https://nike-backend.herokuapp.com/email/sendMail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(details)
                }).then((response) => {
                    if (response.ok) {
                        console.log("Mail Has Been Send To The Recipients")
                        window.location.reload()
                    }
                }).catch((err) => {
                    alert(err)
                })
            } else if (!response.ok) {
                alert("Something Went Wrong Please Contact Us")
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])



    React.useEffect(() => {
        GiftCard.getGiftsById(id).then((response) => {
            setGifts(response.data)
        }).catch((err) => {
            console.log(err)
        })

        GiftCard.getAllGiftCard().then((response) => {
            setAllgifts(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    $(document).ready(function () {
        $('.popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(500);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');

            e.preventDefault();
        });
    });



    function heler(helper) {
        usenavigate('/gift/' + helper)

    }


    return (
        <div className='giftviewing'>
            <Header />
            <Offer />
            <div style={{ display: "flex", paddingTop: "5%", paddingBottom: "5%" }}>
                <img style={{ marginLeft: "10%", height: "40%", width: "40%" }} src={gifts.image} />
                <div style={{ marginLeft: "8%", fontSize: "xx-large" }}>{gifts.cardname}</div>
                <div style={{ position: "absolute", marginLeft: "58%", marginTop: "5%", color: "black" }}>
                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Emailed in 2 Hours or Less</div>
                    <br /><br />
                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Choose Delivery Method.</div>
                    <br />
                    <div style={{ display: "flex", width: "80%" }}>
                        <BootStrap.Button style={{ border: "none", backgroundColor: "black", color: "white", width: "100%", paddingTop: "3%", paddingBottom: "3%", borderRadius: "5px" }}>
                            Email</BootStrap.Button>
                        <BootStrap.Button style={{ border: "none", backgroundColor: "black", color: "white", width: "100%", paddingTop: "1%", paddingBottom: "1%", marginLeft: "5%", borderRadius: "5%" }}>
                            Mail</BootStrap.Button>
                    </div>
                    <br />
                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Choose a design</div>

                    <div style={{ paddingRight: "35%" }}>
                        {
                            allgifts.map(similar =>

                                <div className='kuttsdes' onClick={() => heler(similar.id)}>
                                    <img style={{ paddingBottom: "5%" }} width="75" className='kutti' src={similar.image}></img>

                                    {gifts.id === similar.id &&
                                        <div style={{ marginTop: "-2.9%", position: "absolute", color: "black", width: "15%", marginLeft: "0%" }}>

                                            <div>━━━━━</div>

                                        </div>}
                                </div>

                            )
                        }
                    </div>

                    <br />


                </div>

                <div style={{ paddingTop: "43%", marginLeft: "-26%", color: "black" }}>
                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Choose Amount</div>
                    <br />
                    <div style={{ display: "flex", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                        <BootStrap.Button style={{ width: "70%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount1)} className='bus'>₹{gifts.amount1}</BootStrap.Button>
                        <BootStrap.Button style={{ width: "70%", marginLeft: "5%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount2)} className='bus'>₹{gifts.amount2}</BootStrap.Button>
                        <BootStrap.Button style={{ width: "70%", marginLeft: "5%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount3)} className='bus'>₹{gifts.amount3}</BootStrap.Button>
                        <BootStrap.Button style={{ width: "70%", marginLeft: "5%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount4)} className='bus'>₹{gifts.amount4}</BootStrap.Button>
                        <BootStrap.Button style={{ width: "70%", marginLeft: "5%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount5)} className='bus'>₹{gifts.amount5}</BootStrap.Button>

                    </div>
                    <div style={{ display: "flex", paddingTop: "3%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                        <BootStrap.Button style={{ width: "19%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount6)} className='bus'>₹{gifts.amount6}</BootStrap.Button>
                        <BootStrap.Button style={{ width: "20%", marginLeft: "5%", borderRadius: "5px" }} onClick={() => setPrice(gifts.amount7)} className='bus'>₹{gifts.amount7}</BootStrap.Button>

                    </div>

                    <br />

                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                        <div>Add recipient delivery details</div>
                        <br />
                        <label>FirstName</label>
                        <input style={{ borderRadius: "10px", borderColor: "black", paddingTop: "4%", paddingBottom: "4%", boxShadow: "none", border: "1px solid black" }} placeholder=''></input>
                        <br />
                        <label>Claimer Name</label>
                        <input onChange={(e) => setReceiverName(e.target.value)} style={{ borderRadius: "10px", borderColor: "black", paddingTop: "4%", paddingBottom: "4%", boxShadow: "none", border: "1px solid black" }} placeholder='' required></input>
                        <br />

                        <label>Email</label>
                        <input required onChange={(e) => setReceiverEmail(e.target.value)} style={{ borderRadius: "10px", borderColor: "black", paddingTop: "4%", paddingBottom: "4%", boxShadow: "none", border: "1px solid black" }} placeholder=''></input>
                        <br />
                        <label>Message</label>
                        <input required onChange={(e) => setMessage(e.target.value)} style={{ borderRadius: "10px", borderColor: "black", paddingTop: "4%", paddingBottom: "4%", boxShadow: "none", border: "1px solid black", lineHeight: "50px" }} placeholder=''></input>
                        <div style={{ color: "black", width: "100%", marginLeft: "-4%" }} class='line-3'>
                            <hr></hr>
                        </div>
                        <br />
                        <div>Enter a personalized message for the recipient.</div>
                        <br />
                        <BootStrap.Button onClick={() => displayRazorpay(price)} style={{ border: "none", backgroundColor: "black", color: "white", width: "100%", paddingTop: "6%", paddingBottom: "6%", marginLeft: "2%", borderRadius: "30px" }}>
                            Buy</BootStrap.Button>
                        <br />
                        <div className='extra'>
                            <button style={{ marginLeft: "-2%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} class="btn popup-btn" href="#">View Details</button>
                        </div>
                        <br />
                        <div style={{ marginLeft: "2%" }}>Shown :</div>
                        <br />
                        <div style={{ marginLeft: "2%" }}>Style : {gifts.style}</div>

                        <div class="popup-wrap" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", position: "absolute", marginLeft: "-80%", marginTop: "-20%" }}>
                            <div class="popup-box">
                                <h2>Card Details</h2>
                                <div>{gifts.description}</div>

                                <a class="close-btn popup-close" href="#">x</a>
                            </div>
                        </div>

                    </div>



                </div>


            </div>

            <Magic />
            <ToastContainer />
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default ViewGift