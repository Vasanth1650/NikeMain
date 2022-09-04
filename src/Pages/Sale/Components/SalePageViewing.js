import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { fetchUserData } from '../../../Api/AuthenticationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';
import Headers from '../../Headers/Header';
import Footer from '../../Footer/Footer';
import $ from 'jquery'
import SalePageService from '../Service/SalePageService';
import OptionPageService from '../../RedirectAllCategory/Services/CategoryService'
import DashboardService from '../../MostPopular/Services/DashboardService';
import PriorityService from '../Service/PriorityService';
import Offer from '../../Headers/Offers/Offer';


function loadScript(src) {

    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src

        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

function SalePageViewing() {
    const usenavigate = useNavigate()
    const [data, setData] = useState({})
    const location = useLocation()
    const [product, setProduct] = useState([])
    const [size, setSize] = useState('')
    const [userid, setUserid] = useState('')
    const [username, setUsername] = useState('')
    const [productname, setProductname] = useState('')
    const [image1, setImage1] = useState('')
    const [price, setPrice] = useState('')
    const [check, setCheck] = useState('')
    const [productid, setProductid] = useState('')
    const [gentle, setGentle] = useState([])
    const [bottom, setBottom] = useState([])
    const [similar, setSimilar] = useState([])


    useEffect(() => {
        findByGender()
        getByCategory()
    }, [product])

    useEffect(() => {
        setUserid(data.id);
    }, [data])


    useEffect(() => {
        SalePageService.getById(location.state.id).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch((crr) => {
            console.log(crr)
        })
    }, [])

    let sizeign = bottom.length + gentle.length

    useEffect(() => {

    }, [sizeign])


    const findByGender = () => {
        DashboardService.getByCategory1(product.category1).then((response) => {
            setGentle(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getByCategory = () => {
        OptionPageService.findByCategory(product.category1).then((response) => {
            setBottom(response.data);
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


    $(document).ready(function () {
        $('.popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(500);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');

            e.preventDefault();
        });
    });



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





    async function displayRazorpay(valuess, productid) {
        if (data.username) {
            if (size) {
                const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

                if (!res) {
                    alert('Razorpay Not Loaded')
                    return
                }

                const dum = fetch('http://localhost:8081/razorpay', { method: 'POST' }).then((t) => {
                    t.json()
                })

                console.log(data)

                adddetails(productid)

                const options = {
                    key: "rzp_test_1UP2mUDjjS5OZf",
                    currency: "INR",
                    amount: valuess * 100,
                    order_id: dum.order_id,
                    name: "Nike Corporation",
                    description: "Checkout",
                    image: "https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg",
                    handler: function (response) {


                        console.log(response.razorpay_payment_id)


                        addCarddetails()

                    },

                    theme: {
                        color: "#3399cc",
                        hide_topbar: true
                    }
                }
                var rzp1 = new window.Razorpay(options);
                rzp1.open();

                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                });
            } else {
                alert("Please Choose A Size")
            }
        } else {
            usenavigate('/login')
        }
    }

    const adddetails = (productid) => {
        const total = { productid, userid }
        fetch("https://nike-backend.herokuapp.com/queue/addqueue", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(total)
        }).then((response) => {
            if (response.ok) {
                console.log("ProductAddedByUser" + userid + productid)
            }
            if(!response.ok){
                window.location.reload()
            }
        }).catch((err) => {
            alert("Refresh The Page")
        })
    }

    const addCarddetails = () => {
        const total = { userid }
        PriorityService.update(total).then((response) => {
            alert("Thank You")
        }).catch((err) => {
            alert("Something Went Wrong")
        })
    }



    return (
        <div className='bodyd'>

            <Headers />
            <Offer/>
            
            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src={product.productimage1} />
                        {product.image2checker === "Video" &&
                            <div className='vido' style={{ position: "static" }}>
                                <ReactPlayer width={500} height={451} muted type='video/mp4' loop playing={true} url={product.productimage2} playsinline />
                            </div>} 

                        {product.image2checker === "Image" &&
                            <BootStrap.Card.Img className='tre111' variant="top" src={product.productimage2} />}

                        {product.image2checker==="Image"&&
                        <div className='conentingsi' style={{ marginLeft: "5%" }}>
                            <div style={{ color: "black", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} className="produ">{product.productname}</div>
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.category1} {product.status==="Launched"&& <>(units : {product.quantity})</>}</div>

                            <br />
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>₹{product.productprice}
                                <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Includes All Taxes</div>

                            </div>
                            
                         
                            {product.quantity !== 0 &&
                                <>
                                    {product.status === "Launched" &&
                                        <>
                                            <div style={{ paddingBottom: "5%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Size</div>
                                            {product.size1 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</BootStrap.Button>}
                                            {product.size2 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px",marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</BootStrap.Button>}
                                            {product.size3 !== "-" &&
                                                <div>---------------------------------</div>}
                                            {product.size3 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</BootStrap.Button>}
                                            {product.size4 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px",marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</BootStrap.Button>}
                                            <div>---------------------------------</div>
                                            {product.size5 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</BootStrap.Button>}
                                            <button style={{ color: "black",marginLeft:"10%" }} className='sizechartss' onClick={() => sizeChart(product.category1)}>Size Chart</button>
                                        </>}
                                </>}

                        </div>}

                        {product.image2checker==="Video"&&
                        <div className='conentingsi' style={{ marginLeft: "0%" }}>
                            <div style={{ color: "black", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} className="produ">{product.productname}</div>
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.category1} {product.status==="Launched"&& <>(units : {product.quantity})</>}</div>

                            <br />
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>₹{product.productprice}
                                <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Includes All Taxes</div>

                            </div>
                            
                            <br/>
                            {product.quantity !== 0 &&
                                <>
                                    {product.status === "Launched" &&
                                        <>
                                            <div style={{ paddingBottom: "5%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Size</div>
                                            {product.size1 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</BootStrap.Button>}
                                            {product.size2 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px",marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</BootStrap.Button>}
                                            {product.size3 !== "-" &&
                                                <div className='dashhider'>---------------------------------</div>}
                                            {product.size3 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</BootStrap.Button>}
                                            {product.size4 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px",marginLeft:"12%"}} className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</BootStrap.Button>}
                                            <div className='dashhider'>---------------------------------</div>
                                            {product.size5 !== "-" &&
                                                <BootStrap.Button style={{borderRadius:"5px"}} className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</BootStrap.Button>}
                                            <button style={{ color: "black",marginLeft:"10%" }} className='sizechartss' onClick={() => sizeChart(product.category1)}>Size Chart</button>
                                        </>}
                                </>}

                        </div>}
                    </div>
                    <div className='carding' >

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage4} />
                        <div className='conentings'>
                            {
                                product.quantity !== 0 &&
                                <>
                                    {
                                        product.status === "Launched" &&
                                        <div className='atsdaw' style={{marginTop:"-70%"}}>
                                            <a style={{ style: "black", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} href='#' >Including All Taxes Applied..</a>
                                        </div>
                                    }
                                </>
                            }

                            {product.quantity !== 0 &&
                                <>
                                    {product.status === "Launched" &&
                                        <div style={{marginTop:"10%"}}>
                                            <BootStrap.Button style={{paddingTop: "10%", paddingBottom: "10%",width:"150%"}} className='bags' onClick={() => displayRazorpay(product.productprice, product.id)}>Add to bag</BootStrap.Button>
                                        </div>
                                    }
                                </>}

                            <>
                                {product.status === "Coming Soon" &&
                                    <div style={{ marginTop: "-250%" }}>
                                        <BootStrap.Button style={{ paddingTop: "10%", paddingBottom: "10%",width:"150%"}} className='bags'>Coming Soon</BootStrap.Button>
                                    </div>

                                }
                            </>
                            {product.quantity === 0 &&
                                <>
                                    {product.status === "Launched" &&
                                        <div style={{ marginTop: "-250%" }}>
                                            <BootStrap.Button className='bags' style={{ paddingTop: "10%", paddingBottom: "10%",width:"150%"}}>Out Of Stock</BootStrap.Button>
                                        </div>

                                    }
                                </>}

                        </div>

                    </div>

                    <div className='carding' >

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage6} />
                        {
                            product.quantity === 0 &&
                            <>
                                {product.status === "Launched" &&
                                    <div className='conenting1' style={{ marginTop: "-60%" }}>
                                        <br />
                                        <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productdescription}
                                            <div className='extra'>
                                                <button style={{ marginLeft: "-2%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} class="btn popup-btn" href="#">View Details</button>
                                            </div></div>

                                    </div>
                                }
                            </>
                        }


                        <>
                            {product.status === "Coming Soon" &&
                                <div className='conenting1' style={{ marginTop: "-60%" }}>
                                    <br />
                                    <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productdescription}
                                        <div className='extra'>
                                            <button style={{ marginLeft: "-2%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} class="btn popup-btn" href="#">View Details</button>
                                        </div></div>

                                </div>
                            }
                        </>


                        {
                            product.quantity !== 0 &&
                            <>
                                {product.status === "Launched" &&
                                    <div className='conenting1' style={{ marginTop: "-40%" }}>
                                        <br />
                                        <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productdescription}
                                            <div className='extra'>
                                                <button style={{ marginLeft: "-2%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} class="btn popup-btn" href="#">View Details</button>
                                            </div></div>

                                    </div>
                                }
                            </>
                        }


                        <div></div>

                        <div class="popup-wrap" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",marginTop:"-30%",marginLeft:"-10%"}}>
                            <div class="popup-box">
                                <h2>Product Details</h2>
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

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage7} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage8} />
                        <div className='conenting'>

                        </div>














                    </div>

                    <div className='carding' style={{marginTop:"-2%"}}>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage9} />

                        <div className='conenting'>

                        </div>
                    </div>
                </div>
            </div>

            {product.productimage10 !== "-" &&
                <div className='explore' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Explore the {product.productname}</div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.productimage10} />
                </div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Light Flex</div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='asd' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productdescription}</div>}


            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.productimage11} />
                </div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Made By, Big Energy</div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='asd' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productspecification4}</div>}

            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore'>
                    <img width="1000" src={product.productimage12} />
                </div>}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <br />}
            {product.productimage10 !== "-" &&
                <div className='explore' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Secure for Take-Off {product.productname}</div>}
            {product.productimage10 !== "-" &&
                <br />}

            {product.productimage10 !== "-" &&
                <div className='asd' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productspecification5}</div>}

            <br /><br /><br /><br />

            {sizeign !== 0 &&
            <div className='similars' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>You May Also Like This</div>}
            <br /><br />
            

            {sizeign !== 0 &&
            <div>
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
                                                            <div className='mensproductprice' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>₹{bottom.price}</div>
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
                                                            <div className='mensproductprice' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>₹{gentle.productprice}</div>
                                                        </BootStrap.Card.Body>
                                                    </div>
                                                </BootStrap.Card>
                                            }
                                        </div>
                                    )
                                }

                            </div>
                            <button class="btn btn-primary leftLst" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> ← </button>
                            <button class="btn btn-primary rightLst" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> → </button>


                        </div>
                    </div>
                </div>
            </div>}
            
            {sizeign !== 0 &&<div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>}
           

            <ToastContainer />
            <Footer />


        </div>
    )
}

export default SalePageViewing