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





function Category() {
    const { gender } = useParams()
    const [gentle, setGentle] = useState([])
    const [category1, setCategory1] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const usenavigate = useNavigate()
    const [color, setColor] = useState("")

    let size = category1.length+gentle.length

    useEffect(()=>{

    },[size])



    useEffect(() => {
        setCheck(data.username)
        findByGender(gender)
        findByCategory1(gender)
    }, [])

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
                <br/>
                <div class="sidebardwadwadaw">
                    <header>Color's Available</header>
                    {
                        gentle.map(product =>
                            <div className='uwinajn'>
                                <span class="dot" onClick={() => setColor(product.productspecification1)} style={{ backgroundColor: `${product.productspecification1}` }}></span>
                            </div>

                        )
                    }
                    {
                        category1.map(product =>
                            <div className='uwinajn'>
                                {color !== product.productspecification1 &&
                                    <span class="dot" onClick={() => setColor(product.productspecification1)} style={{ backgroundColor: `${product.productspecification1}` }}></span>}

                            </div>

                        )
                    }


                </div>
                {color !== "" &&
                    <BootStrap.Button className='njwnak' onClick={() => setColor("")}>View All Color</BootStrap.Button>}
                
            </div>




            <br />




            <div>
                <div>
                    <BootStrap.Row xs={1} md={3} >
                        {
                            gentle.map(gentle =>
                                <BootStrap.Col>
                                    <div>

                                        {color === "" &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                        <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category1}
                                                        </div>
                                                        <div className='categoryandcategory'>
                                                            {gentle.category2} Colors
                                                        </div>
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


                                        {color === gentle.productspecification1 &&
                                            <BootStrap.CardGroup>
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                    <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category1}
                                                    </div>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category2} Colors
                                                    </div>
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
                                        </BootStrap.CardGroup>}

                                        <br />
                                    </div>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>
            </div>


            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >
                        {
                            category1.map(gentle =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" &&
                                            <BootStrap.CardGroup>
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                    <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category1}
                                                    </div>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category2} Colors
                                                    </div>
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



                                        {color === gentle.productspecification1 &&
                                            <BootStrap.CardGroup>
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(gentle.id)} variant="top" src={gentle.productimage1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(gentle.id)}>
                                                    <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category1}
                                                    </div>
                                                    <div className='categoryandcategory'>
                                                        {gentle.category2} Colors
                                                    </div>
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
                </div>
            </div>










            <br /><br/><br/><br/><br/><br/><br/><br/><br/>


            <Footer />



        </div>


    )
}

export default Category