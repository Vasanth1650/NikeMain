import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionService from '../BuySubscription/SubscriptionService';
import {fetchUserData} from '../../../Api/AuthenticationService'


function Render() {
    const usenavigate = useNavigate()

    const [subscription,setSubscription] = useState('')
    const [data, setData] = useState({})
    const ref = useRef(null);

    

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

    

      const updatedetails = (e) => {
        e.preventDefault()
        const addproduct = {subscription}
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
        setTimeout(() => {
          ref.current.click();
        }, 1000); 
      }, []);

    useEffect(() => {
        SubscriptionService.getUserById(localStorage.getItem("Userid")).then((response) => {
            
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