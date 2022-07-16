import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionService from '../BuySubscription/SubscriptionService';
import {fetchUserData} from '../../../Api/AuthenticationService'


function Render() {
    const usenavigate = useNavigate()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [subscription,setSubscription] = useState('')
    const [data, setData] = useState({})
    const [password,setPassword] = useState('')
    const ref = useRef(null);

    localStorage.setItem("Userid",data.id)

    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    let m = localStorage.getItem("Subscription")

    let i = 0
    
    useEffect(()=>{
        if(m==="12000"){
            setSubscription("Premium")
            i += 1
        }if(m==="8000"){
            setSubscription("Normal")
            i += 1
        }if(m==="5000"){
            setSubscription("Regular")
            i += 1
        }
        
    })

    useEffect(() => {
        setTimeout(() => {
          ref.current.click();
        }, 1000); 
      }, []);

    const updatedetails = () =>{
       
       console.log(subscription)
       const addproduct = { username,email, address, city, state, phonenumber, password, subscription}
       console.log(addproduct)
       if (localStorage.getItem("Userid")) {
           SubscriptionService.updateUser(localStorage.getItem("Userid"), addproduct).then((response) => {
               usenavigate(-1)
           }).catch((error) => {
               console.log(error)
           })
       } else {

       }
    }

    useEffect(() => {
        SubscriptionService.getUserById(localStorage.getItem("Userid")).then((response) => {
            setAddress(response.data.address)
            setCity(response.data.city)
            setState(response.data.state)
            setPhonenumber(response.data.phonenumber)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setSubscription(response.data.subscription)
        })
    },[])

  return (
    <div>
    <div>Rendering....</div>
    <button ref={ref} onClick={updatedetails}></button>
    </div>
  )
}

export default Render