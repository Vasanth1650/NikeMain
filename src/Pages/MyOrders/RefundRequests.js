import React, { useEffect, useState } from 'react'
import RefundServicee from './Service/RefundServicee'
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUserData } from '../../Api/AuthenticationService'

function RefundRequests() {
    const [refund, setRefund] = useState([])
    const usenavigate = useNavigate()
    const [data,setData] = useState('')

    
   
    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
            
            
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    useEffect(() => {
        
            gettingAllRequest()
        
        
        
    },[data])



    

    const gettingAllRequest = () => {
        RefundServicee.getAllRefund().then((response) => {
            setRefund(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function statusrefund(refundid,status) {
        if(status==="Refund Completed"){
            toast("Refund Has Been Completed For The Order")
            var s = window.confirm("Still Want To Check With The Status Press Ok To Confirm")
            if(s===true){
                usenavigate("/refundstatus/" + refundid);
            }
        }
        else{
            usenavigate("/refundstatus/" + refundid);
        }
      
    }


    return (
        <div >

            <Headers />

            <br/><br/>
            <div class="table-users">
                <div class="headerdwadwa">Refund Orders</div>

                <table className='table'>
                    <tr >

                        <th width="230">ProductName</th>
                        <th width="230">Total Price</th>
                        <th width="230">PaymentID</th>
                        <th width="230">Refund Status</th>
                        <th width="230">OrderId</th>
                        <th width="230">Refund</th>
                        <th width="230">Update Details</th>
                    </tr>
                    {
                        refund.map(refund =>
                            <tr>

                                <td>{refund.productname}</td>
                                <td>{refund.price}</td>
                                <td>{refund.paymentid}</td>
                                <td className='status1'>{refund.refundstatus}</td>
                                <td>{refund.orderid}</td>
                                <td><BootStrap.Button variant="warning" onClick={() => { navigator.clipboard.writeText(refund.paymentid) }} href='https://dashboard.razorpay.com/app/payments'>Proceed Request</BootStrap.Button></td>
                                <td><BootStrap.Button variant="warning" onClick={() => statusrefund(refund.id,refund.refundstatus)}>Update Status</BootStrap.Button></td>
                            </tr>
                        )
                    }
                </table>

            </div>
            <ToastContainer/>

            <br/><br/>
            <Footer />
        </div>
    )
}

export default RefundRequests