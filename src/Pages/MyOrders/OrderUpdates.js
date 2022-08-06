import React, { useEffect, useState } from 'react'
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Myorderservice from './Service/Myorderservice';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import {fetchUserData} from '../../Api/AuthenticationService'

function OrderUpdates() {
    const usenavigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [data,setData] = useState('')

    

    

    

    
    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
            
            
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    useEffect(() => {
        
            getOrderedDetails()
        
        
        
    },[data])

    const getOrderedDetails = () => {
        Myorderservice.getAllOrders().then((response) => {
            setOrders(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function updateorderStatus(id,status5) {
        if(status5==="active"){
            alert("Already Delivered")
            var m = window.confirm("The Order Is Already In Delivered State Click Ok To Confirm Editing")
            if(m===true){
                usenavigate('/orderstatus/'+id)
            }
        }else{
            usenavigate('/orderstatus/' + id)
        }
        
    }

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    return (
        <div>

            <Headers />

            <br/><br/>

            <div class="table-users">
                <div class="header">Orders Received</div>

                <table className='table'>
                    <tr >
                        <th>Order Id</th>
                        <th width="230">Username</th>
                        <th width="230">ProductName</th>
                        <th>Payment</th>
                        <th width="230">Status</th>

                        <th>City</th>
                        <th>Update Details</th>
                    </tr>
                    {
                        orders.map(orders =>
                            <tr>
                                <td>{orders.id}</td>
                                <td>{orders.username}</td>
                                <td>{orders.productname}</td>
                                <td>{orders.payment}</td>
                                <td className='status1'>{orders.status}</td>

                                <td>{orders.city}</td>
                                <td><BootStrap.Button variant="warning" onClick={() => updateorderStatus(orders.id,orders.status5)}>Update Status</BootStrap.Button></td>
                            </tr>
                        )
                    }
                </table>

            </div>

            <Footer />

        </div>
    )
}

export default OrderUpdates