import React, { useEffect, useState } from 'react'
import SalePageService from '../Service/SalePageService'
import * as BootStrap from 'react-bootstrap'
import { MdCardMembership } from "react-icons/md";
import Header from '../../Headers/Header';
import Footer from '../../Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../../Api/AuthenticationService';


function AllSaleProducts() {
    const [product, setProduct] = useState([])
    const [color, setColor] = useState("")
    const [trending, setTrending] = useState([])
    const [trend, setTrend] = useState("")
    const [coloring, setColoring] = useState([])
    const [data, setData] = useState({})
    const usenavigate = useNavigate()
    const location = useLocation()
    const [values,setValues] = useState("")

    useEffect(()=>{
        if(location.state){
            setValues(location.state.category)
        }
        
    },[location.state])

    React.useEffect(() => {
        SalePageService.getProducts().then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


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

    function responsegiver(id) {
        SalePageService.getById(id).then((response) => {
            usenavigate('/sale/viewer', { state: { id } })

        }).catch((err) => {
            console.log(err)
        })
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    function updater (id){
        usenavigate('/sale/saleupdate',{state: {id}})
    }

    return (
        <div className='allsaleproducts'>
            <Header />

            <div className='sidebardwadwadaw'>
                <header>Sale</header>
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

                {values==="All" &&
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
                </div>}


                {color !== "" &&
                    <BootStrap.Button className='njwnak' onClick={() => setColor("")}>View All Color</BootStrap.Button>}



                <br />
                {values==="All" &&
                <div class="line-3">
                    <hr></hr>
                </div>}

                {values==="All" &&
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

                    <br />
                    <div>
                        <BootStrap.Form.Check
                            className='switchswift'
                            type='checkbox'
                            id="custom-switch"
                            label=""
                            value="Sale"
                            onChange={handleChanger}
                        />
                        <div className='trendswitch'>Sale</div>
                    </div>


                </div>}

                <br /><br />
                {values==="All" &&
                <div class="line-3">
                    <hr></hr>
                </div>}


            </div>




            <div>
                
                   
                        <div>
                        {color === "" && trend === "" && values === "All" &&
                            <BootStrap.Row xs={1} md={3} >
                                {
                                    product.map(gentle =>
                                        <BootStrap.Col>
                                            <div className='items'>
                                            
                                               
                                                    <BootStrap.CardGroup>
                                                        <BootStrap.Card className='jawdjawd' >
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1}onClick={() => responsegiver(gentle.id)} />
                                                            <BootStrap.Card.Body onClick={() => responsegiver(gentle.id)}>

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
                                                                <BootStrap.NavLink onClick={()=>updater(gentle.id)}>Update</BootStrap.NavLink>}


                                                        </BootStrap.Card>
                                                    </BootStrap.CardGroup>
                                                

                                                <br />
                                            </div>
                                        </BootStrap.Col>

                                    )
                                }
                            </BootStrap.Row>}
                        </div>
                

                
                
                    
                        <div>
                        {color === "" && trend === "" && values!=="All" && values!== "" &&
                            <BootStrap.Row xs={1} md={3} >
                                {
                                    product.filter(product=>{
                                        if(product.category1===values){
                                            return product
                                        }
                                    }).map(gentle =>
                                        <BootStrap.Col>
                                            <div>
           
                                                
                                                    <BootStrap.CardGroup>
                                                        <BootStrap.Card className='jawdjawd' >
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1}onClick={() => responsegiver(gentle.id)} />
                                                            <BootStrap.Card.Body onClick={() => responsegiver(gentle.id)}>

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
                                                                <BootStrap.NavLink onClick={()=>updater(gentle.id)}>Update</BootStrap.NavLink>}


                                                        </BootStrap.Card>
                                                    </BootStrap.CardGroup>
                                                

                                                <br />
                                            </div>
                                        </BootStrap.Col>

                                    )
                                }
                            </BootStrap.Row>}
                        </div>
                



                
                    
                        <div>
                        {color !== "" && trend === "" && values==="All"  &&
                            <BootStrap.Row xs={1} md={3} >
                                {
                                    product.filter(product=>{
                                        if(color === product.productspecification1){
                                            return product;
                                        }
                                    }).map(gentle =>
                                        <BootStrap.Col>
                                            <div>
                                            
                                                
                                                    <>
                                                    <BootStrap.CardGroup>
                                                        <BootStrap.Card className='jawdjawd'>
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1}  onClick={() => responsegiver(gentle.id)}/>
                                                            <BootStrap.Card.Body  onClick={() => responsegiver(gentle.id)}>

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
                                                                <BootStrap.NavLink >Update</BootStrap.NavLink>}


                                                        </BootStrap.Card>
                                                    </BootStrap.CardGroup>
                                                    </>
                                                

                                                <br />
                                            </div>
                                        </BootStrap.Col>

                                    )
                                }
                            </BootStrap.Row>}
                        </div>
                


                
                    
                        <div>
                        {color === "" && trend !== "" && values==="All" &&
                        <>
                            <BootStrap.Row xs={1} md={3} >
                                {
                                    product.filter(product=>{
                                        if(product.category3 === trend){
                                            return product
                                        }
                                    }).map(gentle =>
                                        <BootStrap.Col>
                                            <div>
                                            
                                                
                                                    <BootStrap.CardGroup>
                                                        <BootStrap.Card className='jawdjawd'>
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1}  onClick={() => responsegiver(gentle.id)}/>
                                                            <BootStrap.Card.Body  onClick={() => responsegiver(gentle.id)}>

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
                                                                <BootStrap.NavLink >Update</BootStrap.NavLink>}


                                                        </BootStrap.Card>
                                                    </BootStrap.CardGroup>
                                                

                                                <br />
                                            </div>
                                        </BootStrap.Col>

                                    )
                                }
                            </BootStrap.Row></> }
                        </div>
                




                
                    
                        <div>
                        {color !== "" && trend !== "" && values==="All" && 
                            <BootStrap.Row xs={1} md={3} >
                                {
                                    product.filter(product=>{
                                        if(product.category3===trend && product.productspecification1===color){
                                            return product;
                                        }
                                    }).map(gentle =>
                                        <BootStrap.Col>
                                            <div >
                                            
                                                
                                                    <BootStrap.CardGroup>
                                                        <BootStrap.Card className='jawdjawd'>
                                                            <BootStrap.Card.Img variant="top" src={gentle.productimage1}  onClick={() => responsegiver(gentle.id)}/>
                                                            <BootStrap.Card.Body  onClick={() => responsegiver(gentle.id)}>

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
                                                                <BootStrap.NavLink >Update</BootStrap.NavLink>}


                                                        </BootStrap.Card>
                                                    </BootStrap.CardGroup>
                                                

                                                <br />
                                            </div>
                                        </BootStrap.Col>

                                    )
                                }
                            </BootStrap.Row>}
                        </div>
                



            </div>











            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <Footer />
            </div>
            

        </div>
    )
}

export default AllSaleProducts