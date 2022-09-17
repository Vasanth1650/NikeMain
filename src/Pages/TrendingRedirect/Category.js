import React from 'react'
import './Styles/DetailedPage.css';
import './Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardService from './Services/ProductService';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import $ from 'jquery'
import Dropdown from 'react-bootstrap/Dropdown';
import ProductService from './Services/ProductService';
import { FcLock } from "react-icons/fc";
import { MdCardMembership } from "react-icons/md";





function Category() {
    const { gender } = useParams()
    const [gentle, setGentle] = useState([])
    const [category1, setCategory1] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const usenavigate = useNavigate()
    const [color, setColor] = useState("")
    const [trending, setTrending] = useState([])
    const [trend, setTrend] = useState("")
    const [coloring, setColoring] = useState([])
    let size = category1.length + gentle.length

    useEffect(() => {

    }, [size])


    useEffect(() => {
        if (color) {
            if (coloring.length === 0) {
                alert("No Product Available In This Color")
                setColor("")
            }
        }
    }, [coloring])



    useEffect(() => {
        setCheck(data.username)
        findByGender(gender)
        findByCategory1(gender)
        getBySpecification1(color);
    }, [color])

    useEffect(() => {
        getByTrends()
    }, [trend])

    const getByTrends = () => {
        ProductService.getByTrend(trend).then((response) => {
            setTrending(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const getBySpecification1 = () => {
        ProductService.getByColor(color).then((response) => {
            setColoring(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const deleteById = (productid) => {
        if (productid) {
            const confirmBox = window.confirm("Do Your Really Want To Delete This Product");

            if (confirmBox === true) {
                const confirmation = window.confirm("Click Ok To Continue TO Delete");

                if (confirmation === true) {
                    DashboardService.deleteByProductId(productid).then((response) => {
                        findByGender();
                        alert("Product Deleted SuccessFully");
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }

    function UpdateDetails(id) {
        usenavigate('/update/product/' + id)
    }

    const findByGender = (gender) => {
        DashboardService.getByGender(gender).then((response) => {
            setGentle(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const findByCategory1 = (gender) => {
        DashboardService.getByCategory1(gender).then((response) => {
            setCategory1(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function popupOpenClose(popup) {

        /* Add div inside popup for layout if one doesn't exist */
        if ($(".wrapper").length == 0) {
            $(popup).wrapInner("<div class='wrapper'></div>");
        }

        /* Open popup */
        $(popup).show();

        /* Close popup if user clicks on background */
        $(popup).click(function (e) {
            if (e.target == this) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });

        /* Close popup and remove errors if user clicks on cancel or close buttons */
        $(popup).find("button[name=close]").on("click", function () {
            if ($(".formElementError").is(':visible')) {
                $(".formElementError").remove();
            }
            $(popup).hide();
        });
    }

    const Nextstep = (id) => {
        console.log(id);
        usenavigate('/most/' + id);
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])





    console.log(data.username)

    const [dummy, setDummy] = useState(false)


    const handleChange = event => {
        if (event.target.checked) {
            console.log("Yes")
            console.log(event.target.value)
            usenavigate('/update/product/' + event.target.value)
        } else {
            console.log("Not")
        }
        setDummy(current => !current)
    }


    const [dummys, setDummys] = useState('')


    const handleChanger = event => {
        if (event.target.checked) {
            console.log("Yes")
            console.log(event.target.value)
            setTrend(event.target.value)
        } else {
            console.log("Not")
            setTrend("")
        }
        setDummys(current => !current)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
      }, [color,trend]);




    return (
        <div className='bodyd'>

            <Headers />


            <div className='sidebardwadwadaw'>
                <header>{gender}({size})</header>
                <div className='jfefwinda'>
                    <div className='nidnwa'><a href="/mostpopular/Men's Shoes">Mens Shoes</a></div>
                    <div className='nidnwa'><a href="/mostpopular/Mens training">Mens Training</a></div>
                    <div className='nidnwa'><a href="/mostpopular/Sneakers">Sneakers</a></div>
                    <div className='nidnwa'><a href="/mostpopular/Women's Shoes">Womens Shoes</a></div>
                    <div className='nidnwa'><a href="/mostpopular/Womens training">Womens Training</a></div>
                    <div className='nidnwa'><a href="/mostpopular/BasketBall">BasketBall</a></div>
                </div>
                <br />

                <div class="line-3">
                    <hr></hr>
                </div>

                <div class="sidebardawdwadwa">
                    <div className='colorsector'>Colour</div>

                    <div className='uwinajn'>

                        <span class="dot" onClick={() => setColor("red")} style={{ backgroundColor: "red" }}></span>
                        <div className='redcolor'>Red</div>
                    </div>
                    <div className='uwinajn'>
                        <span class="dot" onClick={() => setColor("black")} style={{ backgroundColor: "black" }}></span>
                        <div className='redcolor'>Black</div>

                    </div>
                    <div className='uwinajn'>
                        <span class="dot" onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}></span>
                        <div className='redcolor'>Blue</div>
                    </div>

                    <div className='uwinajn'>
                        <span class="dot1" onClick={() => setColor("white")} style={{ backgroundColor: "white" }}></span>
                        <div className='whitecolor'>White</div>
                    </div>

                    <div className='uwinajn'>
                        <span class="dot4" onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}></span>
                        <div className='purplecolor'>Violet</div>
                    </div>

                    <div className='uwinajn'>

                        <span class="dot5" onClick={() => setColor("brown")} style={{ backgroundColor: "brown" }}></span>
                        <div className='browncolor'>Brown</div>
                    </div>



                    <br /><br /><br /><br /><br /><br />
                </div>


                {color !== "" &&
                    <BootStrap.Button className='njwnak' onClick={() => setColor("")}>View All Color</BootStrap.Button>}



                <br />
                <div class="line-3">
                    <hr></hr>
                </div>
                <div className='sidebardawdwadwa'>
                    <div className='colorsector'>Current</div>
                    <div>
                        <BootStrap.Form.Check
                            className='switchswift'
                            type='checkbox'
                            id="custom-switch"
                            label=""
                            value="Trend"
                            onChange={handleChanger}
                        />
                        <div className='trendswitch'>Trend</div>
                    </div>
                    <br />
                    <div>
                        <BootStrap.Form.Check
                            className='switchswift'
                            type='checkbox'
                            id="custom-switch"
                            label=""
                            value="Most Popular"
                            onChange={handleChanger}
                        />
                        <div className='trendswitch'>Most Popular</div>
                    </div>

                    <br />
                    <div>
                        <BootStrap.Form.Check
                            className='switchswift'
                            type='checkbox'
                            id="custom-switch"
                            label=""
                            value="Just In"
                            onChange={handleChanger}
                        />
                        <div className='trendswitch'>Just In</div>
                    </div>


                </div>

                <br /><br />
                <div class="line-3">
                    <hr></hr>
                </div>


            </div>






            <br />




            <div>
            {color==="" && trend==="" &&
                <div>
                    <BootStrap.Row xs={1} md={3} >
                        {
                            gentle.map(gentle =>
                                <BootStrap.Col>
                                    <div>

                                        {color === "" && trend === "" &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>

                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>

                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>

                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        }

                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>


            <div>
            {color === "" && trend === "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            category1.map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        





                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>



            <div>
            {color !== "" && trend === "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            gentle.filter(gentle=>{
                                if(gentle.productspecification1===color){
                                    return gentle;
                                }
                            }).map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        





                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>


            <div>
            {color !== "" && trend === "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            category1.filter(gentle=>{
                                if(gentle.productspecification1===color){
                                    return gentle;
                                }
                            }).map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        





                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>



            <div>
            {color === "" && trend !== "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            trending.map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        





                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>


            <div>
            {trend !== "" && color!== "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            trending.filter(gentle => {
                                if (color === gentle.productspecification1) {
                                    return gentle;
                                }
                            }).map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                       
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        {gentle.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {gentle.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {gentle.category2} Colors
                                                            </div>}
                                                        <div className='kwjdnjwakwn'>
                                                            ₹{gentle.productprice}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(gentle.id)}>Delete</BootStrap.NavLink>}


                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            value={gentle.id}
                                                            onChange={handleChange}

                                                        />}

                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        





                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>










            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /> <br />   <br />   <br />   <br />  <br /> <br /><br /><br />


            <Footer />



        </div>


    )
}

export default Category