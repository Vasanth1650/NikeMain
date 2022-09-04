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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardService from '../MostPopular/Services/DashboardService';
import OptionPageService from '../RedirectAllCategory/Services/CategoryService'
import NormalProductService from './Services/NormalProductService';






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
    const [productid, setProductid] = useState('')
    const [gentle, setGentle] = useState([])
    const [bottom, setBottom] = useState([])
    const [similar, setSimilar] = useState([])


    useEffect(() => {
        getByCategory(product.category1);
        findByGender(product.category1)
        findByName(product.productname)
    }, [product])

    let sizeign = bottom.length + gentle.length



    useEffect(() => {

    }, [sizeign])

    const findByName = () => {
        NormalProductService.findByName(product.productname).then((response) => {
            setSimilar(response.data)
            console.log("Hello", response.data)
        }).catch((error) => {
            console.log(error)
        })
    }



    const findByGender = () => {
        DashboardService.getByCategory1(product.category1).then((response) => {
            setGentle(response.data)


        }).catch((error) => {
            console.log(error)
        })
    }


    const getByCategory = () => {
        OptionPageService.findByCategory(product.category1).then((response) => {
            setBottom(response.data);


        }).catch(error => {
            console.log(error)
        })
    }



    const handleClick = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined") && (!product.buyingoption)) {
            const checkouts = { userid, username, productname, image1, price, size }
            if (size && size != "-") {
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
            } else if (size === "-") {
                toast("These Size Are Unavailable")
            } else {
                toast("Please Choose Size For Your Product")
            }
        }else if((localStorage.getItem("USER_KEY")) && (check !== "undefined") && (product.buyingoption==="Membership")){
            const check = { userid, username, productname, image1, price, size }
            if(data.subscription!=="No Subscription"){
            if (size && size != "-") {
                fetch("https://nike-backend.herokuapp.com/charging/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(check)
                }).then(() => {
                    console.log("Everything Went Perfect")
                    usenavigate("/checkout")
                }).catch(error => {
                    console.log("something went wrong")
                })
            } else if (size === "-") {

                toast.dark("Please Select Size Of The Product")
            } else {
                toast("Please Choose Size For Your Product")
            }}else{
                toast("This Product Is Only For Exclusive Member Subscription")
            }
        }else {
            usenavigate('/login')
        }


    }


    const wishlist = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const check = { productid, userid, username, productname, image1 }

            fetch("https://nike-backend.herokuapp.com/normalwishing/addwishlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(check)
            }).then((res) => {
                if (!res.ok) {
                    throw Error('Something Went Wrong')
                }
                if (res.ok) {
                    toast("Item Added To Wishlist");
                }
            }).catch(error => {
                console.log("something went wrong")
                toast("Item Already Exists In Wishlist")
            })

        } else {
            usenavigate('/login')
        }
    }


    $(document).ready(function () {
        var itemsMainDiv = ('.MultiCarousel');
        var itemsDiv = ('.MultiCarousel-inner');
        var itemWidth = "";

        $('.leftLst, .rightLst').click(function () {
            var condition = $(this).hasClass("leftLst");
            if (condition)
                click(0, this);
            else
                click(1, this)
        });

        ResCarouselSize();




        $(window).resize(function () {
            ResCarouselSize();
        });


        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);


                if (bodyWidth >= 2000) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 1592) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });

                $(".leftLst").addClass("over");
                $(".rightLst").removeClass("over");

            });
        }



        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLst');
            var rightBtn = ('.rightLst');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);
            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            }
            else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }


        function click(ell, ee) {
            var Parent = "#" + $(ee).parent().attr("id");
            var slide = $(Parent).attr("data-slide");
            ResCarousel(ell, Parent, slide);
        }

    });





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

    }, [id])



    const getById = (id) => {
        OptionPage.productbyID(id).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
            usenavigate(-1)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    function sizeChart(areaCategory) {
        if (areaCategory === "Men's Shoes" || areaCategory === "Kid's Shoes" || areaCategory === "Women's Shoes" || areaCategory === "Mens training" || areaCategory === "Womens training" || areaCategory === "Kids training" || areaCategory === "Slides And Sandals") {
            usenavigate('/size')
        } else if (areaCategory === "T Shirt" || areaCategory === "Tops") {
            usenavigate('/sizetops')
        } else {
            usenavigate('/allsize')
        }
    }


    const Nextstep = (ids) => {
        console.log(ids);
        usenavigate('/nextsteps/' + ids);
    }

    const Nextsteps = (ids) => {
        console.log(ids);
        usenavigate('/most/' + ids);
    }







    return (
        <div className='bodyd'>

            <Headers />
            


            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src={product.image1} />
                        <BootStrap.Card.Img className='tre111' variant="top" src={product.image2} />


                        <div className='conenting'>
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",color:"black"}} className="produ">{product.productname}<BootStrap.Button className='favorite' onClick={wishlist}><AiOutlineHeart /></BootStrap.Button></div>
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{product.category1}</div>
                            <br/>
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>₹{product.price}
                                <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Includes All Taxes</div>

                            </div>
                            <br />
                            {
                                similar.map(similar =>

                                    <div className='kuttsdes'>

                                        <img width="75" height="80" className='kutti' onClick={() => Nextstep(similar.id)} src={similar.image1}></img>
                                        {product.id === similar.id &&
                                            <div>--------</div>}
                                    </div>

                                )
                            }
                            <br /><br />
                            <br />
                            <br />
                            <br />

                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Size</div>
                            <br/>
                            {product.size1 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</BootStrap.Button>}
                            {product.size2 !== "-" &&
                                <BootStrap.Button style={{marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</BootStrap.Button>}
                            {product.size3 !== "-" &&
                                <div className='dashhider'>---------------------------------</div>}
                            {product.size3 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</BootStrap.Button>}
                            {product.size4 !== "-" &&
                                <BootStrap.Button style={{marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</BootStrap.Button>}

                            <div className='dashhider'>---------------------------------</div>
                            {product.size5 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</BootStrap.Button>}
                            <button style={{color:"black",marginLeft:"9%"}}  className='sizechartss' onClick={() => sizeChart(product.category1)}>Size Chart</button>

                        </div>
                    </div>
                    <div className='carding' style={{marginTop:"-1.5%"}}>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image4} />
                        <div className='conentings'>
                            <div  className='atsdaw'>
                                <a style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",color:"black"}} href='#'>Including All Taxes Applied..</a>
                            </div>
                            <br/>
                            <BootStrap.Button className='bags' onClick={handleClick}>Add to bag</BootStrap.Button>
    

                        </div>

                    </div>

                    <div className='carding' style={{marginTop:"1%"}}>
                        
                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image6} />
                        <div className='conenting1'>
                        <br/>
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{product.productdescription}
                                <div className='extra'>
                                    <button class="btn popup-btn" href="#" style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",marginLeft:"-2%"}}>View Details</button>
                                    <br /><br />

                                    <br />
                                    <br />

                                </div></div>

                        </div>

                        <div></div>

                        <div class="popup-wrap">
                            <div class="popup-box">
                                <h2>Product Details</h2>
                                <div>
                                    <div className='dropingheadeers'>Free Delivery And Returns
                                        <BootStrap.DropdownButton className='dropsin' variant="dark">
                                            <br />
                                            <div> • Your order of ₹14,000 or more gets free standard delivery.</div>
                                            <br />
                                            <div> • Standard Delivery for Postal Codes: 100000-399999, 500000-699999 and 800000-899999 : 4 – 16 business days</div>
                                            <br />
                                            <div> • Standard Delivery for Postal Codes: 400000-499999 : 3 – 15 business days</div>
                                            <br />
                                            <div> • Standard Delivery for Postal Codes: 700000-799999 and 900000-999999: 5 – 21 business days</div>
                                            <br />
                                            <div> • Orders are processed and delivered Monday-Friday (excluding public holidays).</div>
                                            <br />

                                            <div >Nike Members enjoy free returns. Exclusions apply.<a href='/subscription'> Learn More</a></div>
                                        </BootStrap.DropdownButton>
                                    </div>

                                </div>
                                <br />
                                <div>*Color Shown : {product.productspecification1}</div>
                                <br />
                                <div>*Style: {product.productspecification2}</div>
                                <br />
                                <div>Product Specifications</div>
                                <div>{product.productspecification3}</div>
                                <br />
                                <div>Inspired Roads : {product.productspecification4}</div>
                                <br />


                                <a class="close-btn popup-close" href="#">x</a>
                            </div>
                        </div>

                        <br />


                    </div>

                    <div className='carding' style={{marginTop:"-2%"}}>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image7} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image8} />
                        <div className='conenting'>

                        </div>














                    </div>

                    <div className='carding' style={{marginTop:"-2%"}}>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image9} />

                        <div className='conenting'>

                        </div>
                    </div>
                </div>
            </div>

            {product.image10 !== "-" &&
                <div className='explore' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Explore the {product.productname}</div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.image10} />
                </div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Light Flex</div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='asd' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{product.productdescription}</div>}


            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.image11} />
                </div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Made By, Big Energy</div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='asd' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{product.productspecification4}</div>}

            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.image12} />
                </div>}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <div className='explore' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Secure for Take-Off {product.productname}</div>}
            {product.image10 !== "-" &&
                <br />}

            {product.image10 !== "-" &&
                <div className='asd' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>{product.productspecification5}</div>}


            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}
            {product.image10 !== "-" &&
                <br />}

            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}

            {sizeign !== 1 &&
                <div className='similars' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>You May Also Like This</div>}

            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}


            <div>
                {sizeign !== 1 &&
                    <div class="containeriknje">
                        <div class="row">
                            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                                <div class="MultiCarousel-inner">



                                    {
                                        bottom.map(bottom =>
                                            <div className="item">
                                                {product.productname !== bottom.productname &&
                                                    <BootStrap.Card className='cardcarsol' style={{ width: '100%' }}>
                                                        <div class="pad15" onClick={() => Nextstep(bottom.id)}>
                                                            <BootStrap.Card.Img variant="top" src={bottom.image1} />
                                                            <BootStrap.Card.Body>
                                                                <div className='mensproductname'>{bottom.productname}</div>
                                                                <div className='mensproductgender'>{bottom.gender}</div>
                                                                <div className='mensproductprice' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>₹{bottom.price}</div>
                                                            </BootStrap.Card.Body>

                                                        </div>
                                                    </BootStrap.Card>
                                                }
                                            </div>


                                        )
                                    }

                                    {
                                        gentle.map(gentle =>
                                            <div className="item">
                                                {product.productname !== gentle.productname &&
                                                    <BootStrap.Card className='cardcarsol' style={{ width: '100%' }}>
                                                        <div class="pad15" onClick={() => Nextsteps(gentle.id)}>
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1} />
                                                            <BootStrap.Card.Body>
                                                                <div className='mensproductname'>{gentle.productname}</div>
                                                                <div className='mensproductgender'>{gentle.gender}</div>
                                                                <div className='mensproductprice' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>₹{gentle.productprice}</div>
                                                            </BootStrap.Card.Body>
                                                        </div>
                                                    </BootStrap.Card>
                                                }
                                            </div>
                                        )
                                    }

                                </div>
                                {sizeign !== 1 &&
                                    <button class="btn btn-primary leftLst" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> ← </button>}
                                {sizeign !== 1 &&
                                    <button class="btn btn-primary rightLst" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> → </button>}


                            </div>
                        </div>
                    </div>}
            </div>
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}
            {sizeign !== 1 &&
                <br />}


            <Footer />

            <ToastContainer />

        </div>


    )
}

export default NormalProductViewing