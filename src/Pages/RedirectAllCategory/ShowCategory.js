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






function ShowCategory() {
    const { option } = useParams()
    const [product, setProduct] = useState([])
    const [gentle,setGentle] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})
    const [collection,setCollection] = useState([])


    

    const usenavigate = useNavigate()

    

    useEffect(() => {
        setCheck(data.username)
        getByCategory(option);
        getByGender(option);
        getByCollection(option);
    }, [])

    

    const getByGender = (option) =>{
        OptionPageService.findByGender(option).then((response)=>{
          setGentle(response.data);
          console.log(response.data);
        }).catch(error=>{
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

    const getByCollection = (option) =>{
        OptionPageService.findByCollection(option).then((response)=>{
            setCollection(response.data);
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    

    const Nextstep=(id)=>{
      console.log(id);
      usenavigate('/nextsteps/'+id);
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    const deleteById = (productid) =>{
        if(productid){
            const confirmBox = window.confirm("Do Your Really Want To Delete This Product");
        
        if(confirmBox === true){
            const confirmation = window.confirm("Click Ok To Continue TO Delete");
        
        if(confirmation === true){
            CategoryService.deleted(productid).then((response)=>{
                getByCategory()
                getByCollection()
                getByGender()
                alert("Product Deleted SuccessFully");
            }).catch(error =>{
                console.log(error)
            })
        }
    }
    }
    }

    function UpdateDetails(id){
        usenavigate('/update/productnormal/'+id)
    }

    

    console.log(data.username)


    return (
        <div className='bodyd'>

            <Headers/>
            



            <br/> 

            <div>
            <div >
                <BootStrap.Row xs={1} md={4} >
                    {
                        product.map(product =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img onClick={()=> Nextstep(product.id)} variant="top" src={product.image1} />
                                            <BootStrap.Card.Body onClick={()=> Nextstep(product.id)} >
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {product.gender}
                                                    ({product.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                <BootStrap.Card.Text>
                                                    {product.category}
                                                </BootStrap.Card.Text>
                                                <div>
                                                ???{product.price}
                                                </div>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(product.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>deleteById(product.id)}>Delete</BootStrap.NavLink>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>UpdateDetails(product.id)}>Update</BootStrap.NavLink>}
                                        </BootStrap.Card>
                                    </BootStrap.CardGroup>
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
                <BootStrap.Row xs={1} md={4} >
                    {
                        gentle.map(gentle =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img onClick={()=> Nextstep(gentle.id)} variant="top" src={gentle.image1} />
                                            <BootStrap.Card.Body onClick={()=> Nextstep(gentle.id)}>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {gentle.gender}
                                                    ({gentle.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <div>
                                                    {gentle.category1}
                                                </div>
                                                <div>
                                                ???{gentle.price}
                                                </div>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(gentle.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>deleteById(gentle.id)}>Delete</BootStrap.NavLink>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>UpdateDetails(gentle.id)}>Update</BootStrap.NavLink>}
                                        </BootStrap.Card>
                                    </BootStrap.CardGroup>
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
                <BootStrap.Row xs={1} md={4} >
                    {
                        collection.map(collection =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img onClick={()=> Nextstep(collection.id)} variant="top" src={collection.image1} />
                                            <BootStrap.Card.Body onClick={()=> Nextstep(collection.id)}>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {collection.gender}
                                                    ({collection.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <BootStrap.Card.Text>
                                                    {collection.category1}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Text>
                                                ???{collection.price}
                                                </BootStrap.Card.Text>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(collection.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>deleteById(collection.id)}>Delete</BootStrap.NavLink>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>UpdateDetails(collection.id)}>Update</BootStrap.NavLink>}
                                        </BootStrap.Card>
                                    </BootStrap.CardGroup>
                                    <br />
                                </div>
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
            </div>
            </div>



            



            
                    
                


            <br/>

            <Footer/>


        </div>


    )
}

export default ShowCategory