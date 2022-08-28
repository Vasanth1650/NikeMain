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
import _ from 'lodash'




const pageSize = 5
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
    const [paginatedOrders,setPaginatedOrders] = useState([])
    const [currentPage,setCurrentPage] =useState(1)

    
    const pageCount = ordered ? Math.ceil(ordered.length/pageSize) : 0

   

    const pages = _.range(1,pageCount+1)


    useEffect(() => {
        if (!localStorage.getItem("USER_KEY")) {
            localStorage.clear();
            usenavigate('/login')
        }
        if(pageCount===1) return null;
    }, [])

    useEffect(() => {
        if (check === "undefined") {
            usenavigate('/login')
        }

    }, [])

    const pagination = (pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize
        const paginatedOrder = _(ordered).slice(startIndex).take(pageSize).value();
        setPaginatedOrders(paginatedOrder)
    }

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
                            Myorderservice.deleting(orderid)
                            usenavigate('/')
                            toast("Refund Request Has Been Requested")
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
            setPaginatedOrders(_(response.data.ordered).slice(0).take(pageSize).value())
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    return (
        <div style={{backgroundColor:"white"}}>



            <Headers />


            <br/><br/>



            <div class="table-users">
                <div class="headerudbaw">My Orders</div>


                <table className='table'>
                    <tr >

                        <th>ProductName</th>
                        
                        <th>Status</th>
                        <th width="230"></th>
                        <th width="230"></th>
                    </tr>
                    {
                        paginatedOrders.map(ordered =>
                            <tr>

                                <td>{ordered.productname}</td>
                                
                                <td>{ordered.status}</td>
                                <div className='omfed'>
                                    <BootStrap.Button className='kneab' variant='warning' onClick={() => OrderId(ordered.id)}>View Details</BootStrap.Button>
                                </div>
                                <br/>
                                {ordered.status4===null && 
                                <div className='omfed'>
                                <BootStrap.Button className='kneab' variant="danger" onClick={() => Refund(data.id, data.username, ordered.id, ordered.productname, ordered.paymentid,
                                    ordered.payment, ordered.id, ordered.status4)}>Cancel Order</BootStrap.Button>
                                    
                                </div>
                                    }
                                    <br/>
                            </tr>
                        )
                    }
                    

                </table>

                <nav className='d-flex justify-content-center'>
                    <ul className='pagination'>
                        {
                            pages.map((page)=>(
                                <li className={
                                    page === currentPage?"page-item active" : "page-item"
                                }>
                                    <p className='page-link' onClick={()=>pagination(page)}>{page}</p>
                                </li>
                            ))
                        }
                        
                        
                    </ul>
                </nav>
                
            </div>

            <br/><br/>

            <div class="table-users">
                <div class="headerdwada">Refund Orders</div>

                <table className='table'>
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


           

                    <br/><br/>


            <ToastContainer/>







            <Footer />

        </div>
    )
}

export default More