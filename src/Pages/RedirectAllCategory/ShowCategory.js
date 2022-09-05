import React from 'react'
import './Styles/CategoryPage.css';
import './Styles/CategoryPage.scss';
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import OptionPageService from './Services/CategoryService';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import CategoryService from './Services/CategoryService';
import Sibebar from './Sidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import './Styles/Sidebar.scss'
import $ from 'jquery'
import { FcLock } from "react-icons/fc";
import { MdCardMembership } from "react-icons/md";




function ShowCategory() {
    const { option } = useParams()
    const [product, setProduct] = useState([])
    const [gentle, setGentle] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const [collection, setCollection] = useState([])
    const [color, setColor] = useState("")
    const [trend, setTrend] = useState("")
    const usenavigate = useNavigate()
    const [coloring, setColoring] = useState([])
    const [trending, setTrending] = useState([])

    let size = product.length + gentle.length + collection.length
    useEffect(() => {

    }, [size, trend])



    useEffect(() => {
        setCheck(data.username)
        getByCategory(option);
        getByGender(option);
        getByCollection(option);
        getBySpecification1(color);

    }, [color])

    useEffect(() => {
        getByTrender(trend);
    }, [trend])

    console.log(trend)

    const getByTrender = () => {
        OptionPageService.getByTrend(trend).then((response) => {
            setTrending(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getBySpecification1 = () => {
        OptionPageService.getByColor(color).then((response) => {
            setColoring(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }





    const getByGender = (option) => {
        OptionPageService.findByGender(option).then((response) => {
            setGentle(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const getByCategory = (option) => {
        OptionPageService.findByCategory(option).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const getByCollection = (option) => {
        OptionPageService.findByCollection(option).then((response) => {
            setCollection(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (color) {
            if (coloring.length === 0) {
                alert("No Product Available In This Color")
                setColor("")
            }
        }
    }, [coloring])


    const Nextstep = (id) => {
        console.log(id);
        usenavigate('/nextsteps/' + id);
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    const deleteById = (productid) => {
        if (productid) {
            const confirmBox = window.confirm("Do Your Really Want To Delete This Product");

            if (confirmBox === true) {
                const confirmation = window.confirm("Click Ok To Continue TO Delete");

                if (confirmation === true) {
                    CategoryService.deleted(productid).then((response) => {
                        getByCategory()
                        getByCollection()
                        getByGender()
                        alert("Product Deleted SuccessFully");
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }

    function UpdateDetails(id) {
        usenavigate('/update/productnormal/' + id)
    }

    const [dummy, setDummy] = useState('')


    const handleChange = event => {
        if (event.target.checked) {
            console.log("Yes")
            console.log(event.target.value)
            setTrend(event.target.value)
        } else {
            console.log("Not")
            setTrend("")
        }
        setDummy(current => !current)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
      }, [color,trend]);





    return (
        <div className='bodyd'>

            <Headers />

            <div className='sidebardwadwadaw'>
                <header>{option}({size})</header>
                <div className='jfefwinda'>
                    <div className='nidnwa'><a href="/section/Men's Shoes">Mens Shoes</a></div>
                    <div className='nidnwa'><a href="/section/Mens training">Mens Training</a></div>
                    <div className='nidnwa'><a href="/section/Kids's Shoes">Kids Shoes</a></div>
                    <div className='nidnwa'><a href="/section/Women's">Womens Shoes</a></div>
                    <div className='nidnwa'><a href="/section/Womens training">Womens Training</a></div>
                    <div className='nidnwa'><a href="/section/Shorts">Shorts</a></div>
                    <div className='nidnwa'><a href="/section/Tops">Tops</a></div>
                    <div className='nidnwa'><a href="/section/T Shirt">T Shirts</a></div>
                    <div className='nidnwa'><a href="/section/Socks">Socks</a></div>
                </div>

                <br />
                <div class="line-3">
                    <hr></hr>
                </div>

                <div class="sidebardawdwadwa" className='sidebardawdwadwa1'>
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
                        <span class="dot2" onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" ,marginTop:"33%"}}></span>
                        <div className='orangecolor'>Yellow</div>
                    </div>

                    <div className='uwinajn'>

                        <span class="dot3" onClick={() => setColor("brown")} style={{ backgroundColor: "brown" ,marginLeft:"-2%"}}></span>
                        <div className='browncolor' style={{marginLeft:"1%"}}>Brown</div>
                    </div>



                    <br /><br /><br /><br /><br /><br />
                </div>


                {color !== "" &&
                    <BootStrap.Button className='njwnak' onClick={() => setColor("")}>Remove</BootStrap.Button>}



                <br />
                <div class="line-3">
                    <hr></hr>
                </div>
                <div className='sidebardawdwadwa'>
                    <div className='colorsector'>Current</div>
                    <div className='trendswicth'>
                        <BootStrap.Form.Check
                            className='switchswift'
                            type='checkbox'
                            id="custom-switch"
                            label=""
                            value="Trend"
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                        <div className='trendswitch'>Just In</div>
                    </div>


                </div>

                <br /><br />
                <div class="line-3">
                    <hr></hr>
                </div>


            </div>






            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            product.map(product =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" && trend === "" &&
                                            <BootStrap.CardGroup >
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                        <div className='categoryandcategory'>
                                                            {product.category1}
                                                        </div>
                                                        {product.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {product.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {product.category2} Colors
                                                            </div>}

                                                        <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
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







            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            collection.map(product =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" && trend === "" &&
                                            <BootStrap.CardGroup >
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                        <div className='categoryandcategory'>
                                                            {product.category1}
                                                        </div>
                                                        {product.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {product.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {product.category2} Colors
                                                            </div>}

                                                        <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
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








            <div>
                {color==="" && trend==="" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            gentle.map(product =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" && trend === "" &&
                                            <BootStrap.CardGroup >
                                                <BootStrap.Card className='jawdjawd'>
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                        <div className='categoryandcategory'>
                                                            {product.category1}
                                                        </div>
                                                        {product.buyingoption === "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                <MdCardMembership />
                                                            </div>
                                                        }

                                                        {product.buyingoption !== "Membership" &&
                                                            <div className='categoryandcategory'>
                                                                {product.category2} Colors
                                                            </div>}

                                                        <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>

                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
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
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            coloring.map(product =>
                                <BootStrap.Col>

                                    {color !== "" && trend === "" &&
                                        <BootStrap.CardGroup >
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                    <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                    <div className='categoryandcategory'>
                                                        {product.category1}
                                                    </div>
                                                    {product.buyingoption === "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            <MdCardMembership />
                                                        </div>
                                                    }

                                                    {product.buyingoption !== "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            {product.category2} Colors
                                                        </div>}

                                                    <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                        ₹{product.price}
                                                    </div>
                                                </BootStrap.Card.Body>

                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                            </BootStrap.Card>
                                        </BootStrap.CardGroup>
                                    }

                                    <br />
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>
            </div>



            <div>
            {trend !== "" && color === "" &&
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            trending.map(product =>
                                <BootStrap.Col>

                                    
                                        <BootStrap.CardGroup >
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                    <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                    <div className='categoryandcategory'>
                                                        {product.category1}
                                                    </div>
                                                    {product.buyingoption === "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            <MdCardMembership />
                                                        </div>
                                                    }

                                                    {product.buyingoption !== "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            {product.category2} Colors
                                                        </div>}

                                                    <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                        ₹{product.price}
                                                    </div>
                                                </BootStrap.Card.Body>

                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                            </BootStrap.Card>
                                        </BootStrap.CardGroup>
                                    
                                    <br />
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
                            trending.filter(product => {
                                if (color === product.productspecification1) {
                                    return product;
                                }
                            }).map(product =>
                                <BootStrap.Col>
                                        <BootStrap.CardGroup >
                                            <BootStrap.Card className='jawdjawd'>
                                                <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >

                                                    <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>

                                                    <div className='categoryandcategory'>
                                                        {product.category1}
                                                    </div>
                                                    {product.buyingoption === "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            <MdCardMembership />
                                                        </div>
                                                    }

                                                    {product.buyingoption !== "Membership" &&
                                                        <div className='categoryandcategory'>
                                                            {product.category2} Colors
                                                        </div>}

                                                    <div className='kwjdnjwakwn' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>
                                                        ₹{product.price}
                                                    </div>
                                                </BootStrap.Card.Body>

                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                            </BootStrap.Card>
                                        </BootStrap.CardGroup>
                                    
                                    <br />
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>}
            </div>




















            <br /> <br />   <br />   <br />   <br />  <br /> <br /><br /><br />
            <br /> <br />   <br />   <br />   <br />  <br /> <br /><br /><br />


            <Footer />


        </div>


    )
}

export default ShowCategory