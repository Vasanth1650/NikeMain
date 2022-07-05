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



            <div class="containers">
                <div className='carding'>

                    <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image1} />
        
                    <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image2} />
                    <div className='conenting'>
                        <div className="produ">{product.productname}</div>
                        <div>{product.category1}</div>
                        <div>₹{product.price}
                            <div>Includes All Taxes</div></div>
                        <br />
                        <br />
                        <br />
                        <div>Size</div>
                        <button className='bus' value={product.size1} onClick={(e) => setSize(product.size1)} validate>{product.size1}</button>
                        <button className='bus' value={product.size2} onClick={(e) => setSize(product.size2)}>{product.size2}</button>
                        <div>---------------------------------</div>
                        <button className='bus' value={product.size3} onClick={(e) => setSize(product.size3)}>{product.size3}</button>
                        <button className='bus' value={product.size4} onClick={(e) => setSize(product.size4)}>{product.size4}</button>
                        <div>---------------------------------</div>
                        <button className='bus' value={product.size5} onClick={(e) => setSize(product.size5)}>{product.size5}</button>

                    </div>
                </div>
                <div className='carding'>

                    <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image3} />
                    <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image1} />
                    <div className='conenting'>
                        <BootStrap.Button className='bags' onClick={handleClick}><BsHandbag />Add to bag</BootStrap.Button>
                        <BootStrap.Button className='bags' onClick={wishlist}><AiOutlineHeart />Favourite</BootStrap.Button>
                    </div>
                </div>

            </div>
            <div className='desc'>Description</div>
            <div className='des'>{product.productdescription}</div>
            <br />
            <div className='des'>★ Color Shown : {product.productspecification1}</div>
            <div className='des'>★ Color Shown : {product.productspecification2}</div>








            <br></br>


            <br />
            <br />














            <br />

            <Footer />



        </div>


    )
}

export default NormalProductViewing