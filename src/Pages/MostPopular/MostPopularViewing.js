import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import './Styles/ViewPage.scss'
import DashboardService from './Services/DashboardService';
import { fetchUserData } from '../../Api/AuthenticationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import $ from 'jquery'
import OptionPageService from '../RedirectAllCategory/Services/CategoryService'



function MostPopularViewing() {
    const usenavigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams()
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
        setUserid(data.id);
        setUsername(data.email)
        setProductname(product.productname)
        setImage1(product.productimage1)
        setPrice(product.productprice)
        setCheck(data.username);
        setProductid(id)

    })

    useEffect(() => {
        getByCategory(product.category1);
        findByGender(product.category1)
        findByName(product.productname)
    }, [product])

    const findByGender = () => {
        DashboardService.getByCategory1(product.category1).then((response) => {
            setGentle(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const findByName = () =>{
        DashboardService.getByName(product.productname).then((response)=>{
            setSimilar(response.data)
            console.log("Hello",response.data)
        }).catch((error)=>{
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


    const wishlist = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const check = { productid, userid, username, productname, image1 }

            fetch("https://nike-backend.herokuapp.com/wishlist/addwishlist", {
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







    const handleClick = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const check = { userid, username, productname, image1, price, size }
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
            }
        } else {
            usenavigate('/login')
        }
    }


    useEffect(() => {
        getting(id)

    }, [id])

    const getting = (id) => {
        DashboardService.getByIds(id).then((response) => {
            setProduct(response.data)
            console.log(response.data)

        }).catch(err => {
            console.log(err)
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


    return (
        <div className='bodyd'>

            <Headers />







            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src={product.productimage1} />
                        <div className='vido' style={{ position: "static" }}>
                            <ReactPlayer width={500} height={451} muted type='video/mp4' loop playing={true} url={product.productimage2} playsinline />
                        </div>


                        <div className='conenting'>
                            <div className="produ">{product.productname}</div>
                            <div>{product.category1}</div>
                            <div>₹{product.productprice}
                                <div>Includes All Taxes</div>

                            </div>
                            <br/>
                            {
                                similar.map(similar=>
                                    
                                    <div className='kuttsdes'>
                                        
                                        <img width="75" className='kutti' onClick={()=>Nextsteps(similar.id)} src={similar.productimage1}></img>
                                        {product.id===similar.id &&
                                        <div>--------</div>}
                                    </div>
                                    
                                )
                            }
                            
                            <br />
                            <br />
                            <br />
                            <br/><br/>
                            <div>Size</div>
                            <BootStrap.Button className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</BootStrap.Button>
                            <BootStrap.Button className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</BootStrap.Button>
                            <div>---------------------------------</div>
                            <BootStrap.Button className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</BootStrap.Button>
                            <BootStrap.Button className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</BootStrap.Button>
                            <div>---------------------------------</div>
                            <BootStrap.Button className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</BootStrap.Button>
                            <button className='sizechartss' onClick={() => sizeChart(product.category1)}>Size Chart</button>

                        </div>
                    </div>
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage4} />
                        <div className='conentings'>
                            <BootStrap.Button className='bags' onClick={handleClick}><BsHandbag />Add to bag</BootStrap.Button>
                            <BootStrap.Button className='bags' onClick={wishlist}><AiOutlineHeart />Favourite</BootStrap.Button>

                        </div>

                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage6} />
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

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage7} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage8} />
                        <div className='conenting'>

                        </div>














                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage9} />

                        <div className='conenting'>

                        </div>
                    </div>
                </div>
            </div>


            <div className='explore'>Explore the {product.productname}</div>
            <br /><br />
            <div className='explore'>
                <img width="1150" src={product.productimage10} />
            </div>
            <br /><br />
            <div className='explore'>Light Flex</div>
            <br />
            <div className='asd'>A minimal but durable Jacquard leno-weave upper paired with a</div>
            <div className='asd'>dynamic flexible tongue provides a lightweight fit and plush</div>
            <div className='asd'>comfort.</div>
            <br /><br /><br />
            <div className='explore'>
                <img width="1150" src={product.productimage11} />
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
                <img width="1150" src={product.productimage12} />
            </div>
            <br /><br /><br />
            <div className='explore'>Secure for Take-Off</div>
            <br />
            <div className='asd'>A 2-loop band system paired with high sidewalls provides side-</div>
            <div className='asd'>to-side stability, whether you're cutting off the ball on defence or</div>
            <div className='asd'>taking off to finish on offence.</div>
            <br /><br /><br /><br />

            <div className='similars'>You May Also Like This</div>
            <br /><br />

            <div>
                <div class="containeriknje">
                    <div class="row">
                        <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                            <div class="MultiCarousel-inner">



                                {
                                    bottom.map(bottom =>
                                        <div className="item">
                                            {product.productname !== bottom.productname && 
                                            <BootStrap.Card className='cardcarsol' style={{ width: '100%'}}>
                                                <div class="pad15" onClick={() => Nextstep(bottom.id)}>
                                                <BootStrap.Card.Img variant="top" src={bottom.image1} />
                                                <BootStrap.Card.Body>
                                                    <div>{bottom.productname}</div>
                                                    <div>{bottom.category1}</div>
                                                    <div style={{color:"red"}}>₹{bottom.price}</div>
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
                                            <BootStrap.Card className='cardcarsol' style={{ width: '100%'}}>
                                                <div class="pad15" onClick={() => Nextsteps(gentle.id)}>
                                                <BootStrap.Card.Img variant="top" src={gentle.productimage1} />
                                                <BootStrap.Card.Body>
                                                    <div>{gentle.productname}</div>
                                                    <div>{gentle.category1}</div>
                                                    <div style={{color:"red"}}>₹{gentle.productprice}</div>
                                                </BootStrap.Card.Body>
                                                </div>
                                            </BootStrap.Card>
}
                                        </div>
                                    )
                                }

                            </div>
                            <button class="btn btn-primary leftLst"> ← </button>
                            <button class="btn btn-primary rightLst"> → </button>


                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <ToastContainer />
            <Footer />


        </div>
    )
}

export default MostPopularViewing