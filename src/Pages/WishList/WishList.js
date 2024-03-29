import React, { useEffect, useState } from 'react';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import './Styles/Wishlist.css'
import WishListService from './Services/WishListService';
import * as BootStrap from 'react-bootstrap' 
import NormalListService from './Services/NormalListService';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUserData } from '../../Api/AuthenticationService';

function WishList() {
    const [wish, setWish] = useState([])
    const [normal,setNormal] = useState([])
    const usenavigate = useNavigate()
    const [data,setData] = useState({})

    useEffect(() => {
        getAllWishlists()
        getAllNormal()
    }, [data])

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        if(!localStorage.getItem("USER_KEY")){
            usenavigate('/login')
        }
    },[])

    let m = localStorage.getItem("Userid")


    const getAllWishlists = () => {
        WishListService.findByUserid(data.id).then((response) => {
            setWish(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getAllNormal = () => {
        NormalListService.findByUserid(data.id).then((response)=>{
            setNormal(response.data)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    function openup (id){
        usenavigate('/most/'+id)
    }

    function normaling (id){
        usenavigate('/nextsteps/'+id)
    }

    const deletefromwish = (id) =>{
        WishListService.deleting(id).then((response)=>{
            getAllWishlists();
            toast("Item Removed From Wishlist")
        }).catch((error)=>{
            console.log(error)
        })
    }

    const deletefromnormal = (id) =>{
        NormalListService.deleting(id).then((response)=>{
            getAllNormal()
            toast("Item Removed From WishList")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='bug' style={{backgroundColor:"white"}}>
            <Header />

            <div style={{fontSize:"xx-large",textAlign:"center",fontFamily:"fantasy"}}>WishList</div>
            <div >
                <BootStrap.Row className='cardssss' xs={1} md={4} >
                    {
                        wish.map(wish =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup >
                                        <BootStrap.Card style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                            <BootStrap.Card.Img onClick={() => openup(wish.productid)} className='image' variant="top" src={wish.image1} />
                                            <BootStrap.Card.Body>
                                                
                                                <BootStrap.Card.Title onClick={() => openup(wish.productid)}>{wish.productname}</BootStrap.Card.Title>
                                                <BootStrap.Nav.Link onClick={() => deletefromwish(wish.id)}><MdCancel/></BootStrap.Nav.Link>
                                            </BootStrap.Card.Body>
                                            
                                            
                                        </BootStrap.Card>
                                        
                                    </BootStrap.CardGroup>
                                    
                                    <br />
                                    
                                </div>
                                
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
            </div>

            <div >
                <BootStrap.Row  xs={1} md={4} >
                    {
                        normal.map(normal =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup >
                                        <BootStrap.Card style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}} onClick={() => normaling(normal.productid)}>
                                            <BootStrap.Card.Img className='image' variant="top" src={normal.image1} />
                                            <BootStrap.Card.Body>
                                                
                                                <BootStrap.Card.Title>{normal.productname}</BootStrap.Card.Title>
                                                <BootStrap.Nav.Link onClick={() => deletefromnormal(normal.id)}><MdCancel/></BootStrap.Nav.Link>
                                            </BootStrap.Card.Body>
                                            

                                        </BootStrap.Card>
                                        
                                    </BootStrap.CardGroup>
                                    
                                    <br />
                                </div>
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
            </div>


            
            <ToastContainer/>


            <Footer />
        </div>
    )
}

export default WishList