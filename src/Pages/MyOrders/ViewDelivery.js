import React, { useEffect, useState } from 'react';
import './Styles/Order.scss';
import './Styles/Order.css';
import Myorderservice from './Service/Myorderservice';
import { useLocation, useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService'
import {useNavigate} from 'react-router-dom'
import Headers from '../Headers/Header';










function ViewDelivery() {
    const usenavigate = useNavigate()
    const location = useLocation()
    
    const [data,setData] = useState({})
    const [userid,setUserid] = useState('')
    const [product,setProduct] = useState([])

    let m = localStorage.getItem("Userid")

    
   useEffect(()=>{
        getByUserid()
   },[])
    

    
    

    const getByUserid = () =>{
        
            Myorderservice.finderById(location.state.id).then((response)=>{
                setProduct(response.data);
                
            }).catch((error)=>{
                console.log(error);
            })
        
        
    }


   
    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])
    
        
    return (
    <div>
        

        <Headers/>




        
        <div className='order'>
            <div class="tableingss">
                <div class="table-cell">
                    <div class="box">
                        <div class="row">
                            <div class="col4 sidebar" style={{backgroundColor:"orange",cursor:"pointer"}}>
                                <ul>
                                    <li class={product.status1}><span>Order Is Being Processed</span></li>
                                    <li class={product.status2}><span>Pick up</span></li>
                                    <li class={product.status3}><span>In transit</span></li>
                                    <li class={product.status4}><span>Out for delivery</span></li>
                                    <li class={product.status5}><span>Delivered</span></li>
                                </ul>
                                
                            </div>
                            <div class="col8 mapbox">
                            
                                <div class="map">
                                    
                                </div>
                                
                                
                                
                                <div id="number"><div>Payment ID:</div> {product.paymentid} </div>
                                <br/><br/><br/><br/><br/><br/>
                                <div>------------------------------------------------</div>
                                <div>Status: {product.status}</div>
                                <div>------------------------------------------------</div>
                                <div>Product Ordered: {product.productname}</div>
                                <div>------------------------------------------------</div>
                                <div>Paid : {product.payment}Rupees</div>
                                <div>------------------------------------------------</div>
                                <div>Size : {product.size}</div>
                                <div>------------------------------------------------</div>
                                
                            </div>
                            
                            
                        </div>
                        <div class="row">
                            <div class="col6"><h2>From</h2>
                                <div class="address">Nike Corporation<br />
                                    Suite 1450<br />
                                    California, IL 60606-2806</div>
                            </div>
                            <div class="col6"><h2>To</h2>
                                <div class="address">{product.address}<br />{product.state}<br />
                                    {product.city}</div></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>



            

        
        </div>
    )
}

export default ViewDelivery