import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/More.scss';
import * as BootStrap from 'react-bootstrap';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService'
import Myorderservice from './Service/Myorderservice';
import RefundServicee from './Service/RefundServicee';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function More() {
    const usenavigate = useNavigate()
    const [data, setData] = useState({})
    const [userid, setUserid] = useState('')
    const [product, setProduct] = useState([])
    const [username, setUsername] = useState('')
    const [refund, setRefund] = useState([])
    const [check, setCheck] = useState('')
    const [roles,setRoles] = useState([])
    const [ordered,setOrdered] = useState([])

    useEffect(() => {
        if (!localStorage.getItem("USER_KEY")) {
            localStorage.clear();
            usenavigate('/login')
        }
    }, [])

    useEffect(() => {
        if (check === "undefined") {
            usenavigate('/login')
        }

    }, [])

    localStorage.setItem("Userid", data.id)

    const m = localStorage.getItem("Userid")

    console.log(m)

    useEffect(() => {
        
        refundid()
    }, [m])

    console.log(product)

    

    const refundid = () => {
        RefundServicee.getDetails(m).then((response) => {
            setRefund(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function OrderId(id) {
        usenavigate("/myorders/" + id);
    }

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    function Refund(userid, username, productid, productname, paymentid, price, orderid, status4) {
        if (status4 === null) {
            if (productid) {
                const confirmBox = window.confirm(
                    "Do You Really Want To Cancel This Order?"
                )
                if (confirmBox === true) {
                    const confirmation = window.confirm("Press Yes To Cancel The Order")

                    if (confirmation === true) {

                        const details = { userid, username, productname, productid, paymentid, price, orderid }
                        fetch("https://nike-backend.herokuapp.com/refund/refundcollector", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(details)
                        }).then(() => {
                            toast("Refund Request Has Been Requested")
                            Myorderservice.deleting(orderid)
                        })
                    }
                }
            }
        } else {
            toast("Your Package Is Out For Delivery To Cancel Or Replace Contact Further For Nike Support")
        }

    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
            setRoles(response.data.roles)
            setOrdered(response.data.ordered)
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    return (
        <div>



            <Headers />





            <div class="table-users">
                <div class="header">MyOrders</div>


                <table cellspacing="0">
                    <tr >

                        <th>ProductName</th>
                        
                        <th>Status</th>
                        <th width="230"></th>
                        <th width="230"></th>
                    </tr>
                    {
                        ordered.map(ordered =>
                            <tr>

                                <td>{ordered.productname}</td>
                                
                                <td>{ordered.status}</td>

                                <td><BootStrap.Button onClick={() => OrderId(ordered.id)}>View Details</BootStrap.Button></td>
                                {ordered.status4===null && 
                                <td><BootStrap.Button variant="danger" onClick={() => Refund(data.id, data.username, ordered.id, ordered.productname, ordered.paymentid,
                                    ordered.payment, ordered.id, ordered.status4)}>Cancel Order</BootStrap.Button></td>}
                            </tr>
                        )
                    }
                    

                </table>

            </div>


            <div class="table-users">
                <div class="header">Refund Orders</div>

                <table cellspacing="0">
                    <tr >

                        <th>ProductName</th>
                        <th>Total Price</th>
                        <th >PaymentID</th>
                        <th width="230">Refund Status</th>
                        <th width="230">OrderId</th>
                    </tr>
                    {
                        refund.map(refund =>

                            <tr>

                                <td>{refund.productname}</td>
                                <td>{refund.price}</td>
                                <td>{refund.paymentid}</td>
                                <td>{refund.refundstatus}</td>
                                <td>{refund.orderid}</td>
                            </tr>

                        )
                    }
                </table>

            </div>


           




            <ToastContainer/>







            <Footer />

        </div>
    )
}

export default More