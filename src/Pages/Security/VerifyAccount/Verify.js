import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VerifyAccountService from './Service/VerifyAccountService'
import Svg from './Svg'

function Verify() {
    const { verify } = useParams()
    const [response, setResponse] = useState("")

    useEffect(() => {
        verifyaccountdetails()
    }, [verify])

    const verifyaccountdetails = () => {
        const details = { verify }
        if (verify) {
            VerifyAccountService.verify(details).then((response) => {
                setResponse("1")
            }).catch((err) => {
                alert(err)
            })
        }


    }

    return (
        <div style={{ backgroundColor: "white", color: "black" }}>
            <div>
                {response === "" &&
                    <div>We Are Currently Working On Your Account Verification</div>
                }


                {response === "1" &&
                    <>
                        <div style={{ fontSize: "xx-large", fontFamily: "fantasy", textAlign: "center", paddingTop: "2%" }}>Welcome You Can Explore Our Stuffs Without Restrictions</div>
                        <div style={{ fontSize: "small", textAlign: "center", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Your Account Has Been Verified Successfully,You Can Close This Page</div>

                        <div style={{ paddingTop: "5%", paddingLeft: "35%" }}>
                            <Svg />
                            
                        </div>

                        <div style={{ fontSize: "xx-large", fontFamily: "fantasy", textAlign: "center", paddingTop: "2%" }}>Join Our Fest</div>
                        <div style={{ fontSize: "small", textAlign: "center", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", paddingBottom: "5%" }}>Join Our Nike Festivals And Gift Your Loved Ones</div>

                    </>
                }
            </div>
        </div>
    )
}

export default Verify