import React from 'react'
import './Styles/DetailedPage.css';
import './Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import OptionPage from './Services/NormalProductService'
import { useState } from 'react';
import $ from 'jquery';
import { fetchUserData } from '../../Api/AuthenticationService';
import './Styles/ViewPage.scss'
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';






function NormalProductViewing() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const [userid, setUserid] = useState('')
    const [username, setUsername] = useState('')
    const [productname, setProductname] = useState('')
    const [image1, setImage1] = useState('')

    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')

    console.log("Hi", size)

    const [productid,setProductid] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const checkouts = { userid, username, productname, image1, price, size }
            if (size) {
                fetch("https://nike-backend.herokuapp.com/charging/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(checkouts)
                }).then(() => {
                    console.log("Everything Went Perfect")
                    usenavigate("/checkout")
                }).catch(error => {
                    console.log("something went wrong")
                })
            } else {
                alert("Please Select Size Of The Product")
            }
        } else {
            usenavigate('/login')
        }


    }


    const wishlist = (e) =>{
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const check = { productid,userid, username, productname, image1}
            
                fetch("https://nike-backend.herokuapp.com/normalwishing/addwishlist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(check)
                }).then((res) => {
                    if(!res.ok){
                        throw Error('Something Went Wrong')
                    }
                    if(res.ok){
                        alert("Item Added To Wishlist");
                    }
                }).catch(error => {
                    console.log("something went wrong")
                    alert("Item Already Exists In Wishlist")
                })
            
        } else {
            usenavigate('/login')
        }
    }


    





    const usenavigate = useNavigate()

    

    useEffect(() => {
        setUserid(data.id);
        setUsername(data.email)
        setProductname(product.productname)
        setImage1(product.image1)
        setPrice(product.price)
        setCheck(data.username);
        setProductid(id)
    })

    useEffect(() => {
        setCheck(data.username)
        getById(id);

    }, [])

    

    const getById = (id) => {
        OptionPage.productbyID(id).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])







    console.log(data.username)


    return (
        <div className='bodyd'>

            <Headers />



            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image1} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image2} />


                        <div className='conenting'>
                            <div className="produ">{product.productname}</div>
                            <div>{product.category1}</div>
                            <div>₹{product.price}
                                <div>Includes All Taxes</div>

                            </div>
                            
                            <br />
                            <br />
                            <br />
                            <div>Size</div>
                            <button className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</button>
                            <button className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</button>
                            <div>---------------------------------</div>
                            <button className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</button>
                            <button className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</button>
                            <div>---------------------------------</div>
                            <button className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</button>

                        </div>
                    </div>
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image4} />
                        <div className='conentings'>
                            <BootStrap.Button className='bags' onClick={handleClick}><BsHandbag />Add to bag</BootStrap.Button>
                            <BootStrap.Button className='bags' onClick={wishlist}><AiOutlineHeart />Favourite</BootStrap.Button>

                        </div>

                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image6} />
                        <div className='conenting1'>
                        <div>{product.productdescription}
                        <div className='extra'>  
                            <button class="btn popup-btn" href="#">View Details</button>
                        </div></div>
                        
                        </div>
                        
                        <div></div>
                        
                        <div class="popup-wrap">
                            <div class="popup-box">
                                <h2>Product Details</h2>
                                <div>*Color Shown : {product.productspecification1}</div>
                                <br/>
                                <div>*Style: {product.productspecification2}</div>
                                <br/>
                                <div>Product Specifications</div>
                                <div>{product.productspecification3}</div>
                                <br/>
                                <div>Inspired Roads : {product.productspecification4}</div>
                                <br/>
                                
                                <a class="close-btn popup-close" href="#">x</a>
                            </div>
                        </div>
                        
                        <br/>  
                        
                        
                    </div>
                    
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image7} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image8} />
                        <div className='conenting'>
                            
                        </div>
                     




                       








                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image9} />

                        <div className='conenting'>

                        </div>
                    </div>
                </div>
            </div>


            <div className='explore'>Explore the {product.productname}</div>
            <br /><br />
            <div className='explore'>
                <img width="1000" src={product.image10} />
            </div>
            <br /><br />
            <div className='explore'>Light Flex</div>
            <br />
            <div className='asd'>{product.productspecification3}</div>
            <div className='asd'>dynamic flexible tongue provides a lightweight fit and plush</div>
            <div className='asd'>comfort.</div>
            <br /><br /><br />
            <div className='explore'>
                <img width="1000" src={product.image11} />
            </div>
            <br /><br /><br />
            <div className='explore'>Light Feel, Big Energy</div>
            <br />
            <div className='asd'>A full-length Zoom Air Strobel unit is stitched directly to the</div>
            <div className='asd'>upper, sitting right under your foot to minimise weight. An</div>
            <div className='asd'>energy-returning Zoom Air unit is stacked underneath the</div>
            <div className='asd'>forefoot to add an extra burst of responsiveness off the dribble.</div>
            <br /><br /><br /><br />
            <div className='explore'>
                <img width="1000" src={product.image12} />
            </div>
            <br /><br /><br />
            <div className='explore'>Secure for Take-Off</div>
            <br />
            <div className='asd'>Color : {product.productspecification1}</div>
            <div className='asd'>{product.productspecification3}</div>
            <div className='asd'>taking off to finish on offence.</div>
            <br /><br /><br /><br />

            <Footer />



        </div>


    )
}

export default NormalProductViewing