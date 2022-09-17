import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../Api/AuthenticationService'
import Footer from '../../Footer/Footer'
import Header from '../../Headers/Header'
import RedemptionService from './Service/RedemptionService'
import './Styles/Reedeem.scss'
import * as BootStrap from 'react-bootstrap'

function Redeem() {
    const [data,setData] = useState({})
    const usenavigate = useNavigate()
    const [receiverEmail,setReceiverEmail] = useState("")
    const [secretnumber,setSecretnumber] = useState("")

    useEffect(() => {
      setReceiverEmail(data.username)
    }, [data])
    

    const gettingValues = (e) =>{
        e.preventDefault()
        const gifts= {receiverEmail,secretnumber}
        if(localStorage.getItem("USER_KEY")){
            RedemptionService.activate(gifts).then((response)=>{
                console.log(response.data)
                alert("The Card Has Been Reedemed Successfully")
                usenavigate('/mygifts')
            }).catch((err)=>{
                console.log(err)
                alert("This Redemption Code Is Not Available")
            })
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
    
    return (
        <div className='maingood' style={{ backgroundColor: "white",userSelect:"none"}}>
            <Header />

            <div className='inputboxfied'>
                
                <input onChange={(e)=>setSecretnumber(e.target.value)} style={{borderRadius:"30px"}} className='inputforreedm'></input>
            
                <BootStrap.Button onClick={gettingValues} style={{width:"10%",paddingTop:"1%",paddingBottom:"1%",border:"none",backgroundColor:"black",color:"white",borderRadius:"30px",marginLeft:"-10%"}}>Validate</BootStrap.Button>
            </div>

            <Footer />
        </div>
    )
}

export default Redeem