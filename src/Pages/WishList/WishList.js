import React, { useEffect, useState } from 'react';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import './Styles/Wishlist.css'
import WishListService from './Services/WishListService';
import * as BootStrap from 'react-bootstrap' 
import NormalListService from './Services/NormalListService';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";

function WishList() {
    const [wish, setWish] = useState([])
    const [normal,setNormal] = useState([])
    const usenavigate = useNavigate()

    useEffect(() => {
        getAllWishlists()
        getAllNormal()
    }, [])

    let m = localStorage.getItem("Userid")


    const getAllWishlists = () => {
        WishListService.findByUserid(m).then((response) => {
            setWish(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getAllNormal = () => {
        NormalListService.findByUserid(m).then((response)=>{
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
            alert("Item Removed From Wishlist")
        }).catch((error)=>{
            console.log(error)
        })
    }

    const deletefromnormal = (id) =>{
        NormalListService.deleting(id).then((response)=>{
            getAllNormal()
            alert("Item Removed From WishList")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='bug'>
            <Header />

            <div className='gradient-texting'>WishList</div>
            <div >
                <BootStrap.Row className='cardssss' xs={1} md={4} >
                    {
                        wish.map(wish =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup >
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img onClick={() => openup(wish.productid)} className='image' variant="top" src={wish.image1} />
                                            <BootStrap.Card.Body>
                                                
                                                <BootStrap.Card.Title onClick={() => openup(wish.productid)}>{wish.productname}</BootStrap.Card.Title>
                                            </BootStrap.Card.Body>
                                            
                                            
                                        </BootStrap.Card>
                                        
                                    </BootStrap.CardGroup>
                                    <BootStrap.Nav.Link onClick={() => deletefromwish(wish.id)}><MdCancel/></BootStrap.Nav.Link>
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
                                        <BootStrap.Card onClick={() => normaling(normal.productid)}>
                                            <BootStrap.Card.Img className='image' variant="top" src={normal.image1} />
                                            <BootStrap.Card.Body>
                                                
                                                <BootStrap.Card.Title>{normal.productname}</BootStrap.Card.Title>
                                            </BootStrap.Card.Body>
                                            

                                        </BootStrap.Card>
                                        
                                    </BootStrap.CardGroup>
                                    <BootStrap.Nav.Link onClick={() => deletefromnormal(normal.id)}><MdCancel/></BootStrap.Nav.Link>
                                    <br />
                                </div>
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
            </div>


            
            


            <Footer />
        </div>
    )
}

export default WishList