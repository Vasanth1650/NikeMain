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




function ShowCategory() {
    const { option } = useParams()
    const [product, setProduct] = useState([])
    const [gentle, setGentle] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const [collection, setCollection] = useState([])
    const [color, setColor] = useState("")
    const usenavigate = useNavigate()

    console.log(color)



    useEffect(() => {
        
            setCheck(data.username)
            getByCategory(option);
            getByGender(option);
            getByCollection(option);
        
        
    }, [])



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



    console.log(data.username)


    return (
        <div className='bodyd'>

            <Headers />

            <div className='sidebardwadwadaw'>
                <header>Filter</header>
                <div class="sidebardawdwadwa">
                    <header>Color's Available</header>
                    {
                        product.map(product =>
                            <div className='uwinajn'>

                                <span class="dot" onClick={() => setColor(product.productspecification1)} style={{ backgroundColor: `${product.productspecification1}` }}></span>

                            </div>

                        )
                    }
                    {
                        gentle.map(product =>
                            <div className='uwinajn'>
                                {color!== product.productspecification1 &&
                                <span class="dot" onClick={() => setColor(product.productspecification1)} style={{ backgroundColor: `${product.productspecification1}` }}></span>}
                                
                            </div>

                        )
                    }
                    {
                        collection.map(product =>
                            
                            <div className='uwinajn'>

                                <span class="dot" onClick={() => setColor(product.productspecification1)} style={{ backgroundColor: `${product.productspecification1}`}}></span>
                                
                            </div>

                        )
                    }
                    
                </div>
                {color!=="" &&
                <BootStrap.Button className='njwnak' onClick={()=>setColor("")}>View All Color</BootStrap.Button>}
                <div class="sidebardwadwadaw">
                    <header>Category</header>
                    <Dropdown>
                        <Dropdown.Toggle className='bjdwanka' id="dropdown-basic">
                            Category Available
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item href="/section/Men's Shoes">Mens Shoes</Dropdown.Item>
                            <Dropdown.Item href="/section/Mens training">Mens Training</Dropdown.Item>
                            <Dropdown.Item href="/section/Kids's Shoes">Kids Shoes</Dropdown.Item>
                            <Dropdown.Item href="/section/Women's">Womens Shoes</Dropdown.Item>
                            <Dropdown.Item href="/section/Tops">Tops</Dropdown.Item>
                            <Dropdown.Item href="/section/Womens training">Womens Training</Dropdown.Item>
                            <Dropdown.Item href="/section/Shorts">Shorts</Dropdown.Item>
                            <Dropdown.Item href="/section/T Shirt">T Shirts</Dropdown.Item>
                            <Dropdown.Item href="/section/Socks">Socks</Dropdown.Item>
                        </Dropdown.Menu>



                    </Dropdown>

                    

                </div>
            </div>




            <br />

            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            product.map(product =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div>
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        }


                                        {color === product.productspecification1 &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div>
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
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





            <br />

            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            collection.map(product =>
                                <BootStrap.Col>
                                    <div className='items'>
                                        {color === "" &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div >
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        }


                                        {color === product.productspecification1 &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div>
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
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






            <br />

            <div>
                <div >
                    <BootStrap.Row xs={1} md={3} >

                        {
                            gentle.map(product =>
                                <BootStrap.Col>
                                    
                                        {color === "" &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div>
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        }


                                        {color === product.productspecification1 &&
                                            <BootStrap.CardGroup>
                                                <BootStrap.Card >
                                                    <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.image1} />
                                                    <BootStrap.Card.Body onClick={() => Nextstep(product.id)} >
                                                        <BootStrap.Card.Text style={{ color: "red" }}>
                                                            {product.gender}
                                                            ({product.category3})
                                                        </BootStrap.Card.Text>
                                                        <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                        <div>
                                                            {product.category1}
                                                        </div>
                                                        <div>
                                                            ₹{product.price}
                                                        </div>
                                                    </BootStrap.Card.Body>
                                                    <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                        Buy Now
                                                    </BootStrap.Button>
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                        <BootStrap.NavLink onClick={() => UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                                </BootStrap.Card>
                                            </BootStrap.CardGroup>
                                        }



                                      <br/>
                                </BootStrap.Col>

                            )
                        }
                    </BootStrap.Row>
                </div>
            </div>



            
















            <br />

            <Footer />


        </div>


    )
}

export default ShowCategory