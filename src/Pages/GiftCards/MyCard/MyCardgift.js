import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../Api/AuthenticationService'
import Footer from '../../Footer/Footer'
import Header from '../../Headers/Header'
import RedemptionService from '../Redeem/Service/RedemptionService'
import './Styles/MyCard.scss'
import Barcode from 'react-barcode';
import $ from 'jquery'

function MyCardgift() {
    const [gifts, setGifts] = useState([])
    const [data, setData] = useState({})
    const [email, setEmail] = useState("")
    const usenavigate = useNavigate()



    useEffect(() => {
        getAllDetails()
    }, [data])


    const getAllDetails = () => {
        RedemptionService.getByEmail(data.username).then((response) => {
            setGifts(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className='backgroundfcard' style={{ backgroundColor: "white" ,userSelect:"none"}}>
            <Header />
            <div style={{ color: "black", marginLeft: "5%", paddingTop: "5%"}}>
                {
                    gifts.map(gifts =>
                        <>
                        {gifts.reedem===true &&
                        <div style={{ display: "flex", paddingTop: "3%",paddingBottom:"5%",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>

                            <div style={{backgroundColor:"lightgrey"}}>
                                <img src={gifts.image} style={{ width: "25%" }} />
                                

                                <img class="ticket__barcode" style={{ width: "10%", position: 'absolute', marginTop: "8.4%", marginLeft: "-10.7%" }} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/515428/barcode.png" alt="Fake barcode" />
                                <div style={{ position: "absolute", marginTop: "-1.7%", marginLeft: "0.4%",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{gifts.secretnumber}</div>
            
                                <div style={{position:"absolute", fontFamily:"fantasy",fontSize:"large",marginLeft:"20%",marginTop:"-10%"}}>{gifts.cardName}</div>
                                <div style={{position:"absolute",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",fontSize:"small",marginLeft:"12%",marginTop:"-7%"}}>Sender : {gifts.senderUsername}</div>
                                <div style={{position:"absolute",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",fontSize:"small",marginLeft:"12%",marginTop:"-5%"}}>Amount : ₹{gifts.amountofcard}</div>
                                <div style={{position:"absolute",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",fontSize:"small",marginLeft:"12%",marginTop:"-3%"}}>Message : {gifts.message}</div>
                            </div>


                        </div>}
                        </>
                    )
                }
            </div>


            <Footer />
        </div>
    )
}

export default MyCardgift