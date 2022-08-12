import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import './Styles/Search.scss'
import * as BootStrap from 'react-bootstrap'
import Service from './SearchService/Service';
import TotService from './SearchService/TotService';
import { useNavigate, useParams } from 'react-router-dom';
import { MdCardMembership } from "react-icons/md";



function AllSearch() {
    const usenavigate = useNavigate()
    const { elements } = useParams()
    const [color, setColor] = useState("")
    const [trend, setTrend] = useState("")
    const [product, setProduct] = useState([])
    const [normal, setNormal] = useState([])
    const [coloring, setColoring] = useState([])
    const [coloringp, setColoringp] = useState([])
    const [dummy, setDummy] = useState('')

    let size = product.length + normal.length
    useEffect(() => {

    }, [size])

    console.log(size)

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
        findallproductsInProduct()
        findallproductsInTot()
        getBySpecification1(color);
        getBySpecification2(color);
    }, [color])

    const getBySpecification1 = () => {
        TotService.getByColor(color).then((response) => {
            setColoring(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const getBySpecification2 = () => {
        Service.getByColor(color).then((response) => {
            setColoringp(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const findallproductsInProduct = () => {
        Service.getAllProducts().then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const findallproductsInTot = () => {
        TotService.allProducts().then((response) => {
            setNormal(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    function openup(id) {
        usenavigate('/most/' + id)
    }

    function normaling(id) {
        usenavigate('/nextsteps/' + id)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [color]);


    return (
        <div className='searchbar'>
            <Header />

            <div className='sidebardwadwadaw'>
                <header>Checking</header>
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
                        <span class="dot2" onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}></span>
                        <div className='orangecolor'>Orange</div>
                    </div>

                    <div className='uwinajn'>

                        <span class="dot3" onClick={() => setColor("brown")} style={{ backgroundColor: "brown" }}></span>
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



                <br /><br />



            </div>


            <div>
                <div>
                    <div >
                        <BootStrap.Row xs={1} md={3} >
                            <>
                                {color === "" && trend === "" &&
                                    <>
                                        {
                                            product.filter(product => {
                                                if (elements === '') {
                                                    return null;
                                                } else if (product.productname.toLowerCase().includes(elements.toLowerCase())) {
                                                    return product;
                                                } else if (product.category1.toLowerCase().includes(elements.toLowerCase())) {
                                                    return product;
                                                } else if (product.productspecification1.toLowerCase().includes(elements.toLowerCase())) {
                                                    return product;
                                                }
                                            }).map(product =>
                                                <BootStrap.Col>
                                                    <div className='items'>

                                                        <BootStrap.CardGroup >
                                                            <BootStrap.Card className='jawdjawd'>
                                                                <BootStrap.Card.Img onClick={() => openup(product.id)} variant="top" src={product.productimage1} />
                                                                <BootStrap.Card.Body onClick={() => openup(product.id)} >

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

                                                                    <div className='kwjdnjwakwn'>
                                                                        ₹{product.productprice}
                                                                    </div>
                                                                </BootStrap.Card.Body>


                                                            </BootStrap.Card>
                                                        </BootStrap.CardGroup>

                                                        <br />
                                                    </div>
                                                </BootStrap.Col>

                                            )
                                        }
                                    </>}
                            </>

                            <>
                                {color !== "" && trend === "" && color !== elements &&
                                    <>
                                        {
                                            coloring.map(product =>
                                                <BootStrap.Col>
                                                    <div className='items'>

                                                        <BootStrap.CardGroup >
                                                            <BootStrap.Card className='jawdjawd'>
                                                                <BootStrap.Card.Img onClick={() => openup(product.id)} variant="top" src={product.image1} />
                                                                <BootStrap.Card.Body onClick={() => openup(product.id)} >

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

                                                                    <div className='kwjdnjwakwn'>
                                                                        ₹{product.price}
                                                                    </div>
                                                                </BootStrap.Card.Body>


                                                            </BootStrap.Card>
                                                        </BootStrap.CardGroup>







                                                        <br />
                                                    </div>
                                                </BootStrap.Col>

                                            )
                                        }
                                    </>}
                            </>

                            <>
                            {color !== "" && trend === "" && color !== elements &&
                            <>
                            {
                                coloringp.map(product =>
                                    <BootStrap.Col>
                                        <div className='items'>
                                           
                                                <BootStrap.CardGroup >
                                                    <BootStrap.Card className='jawdjawd'>
                                                        <BootStrap.Card.Img onClick={() => openup(product.id)} variant="top" src={product.productimage1} />
                                                        <BootStrap.Card.Body onClick={() => openup(product.id)} >

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

                                                            <div className='kwjdnjwakwn'>
                                                                ₹{product.productprice}
                                                            </div>
                                                        </BootStrap.Card.Body>


                                                    </BootStrap.Card>
                                                </BootStrap.CardGroup>
                                            






                                            <br />
                                        </div>
                                    </BootStrap.Col>

                                )

                            }</>}
                            </>


                            <>
                            {color === "" && trend === "" &&
                            <>
                            {
                                normal.filter(product => {
                                    if (elements === '') {
                                        return null;
                                    } else if (product.productname.toLowerCase().includes(elements.toLowerCase())) {

                                        return product;
                                    } else if (product.category1.toLowerCase().includes(elements.toLowerCase())) {
                                        return product;
                                    } else if (product.productspecification1.toLowerCase().includes(elements.toLowerCase())) {
                                        return product;
                                    }
                                }).map(product =>
                                    <BootStrap.Col>
                                        <div className='items'>
                                            
                                                <BootStrap.CardGroup >
                                                    <BootStrap.Card className='jawdjawd'>
                                                        <BootStrap.Card.Img onClick={() => normaling(product.id)} variant="top" src={product.image1} />
                                                        <BootStrap.Card.Body onClick={() => normaling(product.id)} >

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

                                                            <div className='kwjdnjwakwn'>
                                                                ₹{product.price}
                                                            </div>
                                                        </BootStrap.Card.Body>


                                                    </BootStrap.Card>
                                                </BootStrap.CardGroup>
                                            






                                            <br />
                                        </div>
                                    </BootStrap.Col>

                                )
                            }
                            </>}
                            </>
                        </BootStrap.Row>
                    </div>
                </div>
            </div>


            <br /> <br />   <br />   <br />   <br />  <br /> <br /><br /><br />
            <br /> <br />   <br />   <br />   <br />  <br /> <br /><br /><br />
            <Footer />






        </div>
    )
}

export default AllSearch