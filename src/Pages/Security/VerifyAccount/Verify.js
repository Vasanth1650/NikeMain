import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VerifyAccountService from './Service/VerifyAccountService'

function Verify() {
    const {verify} = useParams()
    const [response,setResponse] = useState("")

    useEffect(()=>{
        verifyaccountdetails()
    },[verify])

    const verifyaccountdetails = () =>{
        const details = {verify}
        if(verify){
            VerifyAccountService.verify(details).then((response)=>{
                setResponse("1")
            }).catch((err)=>{
                alert(err)
            })
        }
        
        
    }

  return (
    <div style={{backgroundColor:"white",color:"black"}}>
        <div>
            We Are Currently Working On Your Account Verification
            {verify}
            {response==="1" &&
                <>
                    Everything Went Smooth You Can Login Now <a href='https://nikeworld.herokuapp.com/login'></a>
                </>
            }
        </div>
    </div>
  )
}

export default Verify