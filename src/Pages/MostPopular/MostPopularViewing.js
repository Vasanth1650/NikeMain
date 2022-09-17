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
import { MdOutlineVerifiedUser } from "react-icons/md";
import Stars from './Stars'

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
    const [reference, setReference] = useState("")
    const [bag, setBag] = useState([])
    const [comments, setComments] = useState([])
    const [rating,setRating] = useState()
    const [star1,setStar1] = useState()
    const [star2,setStar2] = useState()
    const [star3,setStar3] = useState()
    const [star4,setStar4] = useState()
    const [star5,setStar5] = useState()
    

    useEffect(()=>{
        calculator()
    },[comments])
    

    function calculator(){
        var verybad = 0;
        var bad = 0;
        var okay = 0;
        var good = 0;
        var verygood = 0
        comments.filter(comments=>{
            if(comments.rating==="VERYGOOD"){
                verygood++
                
            }else if(comments.rating==="OKAY"){
                okay++
            }else if(comments.rating==="GOOD"){
                good++
            }else if(comments.rating==="BAD"){
                bad++
            }else if(comments.rating==="VERYBAD"){
                verybad++
            }
        })
        var calc = Math.round((5*verygood+4*good+3*okay+2*bad+1*verybad)/(verygood+okay+verybad+bad+good))
        var doublecalc = (5*verygood+4*good+3*okay+2*bad+1*verybad)/(verygood+okay+verybad+bad+good)
        console.log("VERRYGOOD",verygood,calc)
        if(calc===5){
            if(doublecalc>=4.5){
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star checked")
                setStar4("fa fa-star checked")
                setStar5("fa fa-star checked")
            }else{
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star checked")
                setStar4("fa fa-star checked")
                setStar5("fa fa-star-half-full")
            }
            
        }else if(calc===4){
            if(doublecalc>=3.5){
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star checked")
                setStar4("fa fa-star checked")
                setStar5("fa fa-star")
            }else{
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star checked")
                setStar4("fa fa-star-half-full")
                setStar5("fa fa-star")
            }
            
        }else if(calc===3){
            if(doublecalc>=4.5){
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star checked")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }else{
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star-half-full")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }
            
        }else if(calc===2){
            if(doublecalc>=4.5){
                setStar1("fa fa-star checked")
                setStar2("fa fa-star checked")
                setStar3("fa fa-star")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }else{
                setStar1("fa fa-star checked")
                setStar2("fa fa-star-half-full")
                setStar3("fa fa-star")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }
            
        }else if(calc===1){
            if(doublecalc>=4.5){
                setStar1("fa fa-star checked")
                setStar2("fa fa-star")
                setStar3("fa fa-star")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }else{
                setStar1("fa fa-star-half-full")
                setStar2("fa fa-star")
                setStar3("fa fa-star")
                setStar4("fa fa-star")
                setStar5("fa fa-star")
            }
            
        }else{
            setStar1("fa fa-star")
            setStar2("fa fa-star")
            setStar3("fa fa-star")
            setStar4("fa fa-star")
            setStar5("fa fa-star")
        }
    }

    
    

    useEffect(() => {
        setUserid(data.id);
        setUsername(data.email)
        setProductname(product.productname)
        setImage1(product.productimage1)
        setPrice(product.productprice)
        setCheck(data.username);
        setProductid(id)
        setReference("most")
    })

    let sizeign = bottom.length + gentle.length



    useEffect(() => {

    }, [sizeign])

    useEffect(() => {
        getByCategory(product.category1);
        findByGender(product.category1)
        findByName(product.productname)
    }, [product])

    const findByGender = () => {
        DashboardService.getByCategory1(product.category1).then((response) => {
            setGentle(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }

    const findByName = () => {
        DashboardService.getByName(product.productname).then((response) => {
            setSimilar(response.data)
            
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
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined") && (!product.buyingoption)) {
            if (bag.length < 5) {
                const check = { userid, username, productname, image1, price, size, productid, reference }
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
                alert("Your Bag Is Full")
            }
        } else if ((localStorage.getItem("USER_KEY")) && (check !== "undefined") && (product.buyingoption === "Membership")) {
            const check = { userid, username, productname, image1, price, size, productid, reference }
            if (data.subscription !== "No Subscription") {
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
                toast("This Product Is Only For Exclusive Member Subscription")
            }
        }
        else {
            usenavigate('/login')
        }
    }


    useEffect(() => {
        getting(id)

    }, [id])

    const getting = (id) => {
        DashboardService.getByIds(id).then((response) => {
            setProduct(response.data)
            setComments(response.data.comments)


        }).catch(err => {
            console.log(err)
            usenavigate(-1)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
            setBag(response.data.bag)
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
        usenavigate('/nextsteps/' + ids);
    }

    const Nextsteps = (ids) => {

        usenavigate('/most/' + ids);
    }

    const [csize, setCsize] = useState()

    useEffect(() => {
        setCsize(comments.length)

    }, [comments])

    function commentSection(productname,id){
        usenavigate("/comments/"+productname,{state:{id}})
    }
    


    return (
        
        <div className='bodyd'>
        

            <Headers />

            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src={product.productimage1} />
                        <div className='vido' >
                            <ReactPlayer width={500} height={451} muted type='video/mp4' loop playing={true} url={product.productimage2} playsinline />
                        </div>


                        <div className='conentingsi'>
                            <div style={{ color: "black", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} className="produ">{product.productname} <BootStrap.Button className='favorite' onClick={wishlist}><AiOutlineHeart /></BootStrap.Button></div>

                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.category1}</div>
                            <br />
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>₹{product.productprice}
                                <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Includes All Taxes</div>

                            </div>
                            <br />
                            {
                                similar.map(similar =>

                                    <div className='kuttsdes'>

                                        <img width="75" className='kutti' onClick={() => Nextsteps(similar.id)} src={similar.productimage1}></img>
                                        {product.id === similar.id &&
                                            <div>--------</div>}
                                    </div>

                                )
                            }

                            <br />
                            <br />
                            <br />
                            <br /><br />
                            <div style={{ paddingBottom: "5%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Size</div>
                            {product.size1 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</BootStrap.Button>}
                            {product.size2 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</BootStrap.Button>}
                            {product.size3 !== "-" &&
                                <div className='dashhider'>---------------------------------</div>}
                            {product.size3 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</BootStrap.Button>}
                            {product.size4 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</BootStrap.Button>}
                            <div className='dashhider'>---------------------------------</div>
                            {product.size5 !== "-" &&
                                <BootStrap.Button className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</BootStrap.Button>}
                            <button style={{ color: "black" }} className='sizechartss' onClick={() => sizeChart(product.category1)}>Size Chart</button>

                        </div>
                    </div>
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage4} />
                        <div className='conentings'>
                            <div className='atsdaw'>
                                <a style={{ style: "black", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }} href='#' >Including All Taxes Applied..</a>
                            </div>
                            <BootStrap.Button className='bags' onClick={handleClick}>Add to bag</BootStrap.Button>


                        </div>

                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage6} />
                        <div className='conenting1'>
                            <br />
                            <div style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>{product.productdescription}
                                <div className='extra'>
                                    <button style={{ marginLeft: "-2%", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: "large" }} class="btn popup-btn" href="#">View Details</button>
                                </div>



                                <div className='extra'>
                                    <div style={{position:"absolute",marginLeft:"25%",marginTop:"2.2%"}}>
                                        <span class={star1}></span>
                                        <span class={star2}></span>
                                        <span class={star3}></span>
                                        <span class={star4}></span>
                                        <span class={star5}></span></div>
                                    <div class="dropdown show">

                                        <button style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", backgroundColor: "transparent",width:"100%", height:"80px",textAlign:"left",color: "black", border: "none", fontSize: "large" }} class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Reviews({csize})</button>






                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ width: "100%", border: "none",overflow:"scroll",height:"300px",overflowX:"hidden"}}>
                                            {comments.slice(-2).map(comments =>
                                                <>
                                                    <div class="row text" style={{ textAlign: "left", cursor: "pointer" }} onClick={()=>commentSection(product.productname,product.id)}>
                                                        <div class="card" style={{ width: "90%", backgroundColor: "white", textAlign: "left" }}>
                                                            <div class="card-body">
                                                                <div class="card-title">{comments.username}<div><MdOutlineVerifiedUser /> <div style={{ color: "black" }}>Verified User</div></div></div>

                                                                <div class="card-subtitle mb-2 text-muted">Rating : {comments.rating}</div>
                                                                <div class="card-text">Comments : {comments.comments}.</div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )

                                            }
                                            <div class="row text" style={{ textAlign: "left", cursor: "pointer" }}>
                                                <div class="card" style={{ width: "90%", backgroundColor: "white", textAlign: "left" }}>
                                                    <div class="card-body">
                                                        <li><a href='' onClick={()=>commentSection(product.productname,product.id)}>See More Reviews And Add Reviews</a></li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div></div>

                        <div class="popup-wrap" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
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

            <div className='similars' style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>You May Also Like This</div>
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
                            <button class="btn btn-primary leftLst" style={{ backgroundColor: "whitesmoke", color: "black", paddingTop: "1%", paddingBottom: "1%", paddingLeft: "1.5%", paddingRight: "1.5%" }}> ← </button>
                            <button class="btn btn-primary rightLst" style={{ backgroundColor: "whitesmoke", color: "black", paddingTop: "1%", paddingBottom: "1%", paddingLeft: "1.5%", paddingRight: "1.5%" }}> → </button>


                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <ToastContainer />
            <Footer />


        </div>
    )
}

export default MostPopularViewing